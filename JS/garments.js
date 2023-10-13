function getOrder(prod,price){
    firebase.firestore().collection("Product-Name").doc('Prod').set({
        Prod_Name: prod,
        Price: price
      })
      .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
      setTimeout(function(){location.replace('buy.html') }, 1000);
}