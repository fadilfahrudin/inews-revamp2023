    let img = $('img');
    let loadImg = 0;

    // Fungsi untuk menghapus kelas tertentu setelah semua gambar dimuat
    // function checkAllImagesLoaded() {
    //     loadImg++;
    //     // Variabel untuk memeriksa apakah semua gambar sudah dimuat
    //     let allImagesLoaded = true;
    //     img.each(image => {
    //         if (image.complete) {
    //             allImagesLoaded = false;
    //         }
    //     });

    //     if (allImagesLoaded) {
    //         console.log("All images loaded");
    //         // Hapus kelas tertentu (misalnya, kelas 'hide') dari elemen gambar
    //         $(".loading").each(function (i, item) {
    //             item.classList.remove("loading");
    //         })
    //     }
    // }