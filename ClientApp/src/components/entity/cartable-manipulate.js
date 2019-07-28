import React from 'react';
import EntityServiceApi from '../../end-point-api/entity-service-api';
import MaskedInput from 'react-text-mask'
import Expression from "../../expressions/expression";
import {conformToMask} from "react-text-mask";
import Utility from "../../utility/utility";


export class CartableManipulate extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        this.state = {

            fields: {
                id: '0',
                name: '',
                address: '',
                phoneNumber: '',
                dateTime: '',

            }


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            EntityServiceApi.GetEntityById(this.props.match.params.id)
                .then((response) => {
                    //handle success
                    console.error('Data***' + JSON.stringify(response.data._entity));

                    this.setState(
                        response.data._entity
                    );
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    handleChange(e) {
        const newChange = Utility.createStateFromChangeEvent(this.state, e);
        this.setState(newChange);
        // this.setState({
        //     ...state,
        //     fields: {...state.fields, [fieldName]: value}
        // });
    }
    handleFile(e) {
        this.setState({  [e.target.name]: e.target.files[0] });
    };
    handleSubmit(event) {
        event.preventDefault();

        //console.log(this.state.fields.avatarFile.name)
        const data = new FormData()
        // data.append('file', this.state.selectedFile)
        // data.append('data', this.state.fields)

        for (let key in this.state.fields) {
            data.append(key, this.state.fields[key]);
        }

        EntityServiceApi.SaveEntity(data).then(response => {
            if (response.status !== 200) {
                alert('خطا در ذخیره اطلاعات...');
                return;
            }
            if (response.data.message != null) {
                alert(response.data.message);
                return;
            }
            alert("Entity saved successfully.");
        });
    }

    render() {

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>

                    <div>Cartable Manipulate</div>
                    <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange}
                           placeholder="name"/>
                    <br/>
                    <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange}
                           placeholder="address"/>
                    <br/>
                    <div>+980</div>
                    <MaskedInput
                        name="phoneNumber" value={this.state.fields.phoneNumber} onChange={this.handleChange}
                        mask={Expression.phoneNumber}
                        placeholder={conformToMask(
                            '373117071',
                            Expression.phoneNumber,
                            {guide: true}
                        ).conformedValue}

                        className="form-control"
                        guide={true}
                        keepCharPositions={false}
                        id="my-input-id"
                        onBlur={() => {
                        }}

                    />
                    <br />
                    <input type="file" name="avatarFile" id='avatarFile'  ref={this.fileInput} onChange={this.handleChange} />
                    <input type="submit" value='ثبت'/>
                </form>

            </div>
        );
    }
}

export default CartableManipulate;

