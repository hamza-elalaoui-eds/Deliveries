function findAddresses(toFind) {
    addresses.forEach(function(address) {
        const fullAddress = address.join(", ");
        
        if (fullAddress.toLowerCase().includes(toFind.toLowerCase())) {
            console.log(fullAddress);
        }
    });
}