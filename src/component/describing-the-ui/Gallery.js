import Profile from "./Profile";

// Default export
/**
 * 1 file chi co 1 default export va co nhieu named export
 * */
export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

// Named Export
export function GalleryNameExport(){
    return(
        <div>
            test named export section
        </div>
    )
}
