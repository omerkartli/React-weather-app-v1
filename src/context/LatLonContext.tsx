// import { createContext, useState } from "react"
// export type LatLonContextProps = {
//   latLon: string;
//   setLatLon:(c: string) => void;
// }
// export const LatLonContext = createContext<LatLonContextProps>({
// latLon: '', // set a default value
// setLatLon: () => {},
// })

// export default function LatLonProvider:({ children }: React.ReactNode) {
//     const [latLon, setLatLon] = useState<string>();
//     return 
//       (
//        <LatLonContext.Provider value= {{ latLon, setLatLon }}>
//         {children}
//       </LatLonContext.Provider>
//       )
//     }