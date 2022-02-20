import './Loader.css'
import 'antd/dist/antd.css';
import { Spin } from "antd";

const Loader: React.FC = () => {
    return (
        <div className="example">
            <Spin />
        </div>
    )
}

export default Loader;