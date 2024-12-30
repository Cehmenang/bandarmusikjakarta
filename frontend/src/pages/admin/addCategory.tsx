import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { host } from "../../../libs/config"
import { checkAdmin } from "../../action/auth.action"
import BlankPage from "../blank"

export default function AddCategory(){
    const [ admin, isAdmin ] = useState<boolean>(false) 
    async function adminValidation() { return await isAdmin(await checkAdmin()) }
    adminValidation()
    
    const [ gambar, setGambar ] = useState<File | null>(null)
    const [ name, setName ] = useState<string>('')
    const [ loading, setLoading ] = useState<boolean>(false)
    const navigate = useNavigate()

    async function submitKategori(){
        setLoading(true)
        const form = new FormData()
        form.append('name', name)
        form.append('file', gambar!)
        const response = await axios.post(`${host}/admin/tambah/kategori`, form)
        setLoading(false)
        if(response.data.success) return navigate('/admin/kategori')
    }

    if(!admin) return <BlankPage/>
    else return (
        <div className="form">
            <input type="text" name="nama" onChange={(e)=>{ setName(e.target.value) }} value={name} required/>
            <input type="file" name="gambar" onChange={(e)=>{ setGambar(e.target.files![0]) }} className="gambar" required/>
            <button type="submit" onClick={submitKategori} disabled={loading} className="disabled:bg-slate-200">Kirim</button>
        </div>

    )
}