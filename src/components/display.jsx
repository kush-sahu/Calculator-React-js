import './custome.css';
const Display=({text})=>{
    return<>

    <div>
        <input type="text" readOnly className="form-control form-control-lg mb-3 output" value={text} />
    </div>
    </>
}
export default Display;