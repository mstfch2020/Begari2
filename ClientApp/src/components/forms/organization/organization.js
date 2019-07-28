import React, { useState } from 'react';
import Utility from '../../../utility/utility';

export default function Organization(props) {

    const [data, setData] = useState({

        name: '',
        fatherName: '',
        byEkip: true,
        ownerName: '',
        ownerFatherName: '',
        ownerBirthPlace: '',
        ownerGuarantee: true,
        reason: 'Any2',
    });

    const handleChange = (e) => {
        const newData = Utility.createStateFromChangeEvent(e)
        setData({ ...data, newData });
    }

    return (

        <div className="w-100 pt-5 custom-scroll" data-spy="scroll" data-target=".navbar" data-offset="250">

            <div id="accused-accused" className="col-12 accused-accused mt-4 p-4 bg-white redius-lg active">
                <h6 className="w-100 color-1281A0 text-right">تعهد نامه متهم</h6>
                <hr className="border-1281A0 mb-1" />
                <form className="w-100 flex flex-col" action="">

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">اینجانب</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">فرزند</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <span className="w-100 font-xs mt-3 color-707070 mr-3">در تاریخ ۱۳۹۸/۰۴/۱۱</span>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">به دلیل</label>
                        <div className="select">
                            <select id="Type" className="select-hidden">
                                <option value="Any">انتخاب کنید</option>
                                <option value="Any1">Any1</option>
                                <option value="Any2">Any2</option>
                                <option value="Any3">Any3</option>
                                <option value="Any4">Any4</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-100 font-xs mt-3 color-707070 mr-3 flex form-check-inline align-items-baseline">
                        <input type="checkbox" className="form-check-input" />
                        <span className="mr-2 m-w-80">
                            نوسط اکیپ گشت این اداره دستگیر و با توجه به ایینکه متوجه عمل خلاف قانون خود گردیده و متعهد
                            میشوم که مجددا به این کار مبادرت ننمایم و در صورت تکرار برابر مقررات جاری با اینجانب رفتار و
                            حص اعتراض را از خود سلب مینمایم.
                            </span>
                    </div>
                </form>
            </div>

            <div id="guarantee-commitment" className="col-12 guarantee-commitment mt-4 p-4 bg-white redius-lg fit-height">
                <h6 className="w-100 color-1281A0 text-right">تعهد نامه ضامن</h6>
                <hr className="border-1281A0 mb-1" />

                <form className="w-100 flex flex-col" action="">

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">اینجانب</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">فرزند</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">متولد</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">صادره از</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="w-100 font-xs mt-3 color-707070 mr-3 flex form-check-inline align-items-baseline">
                        <input type="checkbox" className="form-check-input" />
                        <span className="mr-2 m-w-80">
                            با توجه به عمل خلاف قانون وی متعهد میشوم که از خلاف نامبرده جلوگیری و چنانچه مجددا به
                            این عمل خلاف قانون اقدام نماید برابر مقررات
                            با اینجانب برخورد و حق اعتراض را از خود سلب مینمایم
                            </span>
                    </div>

                    <div className="pl-3 pr-3 flex flex-col form-group mr-6 mt-3">
                        <label  className="color-707070">آدرس منزل</label>
                        <textarea className="form-control redius-lg no-resize" rows="3"></textarea>
                    </div>

                    <div className="pl-3 pr-3 flex flex-col form-group mr-6 mt-3">
                        <label  className="color-707070">آدرس محل کار</label>
                        <textarea className="form-control redius-lg no-resize" rows="3"></textarea>
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">تلفن همراه</label>
                        <input type="text" className="form-control redius-lg" onKeyDown={(e)=> Utility.checkNumber(e)} />
                    </div>
                </form>
            </div>

            <div id="clearance" className="col-12 clearance mt-4 p-4 bg-white redius-lg">
                <h6 className="w-100 color-1281A0 text-right">ترخیص</h6>
                <hr className="border-1281A0 mb-1" />

                <form className="w-100 flex flex-col" action="">

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">نام مسئول غربالگری</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">تاریخ</label>
                        <input type="text" className="form-control redius-lg" />
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">زمان ترخیص</label>
                        <div className="flex items-center">
                            <div className="select ml-1 w-40">
                                <select id="MM" className="select-hidden">
                                    <option value="">دقیقه</option>
                                    <option value="00">00</option>
                                    <option value="05">05</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </div>
                            :
                                <div className="select w-40 mr-1">
                                <select id="HH" className="select-hidden">
                                    <option value="">ساعت</option>
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-8 flex flex-col form-group pr-6 mt-3">
                        <label  className="color-707070">علت</label>
                        <div className="select">
                            <select id="Cause" className="select-hidden">
                                <option value="">انتخاب کنید</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-8 font-xs mt-3 color-707070 mr-0 flex align-items-center form-check-inline necessary-action pl-3 pr-0">
                        <span className="label font-xs">قدام انجام شده جهت
                                ترخیص را انتخاب نمایید</span>
                        <button type="button" className="btn btn-primary redius-lg w-100" data-toggle="modal" data-target="#NecessaryAction">
                            اقدام لازم
                            </button>
                    </div>

                    <div className="pl-3 pr-3 flex flex-col form-group mr-6 mt-3">
                        <label  className="color-707070">توضیحات</label>
                        <textarea className="form-control redius-lg no-resize" rows="3"></textarea>
                    </div>

                    <div className="pl-3 pr-3 flex flex-col form-group mr-6 mt-3">
                        <label  className="color-707070">نظر مدیریت</label>
                        <textarea className="form-control redius-lg no-resize" rows="3"></textarea>
                    </div>

                </form>
            </div>

            <div className="w-100 form-buttons flex items-center mt-4 pt-4 pl-4 pb-4">
                <button className="btn btn-success pl-5 pr-5 redius-lg">ذخیره اطلاعات</button>
                <button className="btn btn-link mr-2 pl-5 pr-5 redius-lg">انصراف</button>
            </div>
        </div>
    );
}

