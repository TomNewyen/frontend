import styled from 'styled-components'
import React from 'react'
import { Search } from '@mui/icons-material'
import { ShoppingCart } from '@mui/icons-material'
import { LanguageOutlined } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    
`
const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;
`


const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;
`
const Input = styled.input`
    border: none;
    border-bottom: 1.5px solid;
    background-color: transparent;
`
const MenuItem= styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const NavBar = () => {
    const cart = useSelector(state => state.cart)
  return (
    <Container>
        <Wrapper>
        <Left>
           <Link to ='/' style={{textDecoration:'none',color:'black'}}>
            <Logo> KANDN. </Logo>
            </Link>
        </Left>
        <Right>
            
            <SearchContainer>
                <Input/>
                <Search style={{fontSize:20}}/>
            </SearchContainer>
            <MenuItem>
            <LanguageOutlined style ={{fontSize:20}}/>
            </MenuItem>
            <Link to ='/login' style={{textDecoration:'none',color:'black'}}>
                <MenuItem> Sign In</MenuItem>
            </Link>
            <Link to ='/register' style={{textDecoration:'none',color:'black'}}>
            <MenuItem> Register</MenuItem>
            </Link>
            <Link to ='/cart' style={{textDecoration:'none',color:'black'}}>
            <MenuItem>
                <ShoppingCart/> 
            </MenuItem>
            </Link>
        </Right>
        </Wrapper>
    </Container>
        
  )
}

export default NavBar