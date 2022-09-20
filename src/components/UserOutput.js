


export default function  UserOutput({text, ...others}){
    return (
        <div  className={`output`}>
            <p>@{others.username}</p>
            <p>{text}</p>
        </div>
    )
}