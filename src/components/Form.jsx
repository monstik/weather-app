import React from "react";

 let Form = (props) => {

        return (
                <form onSubmit={props.weatherMethod}>
                    <input type="text" name="city" placeholder="Город"/>
                    <button>Погода</button>
                </form>
        );

};

export default Form;