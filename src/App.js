import Game from "./component/Game";
import FilterableProductTable from "./component/FilterableProductTable";
/**
 * default import thi dung ten gi cung dc, react se luon import default function
 * mien sao import ten gi thi component cung phai la ten day
 */
import Abc from "./component/describing-the-ui/Gallery"; // default import

/**
 * named import thi phai import dung ten function
 * */
import { GalleryNameExport } from "./component/describing-the-ui/Gallery"; // named import

export default function App() {
    return (
        <div>
            {/*<Game />*/}
            {/*<FilterableProductTable />*/}

            <Abc />
            <GalleryNameExport />
        </div>
    )
}
