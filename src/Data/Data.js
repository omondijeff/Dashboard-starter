//Sidebar Imports
import { UilCreateDashboard,
        UilClipboardAlt,
        UilUsersAlt,
        UilChart,
        UilUsdCircle,
        UilFolderLock,
        UilMapMarker,
        UilUserCircle,
        UilEdit,
        UilSignOutAlt,
        UilUsdSquare,
        UilMoneyWithdrawal

 } from '@iconscout/react-unicons'

 export const SidebarData = [
    {
        icon : UilCreateDashboard,
        heading: "Dashboard",
    },
    {
        icon : UilClipboardAlt,
        heading: "Requests",
    },
    {
        icon : UilUsersAlt,
        heading: "Customers",
    },
    {
        icon : UilUserCircle,
        heading: "SPs",
    },
    {
        icon : UilEdit,
        heading: "Quotes",
    },
    {
        icon : UilUsdCircle,
        heading: "Payment",
    },
    {
        icon : UilMapMarker,
        heading: "Locator",
    },
    {
        icon : UilFolderLock,
        heading: "Documents",
    },
    {
        icon : UilChart,
        heading: "Analytics",
    },
 ];

 export const CardsData = [
    {
        title: "Requests",
        color:{
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue:40,
        value: "45, 970",
        png: UilUsdSquare,
        series:[
            {
                name:"Requests",
                data: [10,9,15,51,40,6,70],
            },
        ],
    },
    {
        title: "Revenue",
        color:{
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue:50,
        value: "15, 900",
        png: UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: "Expenses",
        color:{
            background: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113)-46.42%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue:72,
        value: "75, 970",
        png: UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },

 ];