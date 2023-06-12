import React, {useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid'
import { Alert, AlertTitle, Box, Snackbar, Typography } from "@mui/material"

const columns = [
    {
        field: "id", headerName: "Id", width: 60
    },
    {
        field: "keywords", headerName: "Palabra clave", width: 280
    },
    {
        field: "option_key", headerName: "Key respuesta", width: 150
    }
]


const DataTable = () => {
    const [keyWords, setKeyWords] = useState([])
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/api/keywords")
            .then(response => response.json())
            .then(json => setKeyWords(json))
    }, [])

    console.log(keyWords);

    return(
        <Box
            sx={
                {
                    height: '100%',
                    width: '100%'
                }
            }
        >
            <Typography
                variant="h3"
                component="h3"
                sx={{textAlign: "center", mt: 3, mb: 3}}
            >
                Plantillas
            </Typography>
            <DataGrid
            onRowClick={ (e) => {
                console.log(`ROW: ${JSON.stringify(e.row)}`);
                setText(e.row.keywords)
                setOpen(true)
            } }
            rows={keyWords}
            columns={columns}
            />
            <Snackbar
                open= {open}
                autoHideDuration={1000}
                onClose={() => {setOpen(false)}}
            >
                <Alert severity="success" color="info">
                    <AlertTitle>
                        {text}
                    </AlertTitle>
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default DataTable
