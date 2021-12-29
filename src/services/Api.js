import axios from 'axios';

// import React from 'react'

const url ="http://localhost:3003/users";

export const getUser = async (id)=>{
    id = id ||'';
    return await axios.get(`${url}/${id}`);
}


export const addUser = async(user)=>{
    return await axios.post(url,user);
}

export const editUser = async(id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${url}/${id}`);
}