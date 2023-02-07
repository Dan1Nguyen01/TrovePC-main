import React from 'react'
import { Container, Card, Form } from 'react-bootstrap';
const Login = () => {
	const [email, setEmail] = React.useState('');
	const [password,setPassword] = React.useState('');

	const handleSubmit = async (e)=> {
		e.preventDefault();
		console.log(email,password)
	}
  return (
	<Container className='d-flex justify-content-center' style={{minHeight:'100vh'}}>
		<div className='w-100' style={{maxWidth:'400px'}}>
		<Card>
			<Card.Body>
			<h3 className='text-left mb-4 text-dark'>Login</h3>
		<form className='login' onSubmit={handleSubmit}>
			<div className="form-group">
				<label for='email' className='text-dark'>Email:</label>
				<input type={email} onChange = {(e)=>setEmail(e.target.value)} 
				value = {email} className='form-control' id='email'
				/>
			</div>
			

			<div className="form-group">
				<label for='password' className='text-dark'>Password:</label>
				<input type={password} onChange = {(e)=>setPassword(e.target.value)} 
				value = {password} className='form-control' id='password'
				/>
			</div>

			<button className='btn btn-success mt-2'>Log in</button>
		</form>
		</Card.Body>
		</Card>
		</div>
	</Container>
  )
}

export default Login