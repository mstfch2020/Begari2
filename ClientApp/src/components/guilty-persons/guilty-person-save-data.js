import React, { useState, useEffect } from 'react';
import { DatePicker } from "jalali-react-datepicker";
import DatePicker2 from 'react-datepicker2';
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import DatePicker3 from 'react-persian-calendar-date-picker';
import Utility from "../../utility/utility";
import GuiltyPersonServiceApi from '../../end-point-api/guilty-person-service-api';
import BaseInfoServiceApi from '../../end-point-api/BaseInfo/base-info-service-api';
import moment from 'jalali-moment'

export default function GuiltyPersonSaveData(props) {
    const [fields, setFields] = useState({
        id: 0,
        name: '',
        family: '',
        fatherName: '',
        aliasName: '',
        address: '',
        educationId: null,
        nationalityCode: '',
        identityNumber: '',
        birthday: '',
        age: 0,
        genderId: null,
        maritalStatusId: null,
        provinceId: null,
        CityId: null,
        identityIssueProvinceId: null,
        identityIssueCityId: null,
        arrestedProvinceId: null,
        arrestedCityId: null,
        phoneNumber: '',
        mobileNumber: '',
        weight: 0.0,
        stature: 0.0,
        eyeColor: '',
        specialView: '',
        otherNationality: '',
        nationalityTypeId: null,
        childrenCount: 0,
        religionId: null,
        otherReligion: '',
        isCarer: false,
        subCarerNumber: 0,
        healthStatusId: null,
        arrestedReasonId: null,
        drugTypeId: null,
        consciousness: '',
        arrestedAddress: '',
        consciousnessTypeId: null,
        receptionNumber: 0,
        previousCode: '',
        fullname: '',
        categoryId: null,
        police: '',
        issuerJudge: '',
        isAccepted: false,
        isReceptionAgain: false,
        halfRightImageDataId:null,
        halfLeftImageDataId:null,
        fullImageDataId :null,
        fullViewImageDataId:null,
        attachmentFileDataId:null,
        attendantNumber:0,
        userName:'',previousCode:'',

        
    });
    const nowDateTime = moment().locale('fa');
    const defaultDate = {
        year: parseInt(nowDateTime.format('YYYY')),
        month: parseInt(nowDateTime.format('MM')),
        day: parseInt(nowDateTime.format('DD'))
    };

    const [birthDate, setBirthDate] = useState(defaultDate);
    const [carerStartDate, setCarerStartDate] = useState(defaultDate);
    const [previousCreateDate, setPreviousCreateDate] = useState(defaultDate);



    const renderCustomInput = ({ ref, onFocus, onBlur }) => (
        <input
            readOnly
            ref={ref} // necessary
            onFocus={onFocus} // necessary
            onBlur={onBlur} // necessary
            placeholder="تاریخ تولد"
            value={birthDate ? `${birthDate.year}/${birthDate.month}/${birthDate.day}` : ''}
            style={{
                textAlign: 'center',
                padding: '1rem 1.5rem',
                fontSize: '1.5rem',
                border: '1px solid #9c88ff',
                borderRadius: '100px',
                boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
                color: '#9c88ff',
                outline: 'none',
            }}
            className="my-custom-input-class" // a styling class
        />
    )

    const [educationData, setEducationData] = useState([]);
    const [provinceData, setProvinceData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [arrestedReasonData, setArrestedReasonData] = useState([]);
    const [drugTypeData, setDrugTypeData] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const [healthStatusData, setHealthStatusData] = useState([]);
    const [maritalStatusData, setMaritalStatusData] = useState([]);
    const [nationalityTypeData, setNationalityTypeData] = useState([]);
    const [religionData, setReligionData] = useState([]);
    const [identityIssueCityData, setIdentityIssueCityData] = useState([]);
    const [arrestedCityData, setArrestedCityData] = useState([]);
    const [consciousnessTypeData, setConsciousnessTypeData] = useState([]);

    useEffect(() => {

        //load BaseInfo start
        BaseInfoServiceApi.GetEducationData().then((response) => {
            console.error('GetEducationData***' + JSON.stringify(response.data._entity));
            setEducationData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetProvinceData().then((response) => {
            console.error('GetProvinceData***' + JSON.stringify(response.data._entity));
            setProvinceData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetCategoryData().then((response) => {
            console.error('GetCategoryData***' + JSON.stringify(response.data._entity));
            setCategoryData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetArrestedReasonData().then((response) => {
            console.error('GetArrestedReasonData***' + JSON.stringify(response.data._entity));
            setArrestedReasonData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetDrugTypeData().then((response) => {
            console.error('GetDrugTypeData***' + JSON.stringify(response.data._entity));
            setDrugTypeData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetGenderData().then((response) => {
            console.error('GetGenderData***' + JSON.stringify(response.data._entity));
            setGenderData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetHealthStatusData().then((response) => {
            console.error('GetHealthStatusData***' + JSON.stringify(response.data._entity));
            setHealthStatusData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetMaritalStatusData().then((response) => {
            console.error('GetMaritalStatusData***' + JSON.stringify(response.data._entity));
            setMaritalStatusData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetNationalityTypeData().then((response) => {
            console.error('GetNationalityTypeData***' + JSON.stringify(response.data._entity));
            setNationalityTypeData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetReligionData().then((response) => {
            console.error('GetReligionData***' + JSON.stringify(response.data._entity));
            setReligionData(response.data._entity);
        }).catch(function (error) {
            console.log(error);
        });

        BaseInfoServiceApi.GetConsciousnessTypeData().then((response) => {
            console.error('GetConsciousnessTypeData***' + JSON.stringify(response.data._entity));
            setConsciousnessTypeData(response.data._entity);

        }).catch(function (error) {
            console.log(error);
        });
        ///////////////////////////

        //load BaseInfo End
        if (props.match.params.id) {

            GuiltyPersonServiceApi.GetGuiltyPersonById(props.match.params.id)
                .then((response) => {
                    //handle success
                    bindView(response);

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, []);


    const bindView=(response)=>{
        console.error('Data***' + JSON.stringify(response.data._entity));
                    debugger;
                    setFields(response.data._entity);

                    let serverDate=moment(new Date(response.data._entity.birthDate)).locale('fa');

                    setBirthDate({
                        year:parseInt( serverDate.format('YYYY')),
                        month:parseInt( serverDate.format('MM')),
                        day:parseInt( serverDate.format('DD'))
                    })

                    serverDate=moment(new Date(response.data._entity.carerStartDate)).locale('fa');

                    setCarerStartDate({
                        year:parseInt( serverDate.format('YYYY')),
                        month:parseInt( serverDate.format('MM')),
                        day:parseInt( serverDate.format('DD'))
                    })

                    serverDate=moment(new Date(response.data._entity.previousCreateDate)).locale('fa');

                    setPreviousCreateDate({
                        year:parseInt( serverDate.format('YYYY')),
                        month:parseInt( serverDate.format('MM')),
                        day:parseInt( serverDate.format('DD'))
                    })
                   


                    loadIssueCity(response.data._entity.provinceId, 'provinceId')
                    loadIssueCity(response.data._entity.identityIssueProvinceId, 'identityIssueProvinceId')
                    loadIssueCity(response.data._entity.arrestedProvinceId, 'arrestedProvinceId')
    }

    const loadIssueCity = (id, type) => {
        if (!id) return;
        BaseInfoServiceApi.GetCityDataByProvinceId(id).then((cresponse) => {
            console.error('identityIssueCityData--GetCityDataByProvinceId***' + JSON.stringify(cresponse.data._entity));
            switch (type) {
                case 'provinceId':
                    setCityData(cresponse.data._entity);
                    break;
                case 'arrestedProvinceId':
                    setArrestedCityData(cresponse.data._entity);
                    break;
                case 'identityIssueProvinceId':
                    setIdentityIssueCityData(cresponse.data._entity);
                    break;
                default: break;
            }

        }).catch(function (error) {
            console.log(error);
        });
    }
    const handleChange = (e) => {
        debugger;
        const target = e.target;
        const newChange = Utility.createStateFromChangeEvent(fields, e);
        // console.log(JSON.stringify(newChange));
        setFields(newChange);
        if (target.name === 'provinceId' || target.name === 'arrestedProvinceId' || target.name === 'identityIssueProvinceId') {
            loadIssueCity(e.target.value, e.target.name);
        }

        // setState({
        //     ...state,
        //     fields: {...fields, [fieldName]: value}
        // });
    }
    const handleDateChange = ({ value }, type) => {
        debugger;
        if (value === undefined) return;

        setFields({
            ...fields, [type]: new Date(value).toUTCString()
        }
            // / moment(value.format('YYYY/MM/DD'), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
        );
    }

    const handleSubmit = (event) => {

        const data = new FormData()

        for (let key in fields) {
            data.append(key, fields[key]);
        }
        //convert dates to utcDate to save to database
        let localData = moment.from(`${birthDate.year}/${birthDate.month}/${birthDate.day}`, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        data.append('birthDate', new Date(localData).toUTCString());

        localData = moment.from(`${previousCreateDate.year}/${previousCreateDate.month}/${previousCreateDate.day}`, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        data.append('previousCreateDate', new Date(localData).toUTCString());

        localData = moment.from(`${carerStartDate.year}/${carerStartDate.month}/${carerStartDate.day}`, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        data.append('carerStartDate', new Date(localData).toUTCString());


        GuiltyPersonServiceApi.SaveGuiltyPerson(data).then(response => {
            if (response.status !== 200) {
                alert('خطا در ذخیره اطلاعات...');
                return;
            }
            if (response.data.message) {
                alert(response.data.message);
                return;
            }
            bindView(response);
            alert("ذخیره سازی با موفقیت انجام شد.");
        });
    }



    return (
        <div>

            <br />
            <br />
            <div className="w-100 flex flex-col pt-5 custom-scroll" data-spy="scroll" data-target="#spy">

                <div id="accused-accused" className="col-12 accused-accused mt-4 p-4 bg-white redius-lg active fit-height">
                    <h6 className="w-100 color-1281A0 text-right">پذیرش</h6>
                    <hr className="border-1281A0 mb-1" />

                    <form className="w-100 flex flex-col"  >


                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">نام</label>
                            <input type="text" className="form-control redius-lg" name="name" value={fields.name} onChange={handleChange} placeholder="نام" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">نام خانوادگی</label>
                            <input type="text" className="form-control redius-lg" name="family" value={fields.family} onChange={handleChange} placeholder="نام خانوادگی" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">نام مستعار</label>
                            <input type="text" className="form-control redius-lg" name="aliasName" value={fields.aliasName} onChange={handleChange} placeholder="نام مستعار" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                جنسیت:
                                     <select value={fields.genderId} onChange={handleChange} name="genderId">
                                    {
                                        genderData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.genderTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">نام پدر</label>
                            <input type="text" className="form-control redius-lg" name="fatherName" value={fields.fatherName} onChange={handleChange} placeholder="نام پدر" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">کد ملی</label>
                            <input type="text" className="form-control redius-lg" name="nationalityCode" value={fields.nationalityCode} onChange={handleChange} placeholder="کد ملی" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">شماره شناسنامه</label>
                            <input type="text" className="form-control redius-lg" name="identityNumber" value={fields.identityNumber} onChange={handleChange} placeholder="شماره شناسنامه" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                استان صدور شناسنامه :
                                     <select value={fields.identityIssueProvinceId} onChange={handleChange} name="identityIssueProvinceId">
                                    {
                                        provinceData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.provinceTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                شهر صدور شناسنامه :
                                     <select value={fields.identityIssueCityId} onChange={handleChange} name="identityIssueCityId">
                                    {
                                        identityIssueCityData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.cityTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                استان محل سکونت :
                                     <select value={fields.provinceId} onChange={handleChange} name="provinceId">
                                    {
                                        provinceData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.provinceTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                شهر محل سکونت :
                                     <select value={fields.CityId} onChange={handleChange} name="CityId">
                                    {
                                        cityData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.cityTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                تحصیلات:
                                     <select value={fields.educationId} onChange={handleChange} name="educationId">
                                    {
                                        educationData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.educationTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">آدرس</label>
                            <input type="text" className="form-control redius-lg" name="address" value={fields.address} onChange={handleChange} placeholder="آدرس" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تلفن</label>
                            <input type="text" className="form-control redius-lg" name="phoneNumber" value={fields.phoneNumber} onChange={handleChange} placeholder="تلفن" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">موبایل</label>
                            <input type="text" className="form-control redius-lg" name="mobileNumber" value={fields.mobileNumber} onChange={handleChange} placeholder="موبایل" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تاریخ تولد</label>
                        </div>
                        <div name='birthDayDatePicker' className="datepicker" id='birthDayDatePicker'>
                            {/* <DatePicker name='birthDate' id='birthDate' onClickSubmitButton={(e) => handleDateChange(e, 'birthDate')} /> */}

                            <DatePicker3
                                selectedDay={birthDate}
                                onChange={setBirthDate}
                                renderInput={renderCustomInput} // render a custom input
                                colorPrimary="#9c88ff" // added this
                                calendarClassName="custom-calendar" // and this
                                calendarTodayClassName="custom-today-day" // also this
                            />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">رنگ چشم</label>
                            <input type="text" className="form-control redius-lg" name="eyeColor" value={fields.eyeColor} onChange={handleChange} placeholder="رنگ چشم" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">قد</label>
                            <input type="text" className="form-control redius-lg" name="stature" value={fields.stature} onChange={handleChange} placeholder="قد" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">نشانه خاص</label>
                            <input type="text" className="form-control redius-lg" name="specialView" value={fields.specialView} onChange={handleChange} placeholder="نشانه خاص" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                وضعیت تاهل:
                                     <select value={fields.maritalStatusId} onChange={handleChange} name="maritalStatusId">
                                    {
                                        maritalStatusData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.maritalStatusTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                تابعیت:
                                     <select value={fields.nationalityTypeId} onChange={handleChange} name="nationalityTypeId">
                                    {
                                        nationalityTypeData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.nationalityTypeTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">سایر تابعیت ها</label>
                            <input type="text" className="form-control redius-lg" name="otherNationality" value={fields.otherNationality} onChange={handleChange} placeholder="سایر تابعیت ها" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تعداد فرزند</label>
                            <input type="text" className="form-control redius-lg" name="childrenCount" value={fields.childrenCount} onChange={handleChange} placeholder="تعداد فرزند" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                مذهب :
                                     <select value={fields.religionId} onChange={handleChange} name="religionId">
                                    {
                                        religionData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.religionTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">سایر مذاهب</label>
                            <input type="text" className="form-control redius-lg" name="otherReligion" value={fields.otherReligion} onChange={handleChange} placeholder="سایر مذاهب" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">آیا مددجو سرپرست خانوار است؟</label>
                            <input type="checkbox" className="form-control redius-lg" name="isCarer" value={fields.isCarer} checked={fields.isCarer} onChange={handleChange} placeholder="آیا مددجو سرپرست خانوار است؟" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تعداد افراد تحت تکفل</label>
                            <input type="text" className="form-control redius-lg" name="subCarerNumber" value={fields.subCarerNumber} onChange={handleChange} placeholder="تعداد افراد تحت تکفل" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تاریخ شروع سرپرستی</label>
                        </div>
                        <div className="datepicker" >
                            {/* <DatePicker isOpenModal={false} name='carerStartDate' id='carerStartDate' onClickSubmitButton={(e) => handleDateChange(e, 'carerStartDate')} /> */}
                            <DatePicker3
                                selectedDay={carerStartDate}
                                onChange={setCarerStartDate}
                                inputPlaceholder="تاریخ شروع سرپرستی"
                                colorPrimary="#9c88ff" // added this
                                calendarClassName="custom-calendar" // and this
                                calendarTodayClassName="custom-today-day" // also this
                            />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                وضعیت جسمانی :
                                     <select value={fields.healthStatusId} onChange={handleChange} name="healthStatusId">
                                    {
                                        healthStatusData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.healthStatusTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                علت پذیرش :
                                     <select value={fields.categoryId} onChange={handleChange} name="categoryId">
                                    {
                                        categoryData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.categoryTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                ماده مصرفی :
                                     <select value={fields.drugTypeId} onChange={handleChange} name="drugTypeId">
                                    {
                                        drugTypeData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.drugTypeTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">وضعیت روانی</label>
                            <input type="text" className="form-control redius-lg" name="consciousness" value={fields.consciousness} onChange={handleChange} placeholder="وضعیت روانی" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                سطح هوشیاری:
                                     <select value={fields.consciousnessTypeId} onChange={handleChange} name="consciousnessTypeId">
                                    {
                                        consciousnessTypeData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.consciousnessTypeTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                استان محل دستگیری :
                                     <select value={fields.arrestedProvinceId} onChange={handleChange} name="arrestedProvinceId">
                                    {
                                        provinceData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.provinceTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                شهر محل دستگیری :
                                     <select value={fields.arrestedCityId} onChange={handleChange} name="arrestedCityId">
                                    {
                                        arrestedCityData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.cityTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">آدرس محل دستگیری</label>
                            <input type="text" className="form-control redius-lg" name="arrestedAddress" value={fields.arrestedAddress} onChange={handleChange} placeholder="آدرس محل دستگیری" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">آیا شخص همراه دارد؟</label>
                            <input type="checkbox" className="form-control redius-lg" name="haveAttendant" value={fields.haveAttendant} checked={fields.haveAttendant} onChange={handleChange} />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">تعداد همراه</label>
                            <input type="text" className="form-control redius-lg" name="attendantNumber" value={fields.attendantNumber} onChange={handleChange} placeholder="تعداد همراه" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">آیا شخص سابقه پذیرش دارد؟</label>
                            <input type="checkbox" className="form-control redius-lg" name="haveReceptionHistory" value={fields.haveReceptionHistory} checked={fields.haveReceptionHistory} onChange={handleChange} />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">تعداد پذیرش</label>
                            <input type="text" className="form-control redius-lg" name="receptionNumber" value={fields.receptionNumber} onChange={handleChange} placeholder="تعداد پذیرش" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">کد پرونده قبلی</label>
                            <input type="text" className="form-control redius-lg" name="previousCode" value={fields.previousCode} onChange={handleChange} placeholder="کد پرونده قبلی" />
                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">تاریخ ثبت پرونده قبلی</label>
                        </div>
                        <div name='previesCreateDateDatePicker' className="datepicker" id='previesCreateDateDatePicker'>
                            {/* <DatePicker name='previesCreateDate' id='previesCreateDate' onClickSubmitButton={(e) => handleDateChange(e, 'previesCreateDate')} /> */}
                            <DatePicker3
                                inputPlaceholder="تاریخ ثبت پرونده قبلی"
                                selectedDay={previousCreateDate}
                                onChange={setPreviousCreateDate}
                                colorPrimary="#9c88ff" // added this
                                calendarClassName="custom-calendar" // and this
                                calendarTodayClassName="custom-today-day" // also this
                            />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">نام متصدی</label>
                            <input type="text" className="form-control redius-lg" name="userName" value={fields.userName} onChange={handleChange} placeholder="نام متصدی" />
                        </div>


                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label>
                                علت دستگیری :
                                     <select value={fields.arrestedReasonId} onChange={handleChange} name="arrestedReasonId">
                                    {
                                        arrestedReasonData.map(
                                            (data) => {
                                                return (
                                                    <option value={data.id}>{data.arrestedReasonTitle}</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">نام کلانتری</label>
                            <input type="text" className="form-control redius-lg" name="police" value={fields.police} onChange={handleChange} placeholder="نام کلانتری" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">نظر مسئول شیفت</label>
                            <textarea type="text" mu className="form-control redius-lg" name="issuerJudge" value={fields.issuerJudge} onChange={handleChange} placeholder="نظر مسئول شیفت" />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تایید</label>
                            <input type="checkbox" className="form-control redius-lg" name="isAccepted" value={fields.isAccepted} checked={fields.isAccepted} onChange={handleChange} />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">پزیرش مجدد</label>
                            <input type="checkbox" className="form-control redius-lg" name="isReceptionAgain" value={fields.isReceptionAgain} checked={fields.isReceptionAgain}  onChange={handleChange} />
                        </div>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-70707   0">موارد فوق مورد تایید اینجانب</label>
                            <input type="text" className="form-control redius-lg" name="fullname" value={fields.fullname} onChange={handleChange} placeholder="نام و نام خانوادگی" />
                            <label className="color-70707   0">می باشد</label>

                        </div>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تصویر نیم رخ راست</label>
                            <input type="file" name="halfRightImageFile" id='halfRightImageFile' onChange={handleChange} />
                        </div>
                            <img src={`/ImageData/ViewImage/${fields.halfRightImageDataId}`} className='guiltyPersonImages'/>
                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تصویر نیم رخ چپ</label>
                            <input type="file" name="halfLeftImageFile" id='halfLeftImageFile' onChange={handleChange} />
                        </div>
                        <img src={`/ImageData/ViewImage/${fields.halfLeftImageDataId}`} className='guiltyPersonImages'/>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تصویر تمام رخ</label>
                            <input type="file" name="fullViewImageFile" id='fullViewImageFile' onChange={handleChange} />
                        </div>
                        <img src={`/ImageData/ViewImage/${fields.fullViewImageDataId}`} className='guiltyPersonImages'/>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">تصویر کامل</label>
                            <input type="file" name="fullImageFile" id='fullImageFile' onChange={handleChange} />
                        </div>
                        <img src={`/ImageData/ViewImage/${fields.fullImageDataId}`} className='guiltyPersonImages'/>

                        <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                            <label className="color-707070">فایل ضمیمه</label>
                            <input type="file" name="attachmentFile" id='attachmentFile' onChange={handleChange} />
                        </div>
                        <a href={`/ImageData/ViewImage/${fields.attachmentFileDataId}`} target="_blank">فایل ضمیمه</a>

                        <div className="w-100 form-buttons flex items-center mt-4 pt-4 pl-4 pb-4 fit-height">
                            <button onClick={handleSubmit} type='button' className="btn btn-success pl-5 pr-5 redius-lg">ذخیره اطلاعات</button>
                            <button className="btn btn-link mr-2 pl-5 pr-5 redius-lg">انصراف</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

