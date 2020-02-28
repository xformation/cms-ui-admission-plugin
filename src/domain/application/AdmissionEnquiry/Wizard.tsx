import './Slider.css';
import * as React from 'react';
import {Utils} from '../_utilites/Utils';

export interface WizardProps extends React.HTMLAttributes<HTMLElement>{
	data?: any,
	entity?: any,
}

export default class Wizard extends React.Component<WizardProps, any> {

	constructor(props: WizardProps) {
		super(props);

		this.state = {
			data: this.props.data,
			entity: this.props.entity
		}

		this.createCol = this.createCol.bind(this);
		// this.clickHandler = this.clickHandler.bind(this);
	}

	createCol(item: any) {
		return (
			<td key={item.id}>
				{
					item.status === 'Y' ?
						<img className="iconImg" src="/images/tick.jpg" alt="Done"/> :
						<img className="iconImg" src="/images/cross.jpg" alt="Pending"/>
				} <br/>
				{item.name} <br/>
				{/* <button id={item.id} onClick={this.clickHandler}
					disabled={!item.active}>Click Here</button> */}
			</td>
		);
	}

	// clickHandler(e) {
	// 	const item = Utils.getObjectById(this.state.data, e.target.id);
	// 	if (this.props.clickHandler) {
	// 		this.props.clickHandler(item);
	// 		return;
	// 	}
	// }

	render() {
		return (
			<div className="slider">
				<div className="sliderBg">
					<img src="/images/line.png" alt="Straight Line" style={{width: '98%'}}/>
				</div>
				<div className="ticks">
					<table>
						<tbody>
							<tr>HELO WIZARD
								{/* {this.state.data.map((item:any) => this.createCol(item))} */}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}

}
