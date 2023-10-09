// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData(){
    try{
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();
    const modifiedUser= usersData.map(user => ({
        Name: user.name,
        Username : user.username,
        Email : user.email,
        Address : user.address.street,
        Phone : user.phone,
        Website : user.website,
        Company : user.company.name
    }));
    console.log(modifiedUser)

    const FilterData = modifiedUser.filter(user=>
        user.Email.endsWith(".biz"));
        console.log("Filter Data : ",FilterData);
        modifiedUser.sort((a, b) => a.Name.localeCompare(b.Name))
        console.log("Sort Data : ",modifiedUser);
}
catch(error){
    console.log("An error has occured",error)
}
}

fetchUserData();


