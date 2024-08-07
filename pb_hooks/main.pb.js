/// <reference path="../pb_data/types.d.ts" />

// fires only for "Trades" collection
//onRecordBeforeCreateRequest
onRecordBeforeCreateRequest(e => {
	function sendRequest(path, body) {
		try {
			const res = $http.send({
				url: $os.getenv('WEBHOOK_URL') + path,
				method: 'POST',
				body: JSON.stringify(body),
				headers: { "content-type": "application/json" },
				timeout: 10
			})

			console.log(res.statusCode, res, '--------------------------------')
			return res.statusCode === 200 ? 'done' : 'error'
		} catch (error) {
			console.error(`Error sending request to ${path}:`, error, JSON.stringify(body))
			return 'error'
		}
	}


	const trader = e.record.get('trader')
	const subject = e.record.get('subject')
	const poolIndex = e.record.get('poolIndex')
	const ethAmount = e.record.get('ethAmount')
	const protocolEthAmount = e.record.get('protocolEthAmount')
	const subjectEthAmount = e.record.get('subjectEthAmount')
	const txHash = e.record.get('txHash')
	const isBuy = e.record.get('isBuy')
	const keyAmount = e.record.get('keyAmount')
	const supply = e.record.get('supply')

	e.record.set('status', 'processing')

	if(trader == subject && isBuy && ethAmount == 0 && supply == 1) {
		console.log('creating pool')
		e.record.set('status', sendRequest('/createPool', { txHash, trader, subject }))
	} else {
		const action = isBuy ? '/grant' : '/revoke'
		e.record.set('status', sendRequest(action, { trader, subject, txHash, poolIndex, keyAmount }))
	}
}, "Trades")