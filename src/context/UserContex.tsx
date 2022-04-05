import { createContext } from "react";

const UserContext = createContext({
    name: {
        title: '',
        first: '',
        last: '',
    }
});

export default  UserContext;