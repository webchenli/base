import React from 'react';
import Utils from '../../common/utils';
import {Refers} from 'ssc-refer';
import {Grid} from 'ssc-grid';
import {DatePicker2} from 'ssc-grid';
import {Modal, Button,Pagination} from 'react-bootstrap';
import _ from 'lodash';
import Config from '../../config';
import globalStore from '../../stores/GlobalStore';
import FileUpload from '../bossBill/Upload';


/**
 * 拍照上传款式图片，合同照片等
 * */

export default class BillEditUploadModule2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:['n'],
            picName:{}
        }
    }

    addSizeModal = () =>{
        let list = this.state.list ;
        list.push("n"+new Date().getTime());
        this.setState({
            list
        })

    }

    setInput =(m,e) =>{
        let picName = this.state.picName;
        picName[m] = e.target.value ;
        this.setState({
            picName
        })
    }


    render(){
        return (
            <div className="stdreimburse-box ">
                <h3 className="b-title">2、输入订单信息<Button className="ml50" onClick={this.addSizeModal}>新增其他文件</Button></h3>
                <div className="row">
                    {this.state.list.map( (m)=>{
                        return (
                        <div className="col-md-2 mt20" key={m}>
                            <div>
                                <FileUpload />
                            </div>
                            <input type="text" value={this.state.picName[m]} placeholder="请输入图片名称" onChange={this.setInput.bind(this,m)} className="b-input mt10"/>
                        </div>)
                    })}

                </div>
                <div className="row b-center">
                    <Button bsStyle="warning">保存</Button>
                </div>

            </div>
        )
    }


}