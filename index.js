const Leftbtn = document.getElementById('left_button')
const Rightbtn = document.getElementById('right_button')
const Imagelink = document.getElementById('image_link')
const authorName = document.getElementById('author')
const Desig = document.getElementById('designation')
const Para = document.getElementById('info')
Datafth = async()=>
{
    try
    {
        const response = await fetch('./reviews.json');
        const Data = await response.json();
        console.log(Data)
        return Data;

    }  
    catch(error)
    {
        console.log(  'error occured ',error);
    }
}

Datafth().then((Data) =>
{

    let i=0;
    let j=Data.length
    console.log(j)
    if(Data)
    {
        Rightbtn.addEventListener('click',()=>
            {
               
                console.log(Data[i].name)
                Imagelink.src = Data[i].img;
                authorName.innerText = Data[i].name
                Desig.innerText = Data[i].job
                Para.innerText = Data[i].text
                i+=1;
            })

        Leftbtn.addEventListener('click', ()=>
        {
            console.log(Data[j].name)
            Imagelink.src = Data[j].img;
            authorName.innerText = Data[j].name
            Desig.innerText = Data[j].job
            Para.innerText = Data[j].text
            j-=1;


        })
       
    }
}
);





