//UNION TYPE (1 ta variable e different data acceptable )
type ID= string | number;
const id:ID = "g - 953"
function printID(id: ID)
{
    console.log("ID:");
}
printID(322);
printID(id);