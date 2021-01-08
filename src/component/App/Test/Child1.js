const Child1 = ({match:{params}}) => {
    return <div>
        Child1
        {JSON.stringify(params)}
    </div>
}

export default Child1;