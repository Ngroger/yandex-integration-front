import React, { Component } from 'react';
import smile from '../../img/party.png';
import CopyToClipboard from 'react-copy-to-clipboard';

class SuccessMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
    }

    handleCopy = () => {
        this.setState({ copied: true });
    };

    render() {
        const { copied } = this.state;
        const { port, show, onClose } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div className='bg-black/25 absolute z-10 w-screen h-screen justify-center flex items-center'>
                <div className='bg-gradient-to-bl from-teal-200 to-lime-200 w-72 items-center flex flex-col py-10 absolute z-30 rounded-3xl'>
                    <img className='w-24 h-24 bg-cover' src={smile} alt='success' />
                    <p className='text-black/50 text-xl flex-nowrap font-sans font-bold'>У вас получилось!</p>
                    <div className='w-32 mt-2 mb-2 bg-black/50 rounded-2xl h-[2px]' />
                    <p className='text-black/50 text-md flex-nowrap font-sans font-thin text-center w-56'>
                        Теперь форма доступна по ссылке: <br />
                        <CopyToClipboard text={`http://45.12.72.22:${port}/callback`} onCopy={this.handleCopy}>
                            <span className='cursor-pointer text-teal-500 hover:opacity-50'>{`http://45.12.72.22:${port}/callback`}</span>
                        </CopyToClipboard>
                    </p>
                    {copied && (
                        <p className='text-black/50 text-sm font-sans font-thin text-center w-56'>Текст скопирован в буфер обмена</p>
                    )}
                    <button onClick={onClose} className='bg-green-400 mt-10 rounded-full p-2 w-32 justify-center items-center flex hover:opacity-50'>
                        <p className='text-white font-bold text-xl'>Принять</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default SuccessMessage;
