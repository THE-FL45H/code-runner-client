export default function RenderErrors({errors}) {
    if(!errors) return <></>;
    const err = errors["errors"];
    return (
        <div>
            {err.map((e, index) => <p key={index}>{e.msg}</p>)}
        </div>
    );
}