import React, { Component } from 'react';
import background from '../img/background2.png';
import { FiCopy, FiSettings, FiEye } from "react-icons/fi";

class FormsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: [],
        };
    }

    componentDidMount() {
        // Выполняем AJAX-запрос для получения данных с сервера
        fetch('http://localhost:7000/getAllForms') // Предполагается, что сервер предоставляет маршрут /getAllForms
            .then(response => response.json())
            .then(data => {
                this.setState({ formData: data });
            })
            .catch(error => {
                console.error('Error fetching data: ' + error);
            });
    }

    render() {
        const { formData } = this.state;

        return (
            <div className='h-screen w-screen bg-center bg-cover' style={{ backgroundImage: `url(${background})` }}>
                <div className='justify-center items-center space-y-5 flex flex-col'>
                    <div className='rounded-xl bg-white border-[1px] border-black/25 flex items-center w-6/12 mt-24 p-2'>
                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>ID</p>
                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>Название</p>
                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>Статус</p>
                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>API Key</p>
                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>Client ID</p>
                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>Port</p>
                        <input placeholder='Поиск' className='text-[#B0B0B0] text-xl border-b-[1px] border-b-black/25 p-1 w-48 px-2 ml-4 focus:outline-none'/>
                    </div>
                    {formData.length > 0 ? ( // Проверка, если formData не пусто
                        <div className='overflow-auto h-[500px] w-6/12'>
                            {formData.map(form => (
                                <div key={form.id} style={{ justifyContent: 'space-between' }} className='rounded-xl bg-white border-[1px] border-black/25 flex items-center mt-5 p-3 w-full'>
                                    <div className='flex'>
                                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>{form.id}</p>
                                        <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>{form.name}</p>
                                        { form.status ? (
                                            <p className='px-4 text-[#33FF00] border-r-[1px] border-r-black/25 text-xl'>Активна</p>
                                        ) : (
                                            <p className='px-4 text-[#B0B0B0] border-r-[1px] border-r-black/25 text-xl'>Неактивна</p>
                                        ) }
                                        <div className='flex items-center px-4 border-r-[1px] border-r-black/25'>
                                            <p className='text-[#B0B0B0] text-xl'>•••••••••</p>
                                            <button className='hover:opacity-50 ml-4'>
                                                <FiCopy className='text-[#B0B0B0] text-xl'/>
                                            </button>
                                        </div>
                                        <div className='flex items-center px-4 border-r-[1px] border-r-black/25'>
                                            <p className='text-[#B0B0B0] text-xl'>•••••••••</p>
                                            <button className='hover:opacity-50 ml-4'>
                                                <FiCopy className='text-[#B0B0B0] text-xl'/>
                                            </button>
                                        </div>
                                        <p className='px-4 text-[#B0B0B0] text-xl'>{form.port}</p>
                                    </div>
                                    <div className='flex space-x-6'>
                                        <button className='hover:opacity-50'>
                                            <FiEye className='text-[#B0B0B0] text-3xl'/>
                                        </button>
                                        <button className='hover:opacity-50'>
                                            <FiSettings className='text-[#B0B0B0] text-3xl'/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-xl text-[#B0B0B0] font-bold'>Пока нет добавленных форм</p>
                    )}
                </div>
            </div>
        );
    }
}

export default FormsPage;
