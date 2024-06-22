// import { ReactNode, createContext, useEffect, useState } from "react";
// import { getTeams } from "../../api/sportsapi/teamsAPIClient";

// interface DataContextType {
//     teams: any[];
// }

// interface DataProviderProps {
//     children: ReactNode;
// }

// export const DataContext = createContext<DataContextType>({teams: []});


// export const DataProvider: React.FC<DataProviderProps> = ({children} ) => {
//     const [teams, setTeams] = useState<any[]>([]);
//     useEffect(() => {
//         const fetchData = async() => {
//             try {
//                 const [ teamsData ] = await Promise.all([
//                     getTeams( 'mercedes')
//                 ]);
//                 setTeams(teamsData);
//             } catch(error) {
//                 console.error('error', error);
//             }
//         }
//         fetchData();
//     },[]);
//     return (
//         <DataContext.Provider value={{teams}}>
//             {children}
//         </DataContext.Provider>
//     );
// }