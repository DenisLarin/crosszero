import React from 'react';
import Field from "./containers/field/Field";
import Controller from "./containers/controller/Controller";

const App: React.FC = () => {
    return (
        <div>
            <Controller/>
            <Field/>
        </div>
    );
}

export default App;
