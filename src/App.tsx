import { c as _c } from "react/compiler-runtime";
function MyButton({ title }: { title: string }) {
    return (
        <button>{title}</button>
    );
}

export default function App() {
    // return (
    //     <div>
    //         <h1>Welcome to my app</h1>
    //         <MyButton title="I'm a button" />
    //     </div>
    // );

    const $ = _c(1);
    let t0;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = <div>Hello World</div>;
        $[0] = t0;
    } else {
        t0 = $[0];
    }
    return t0;
}
