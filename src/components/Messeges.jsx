function Messeges() {

  const users = [
    {
        id: 1,
        text: 'Hello',
        author: 'Admin',
        side: 'left'
    },
    {
        id: 2,
        text: 'Hi',
        author: 'User2',
        side: 'right'
    },
    {
        id: 3,
        text: 'How are you',
        author: 'Admin',
        side: 'left'
    },
    {
        id: 4,
        text: 'Ok',
        author: 'User2',
        side: 'right'
    }
]  

    return (
        users.map(item => {
            return(        
                <div className={`row ${item.side === 'right' ? 'justify-content-end' : ''}`}>
                <div className='col-3'>
                <div className={item.side}>
                    <p>
                        {item.author}
                    </p>
                    <span>
                    {item.text}
                    </span>
                </div>
                </div>
                </div>
            )    
            })    
    );

  }  




export default Messeges;
