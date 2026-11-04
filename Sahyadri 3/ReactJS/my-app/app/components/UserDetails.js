"use client";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Userdetails() {
    const { name } = useContext(UserContext);
    return (
        <>
        <h1>User Details: (this is from user details component)</h1>
        <p>Name: {name}</p>
        </>
    )
}