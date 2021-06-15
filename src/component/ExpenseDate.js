function ExpenseDate(props)
{
    const day=props.data.toLocaleString('en-US',{ day: '2-digit' });
    const month=props.data.toLocaleString('en-US',{ month:'2-digit' });
    const year=props.data.getFullYear();
    return(<div>
        <div>{month}</div>
             <div>{year} </div>
             <div>{day} </div>
    </div>
    );
}
export default ExpenseDate;