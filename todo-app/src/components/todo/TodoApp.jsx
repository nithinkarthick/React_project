import './TodoApp.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import LogInComponent from './LogInComponent'
import AuthProvider, { useAuth } from './security/AuthContext'


function AuthenticatedRoute({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TodoApp(){

    return(

        <div className="TodoApp">
          <AuthProvider>
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                     <Route path='/' element={<LogInComponent />} />
                    <Route path='/login' element={<LogInComponent />} />
                    
                    <Route path='/welcome/:username' element={
                          <AuthenticatedRoute>
                                <WelcomeComponent />
                                </AuthenticatedRoute>
                        } />
                        
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodoComponent /> 
                                </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                             <AuthenticatedRoute>
                                 <LogoutComponent />
                             </AuthenticatedRoute>
                        } />
                        
                    <Route path='*' element={<ErrorComponent />} />
                    
                </Routes>
                <FooterComponent />
            </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}

