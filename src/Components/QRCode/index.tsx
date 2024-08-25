import React from 'react'
import './style.scss'

export const QRCode = (): JSX.Element => {
	return (
		<div className='qr-container'>
			<div className='qr-container__scan'>
				<div className='qr-container__scan-qr-code'></div>
				<h3 className='qr-container__scan-title'>QR Code Scanning</h3>
			</div>
		</div>
	)
}
