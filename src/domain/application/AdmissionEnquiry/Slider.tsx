// import './Slider.css';
import  "../../../css/Slider.css";
import * as React from 'react';
import {Utils} from '../_utilites/Utils';

export interface SliderProps extends React.HTMLAttributes<HTMLElement>{
	data?: any,
	entity?: any,
	clickHandler?: any,
}

export default class Slider extends React.Component<SliderProps, any> {

	constructor(props: SliderProps) {
		super(props);

		this.state = {
			data: this.props.data,
			entity: this.props.entity
		}

		this.createCol = this.createCol.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	createCol(item: any) {
		return (
			<td key={item.id}>
				{
					item.status === 'Y' ?
						<img onClick={e => this.clickHandler(e, item)} className="iconImg" src="public/plugins/ems-admission/img/tick.jpg" alt="Done"/> 
						:
						<img onClick={e => this.clickHandler(e, item)} className="iconImg" src="public/plugins/ems-admission/img/cross.jpg" alt="Pending"/>
				} 
				{/* <br/> */}
				{item.name} <br/>
				{/* <button id={item.id} 
					disabled={!item.active}>Click Here</button> */}
			</td>
		);
	}

	clickHandler(e: any, item: any) {
		// const item = Utils.getObjectById(this.state.data, e.target.id);
		if (this.props.clickHandler) {
			console.log("clicke handler from slider :::::::::::::: ");
			this.props.clickHandler(e, item);
			return;
		}
	}

	render() {
		return (
			<div className="emsSlider">
				<div className="sliderBg">
					<img src="public/plugins/ems-admission/img/line.png" alt="Straight Line" style={{width: '98%'}}/>
				</div>
				<div className="ticks">
					<table>
						<tbody>
							<tr>
								{this.state.data.map((item:any) => this.createCol(item))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}

}
