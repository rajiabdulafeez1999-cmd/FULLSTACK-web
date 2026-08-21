import GrandChild from "./GrandChild";

function Parent({username}) {
    return <GrandChild username={username} />;
}

export default Parent;