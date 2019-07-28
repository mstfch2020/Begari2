

class Utility {

    static createStateFromChangeEvent(state,event) {
        const target = event.target;
        let value = null;

        switch (target.type) {
            case 'checkbox':
                value = target.checked;
                break;
            case 'file':
                // value = Array.from(target.files);
                value=target.files[0];
                break;
            default:
                value = target.value;
                break;
        }
        const name = target.name;
        console.log(name+"=="+value);
        return ( {...state, [name]: value });
    };
    static checkNumber(e) { }
}
export default Utility;
