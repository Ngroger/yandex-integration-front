import React, { Component } from 'react';
import background from '../img/background4.png'
import logotype from '../img/logotype.png'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import LeftMenu from '../ui/LeftMenu';
import axios from 'axios';
import SuccessMesage from '../ui/messages/SuccsessMessage';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true,
            formFields: {
                formName: '',
                clientID: '',
                apiKey: '',
                parkID: '',
                port: ''
            },
            showSuccessMessage: false,
        };
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    };

    handleFormFieldChange = (fieldName, value) => {
        this.setState((prevState) => ({
            formFields: {
                ...prevState.formFields,
                [fieldName]: value
            }
        }));
    };

    sendData = () => {
        // Получить данные формы из состояния
        const { formName, clientID, apiKey, parkID, port } = this.state.formFields;

        // Создать объект с данными для отправки на сервер
        const formData = {
            name: formName,
            apiKey: apiKey,
            clientID: clientID,
            parkID: parkID,
            port: port
        };

        // Отправить данные на сервер с использованием Axios
        axios.post('http://localhost:7000/addForm', formData)
            .then(response => {
                if (response.status === 200) {
                    console.log('Данные успешно добавлены в таблицу forms.');
                    this.setState({ showSuccessMessage: true });
                    // Очистить поля формы или выполнать другие действия после успешной отправки
                } else {
                    console.error('Ошибка при отправке данных.');
                    console.log(formData);
                }
            })
            .catch(error => {
                console.error('Ошибка при отправке данных: ' + error);
                console.log(formData);
            });
    }

    render() {
        const { isMenuOpen } = this.state;

        return (
            <div className='h-screen w-screen bg-center bg-cover flex' style={{ backgroundImage: `url(${background})` }}>
                <div className='rounded-[35px] w-96 py-5 bg-white ml-auto mr-auto mt-auto mb-auto shadow-xl p-5 justify-center flex flex-col'>
                    <p className='text-black/50 text-3xl font-bold text-center'>Добавить форму</p>
                    <p className='text-xl text-black/50 text-center mt-2'>Заполните все данные снизу, чтоб заполнить форму</p>
                    <div className='mt-2 group relative'>
                        <p className='text-lg ml-2 text-black/50'>Имя формы</p>
                        <input value={this.state.formFields.formName} onChange={(e) => this.handleFormFieldChange('formName', e.target.value)} className='focus:border-[#FDCD00] focus:outline-none text-xl p-3 w-full mt-1 rounded-2xl border-2 border-black/10' placeholder='Введите имя формы'/>
                    </div>
                    <div className='mt-2 group relative'>
                        <p className='text-lg ml-2 text-black/50'>Client ID</p>
                        <input value={this.state.formFields.clientID} onChange={(e) => this.handleFormFieldChange('clientID', e.target.value)} className='focus:border-[#FDCD00] focus:outline-none text-xl p-3 w-full mt-1 rounded-2xl border-2 border-black/10' placeholder='Введите client ID'/>
                    </div>
                    <div className='mt-2 group relative'>
                        <p className='text-lg ml-2 text-black/50'>API Key</p>
                        <input value={this.state.formFields.apiKey} onChange={(e) => this.handleFormFieldChange('apiKey', e.target.value)} className='focus:border-[#FDCD00] focus:outline-none text-xl p-3 w-full mt-1 rounded-2xl border-2 border-black/10' placeholder='Введите API'/>
                    </div>
                    <div className='mt-2 group relative'>
                        <p className='text-lg ml-2 text-black/50'>ID парка</p>
                        <input value={this.state.formFields.parkID} onChange={(e) => this.handleFormFieldChange('parkID', e.target.value)} className='focus:border-[#FDCD00] focus:outline-none text-xl p-3 w-full mt-1 rounded-2xl border-2 border-black/10' placeholder='Введите id парка'/>
                    </div>
                    <div className='mt-2 group relative'>
                        <p className='text-lg ml-2 text-black/50'>Port</p>
                        <input value={this.state.formFields.port} onChange={(e) => this.handleFormFieldChange('port', e.target.value)} maxLength={6} className='focus:border-[#FDCD00] focus:outline-none text-xl p-3 w-full mt-1 rounded-2xl border-2 border-black/10' placeholder='Введите port'/>
                    </div>
                    <button onClick={this.sendData} className='bg-[#FDCD00] p-3 mt-5 rounded-2xl hover:opacity-50'>
                        <p className='text-white text-2xl font-bold'>Создать</p>
                    </button>
                </div>
                {this.state.showSuccessMessage && <SuccessMesage port={this.state.formFields.port} show={this.state.showSuccessMessage} onClose={() => this.setState({ showSuccessMessage: false })} />}
            </div>
        )
    }
};

export default MainPage;