
export default function HomePage() {
    return(
        <h1>Home Page</h1>
    );
}


// import './App.css';
// import { Button } from './components/events/Button';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Input } from './components/input/Input';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Counter } from './components/state/Counter';
// import { UserDetails } from './components/state/User';
// import { Status } from './components/Status';
// import { Container } from './components/style/Container';

// import { Private } from './components/auth/private';
// import { profile } from './components/auth/profile';
// import { Box } from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContextProvider';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/userContext';
// import { DomRef } from './components/ref/DomRef';
// import { MutableRef } from './components/ref/MutableRef';
// import { RandomNumber } from './components/restriction/RandomNumber';

// function App() {

//   const personName = {
//     first: 'John',
//     last: 'dom'

//   }
//   const nameList = [
//     {
//       first: 'John',
//       last: 'dom'
//     },
//     {
//       first: 'John',
//       last: 'dom'
//     },
//     {
//       first: 'John',
//       last: 'dom'
//     }
//   ]

//   return (
//     <>
//       <div className="App">
//         <Greet name='Demo' isLoggedIn={true} />
//         <Person name={personName} />
//         <PersonList names={nameList} />
//         <Status status='success' />
//         <Heading>Place holder text</Heading>
//         <Oscar>
//           <Heading>Oscar goes to my team</Heading>
//         </Oscar>
//         {/* events */}
//         <Button handleclick={(event, id) => {
//           console.log('button click', event, id)
//         }} />

//         {/* input */}

//         <Input value='' handleChange={(event) => console.log(event)} />
//         <Container styles={{ border: '1px solid black', padding: '1rem', marginTop: '10px' }} />
//         <UserDetails />
//         <Counter />
//         <ThemeContextProvider>
//           <Box />
//         </ThemeContextProvider>
//         <UserContextProvider>
//           <User />
//         </UserContextProvider>

//         <DomRef />
//         <MutableRef />

//         <Private isLogining={false} component={profile} />

//         {/* <List
//           //  items={ ['apple','banana','orange','pineapple','grapes']}
//           //  items={[1,2,3,4,5]}
//           items={[
//               {
//                 first: 'karan',
//                 last: 'padwal'
//               },
//               {
//                 first: 'karan',
//                 last: 'padwal'
//               }
//             ]}
//           onClick={(item) => console.log(item)}
//         /> */}

//         <RandomNumber value={-10} type='negative'/>
//       </div>
//     </>
//   );
// }

