import React from 'react'
//#C1C8CE
interface ListProps {
    fill: string;
    onClick?: (param: any) => void
}

const List: React.FC<ListProps> = ({fill}) => {
        return (<svg className="icon" width="21" height="17" viewBox="0 0 21 17" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0357 0.83374H0.141113V2.83374H20.0357V0.83374Z" fill= {`${fill}`} />
        <path d="M20.0357 7.83374H0.141113V9.83374H20.0357V7.83374Z" fill= {`${fill}`} />
        <path d="M20.0357 14.8337H0.141113V16.8337H20.0357V14.8337Z" fill= {`${fill}`} />
    </svg>);
}

export default List;