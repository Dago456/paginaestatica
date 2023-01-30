import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { layout } from '../layouts/layout'

const HomePage: NextPage = ()=>{
return(
    <layout title='listado de cantantes'>

        <Button color="primary, RED">
        HOLA PERRAS
        </Button>
    </layout>
    )

}
export default HomePage;