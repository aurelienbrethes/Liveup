import { createContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export default UserContext;

export const UserContext.Provider = ({children}) => {
	const [userConnected, setUserConnected] = useState([]);
	axios
	.get('https://apiliveup.herokuapp.com/login')
	.then((res)=> res.data)
	.then((data) => setUserConnected(data))
	.catch((err) => console.log(err);)

	return (
		<UserContext.Provider value={{userConnected, setUserConnected}}>
		{children}
		</UserContext.Provider>
	);
};