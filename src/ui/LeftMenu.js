import React, { Component } from 'react';
import logotype from '../img/logotype.png'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { AiOutlinePieChart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

class LeftMenu extends Component {
    render() {
        const { isMenuOpen } = this.props;
        return (
            <div className={`bg-white h-screen w-${isMenuOpen ? 96 : 24} p-5 items-center flex-col flex absolute border-2 transition-width duration-500`}>
            <div className='flex space-x-4'>
                <img className='w-14 rounded-xl shadow-xl h-14' alt='logotype' src={logotype}/>
                {isMenuOpen ? (
                    <p className='text-xl font-bold'>Яндекс<p className='text-xl font-bold text-[#FDCD00]'>Интеграция</p></p>
                ) : null}
            </div>
            <Link to='/main' className='mt-10 group'>
                {isMenuOpen ? (
                    <p className='text-2xl group-hover:text-[#FDCD00] font-medium text-black/50'>Добавить форму</p>
                ) : (
                    <div className='w-14 group-hover:bg-[#FDCD00]/25 h-14 rounded-lg bg-[#DEDEDE] flex justify-center items-center'>
                        <BiPlus className='text-8xl group-hover:text-[#FDCD00] font-medium text-black/50'/>
                    </div>
                )}
            </Link>
            <Link to='/forms' className='mt-5 group'>
                {isMenuOpen ? (
                    <p className='text-2xl group-hover:text-[#FDCD00] font-medium text-black/50'>Действующие формы</p>
                ) : (
                    <div className='w-14 group-hover:bg-[#FDCD00]/25 h-14 rounded-xl bg-[#DEDEDE] flex justify-center items-center'>
                        <AiOutlinePieChart className='text-5xl group-hover:text-[#FDCD00] font-medium text-black/50'/>
                    </div>
                )}
            </Link>
            <button className='hover:opacity-50 absolute bottom-5' onClick={this.props.toggleMenu}>
                {isMenuOpen ? (
                    <div className='flex group'>
                        <MdOutlineArrowBackIosNew className='text-3xl mt-1 text-black/50 group-hover:text-[#FDCD00]' />
                        <p className='text-3xl ml-2 text-black/50 group-hover:text-[#FDCD00]'>Закрыть меню</p>
                    </div>
                ) : (
                    <MdOutlineArrowForwardIos className='text-3xl mt-1 text-black/50' />
                )}
            </button>
        </div>
        )
    }
};

export default LeftMenu;