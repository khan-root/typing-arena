import { useState } from "react"
import paragraphApi from "../../Model/Paragraph/Paragraph"
import { showToast } from "../../Components/Toaster"
import useStore from "../../Store/Store"

const useParagraphServices = (contestID)=>{



    const gettingParagraphList = useStore((state)=> state.gettingParagraphList)
    const paragraphList = useStore((state)=> state.paragraphList)
    const newParagraph = useStore((state)=> state.newParagraph)
    const gettingContestParagraphList = useStore((state)=> state.gettingContestParagraphList)
    const deletePara = useStore((state)=> state.deletePara)
    const updateParagraph = useStore((state)=> state.updateParagraph)


    const customLevelData = [
        {id:1, title:'Easy', value:'easy'},
        {id:2, title:'Medium', value: 'medium'},
        {id:3, title:'Hard', value:'hard'},
    ]

    const [addParaValue, setAddParaValue] = useState({
        show:false,
        content:'',
        level:null,
        duration:'',
        contest_id:contestID,
        loading:false,
        paraID:'',
        update: false
    })



    const handleChangeAddParagraph = (e)=>{
        const { name, value } = e.target 
        setAddParaValue((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }



    const handleSelectAddParagraph = (selected, field) =>{
        setAddParaValue((prevState)=>({
            ...prevState,
            [field]: selected
        }))
    }


    const handleAddPara = ()=>{
        setAddParaValue((prevState)=>({
            ...prevState,
            show:true,
            update: false,
        }))
    }
    const toggleAddPara = ()=>{
        setAddParaValue((prevState)=>({
            ...prevState,
            show:false,
            content:'',
            level:null,
            duration:'',
            contest_id:'',
            loading:false,
            update: false,
        }))
    }


    const [deleteValue, setDeleteValue] = useState({
        id:'',
        show:false
    })


    const handleDeleteParagraph = ()=>{
        setDeleteValue((prevState)=>({
            ...prevState,
            show:true
        }))
    }


    const toggleHandleDlete = ()=>{
        setDeleteValue((prevState)=>({
            ...prevState,
            show:false
        }))
    }



    const handleAddParagrah = async(e)=>{
        e.preventDefault()
        const {content, contest_id, duration, level} = addParaValue

        const apiDataFree = {
            content: content,
            typing_duration:+duration,
            difficulty_level: level?.value
        }
        const apiData= {
            content: content,
            contest_id: contest_id,
            typing_duration:+duration,
            difficulty_level: level?.value
        }
        setAddParaValue((prevState)=>({
            ...prevState,
            loading:true
        }))
        try {
            const response = await paragraphApi.addParagraph(contestID === null ? apiDataFree:apiData) 
            const responseData = response.data 
            console.log('response', response)
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const inserData = responseData.DB_DATA
                showToast("Paragraph Added Successfully", 'success')
                newParagraph(inserData)
                toggleAddPara()
                
            }else{
                const error = responseData.ERROR_DESCRIPTION
                showToast(error, 'error')
            }       
        } catch (error) {
            const error_description = error.response.data.ERROR_DESCRIPTION
            showToast(error_description, 'error')

        }finally{
            setAddParaValue((prevState)=>({
                ...prevState,
                loading:false
            }))
        }
    }


    const [deleteParaValue, setDeleteParaValue] = useState({
        id: '',
        loading: false, 
        show: false
    })



    const handleParaAction = (data, para)=>{

        const caseId = data.id 

        switch (caseId) {
            case 1:

                settingParaUpdateData(para)

            break
            case 2:
                toggleDeletePara(para._id)
                
                break;
        
            default:
                break;
        }
    }


    const toggleDeletePara = (id)=>{
        setDeleteParaValue((prevState)=>({
            ...prevState,
            show: !prevState.show,
            id: id,
        }))
    }

    const handleConfirmDeletePara =async()=>{
        setDeleteParaValue((prevState)=>({
            ...prevState,
            loading: true
        }))
        try {
            const response = await paragraphApi.deleteParagraph(deleteParaValue?.id)
            const responseData = response.data 
            if(response.status === 200 && responseData?.STATUS === "SUCCESSFUL"){
                toggleDeletePara()
                deletePara(deleteParaValue.id)
                showToast("Paragraph deleted successfully", 'success')

            }
        } catch (error) {
            
        }finally{
            setDeleteParaValue((prevState)=>({
                ...prevState,
                loading: false
            }))
        }
    }



    const settingParaUpdateData = (data)=>{

        setAddParaValue((prevState)=>({
            ...prevState,
            show: true,
            update: true, 
            level: data?.difficulty_level,
            duration: data?.typing_duration,
            content: data?.content,
            paraID: data?._id

        }))
    }

    const getValue = (val) => (typeof val === 'object' && val !== null ? val.value.toString() : val);



    const handleEditParagraph = async(e)=>{
        e.preventDefault()
        const {content, contest_id, duration, level, paraID} = addParaValue

        console.log(addParaValue)

        const apiDataFree = {
            content: content,
            typing_duration:+duration,
            difficulty_level: level?.value,
            
        }
        const apiData= {
            content: content,
            contest_id: contest_id,
            typing_duration:+duration,
            difficulty_level: getValue(level),
        }
        setAddParaValue((prevState)=>({
            ...prevState,
            loading:true
        }))
        try {
            const response = await paragraphApi.editPara(paraID, contestID === null ? apiDataFree:apiData) 
            const responseData = response.data 
            console.log('response', response)
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const inserData = responseData.DB_DATA
                showToast("Paragraph Updated Successfully", 'success')
                updateParagraph(inserData)
                toggleAddPara()
                
            }else{
                const error = responseData.ERROR_DESCRIPTION
                showToast(error, 'error')
            }       
        } catch (error) {
            const error_description = error.response.data.ERROR_DESCRIPTION
            showToast(error_description, 'error')

        }finally{
            setAddParaValue((prevState)=>({
                ...prevState,
                loading:false
            }))
        }
    }

    return { 
        addParaValue,
        toggleAddPara,
        handleAddPara,
        customLevelData,
        deleteValue,
        handleDeleteParagraph,
        handleChangeAddParagraph,
        handleSelectAddParagraph,
        handleAddParagrah,
        gettingParagraphList,
        paragraphList,
        gettingContestParagraphList,
        handleParaAction,
        toggleDeletePara,
        deleteParaValue,
        handleConfirmDeletePara,
        handleEditParagraph
    }

}


export default useParagraphServices