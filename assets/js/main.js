document.addEventListener("DOMContentLoaded", () => {
    const sliderEl = document.querySelector(".perfume-slider");

    if (sliderEl) {
        const swiper = new Swiper(".perfume-slider", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            
            // Bật loop bình thường (giờ đã có 6 ảnh nên sẽ chạy mượt)
            loop: true, 
            speed: 600,
            
            // --- CHỈNH LẠI KHOẢNG CÁCH TẠI ĐÂY ---
            coverflowEffect: {
                rotate: 0,
                stretch: 80,  // Tăng lên 80 để đẩy 2 ảnh bên cạnh ra xa, đỡ bị che
                depth: 100,   // Độ sâu 3D
                modifier: 1,  
                slideShadows: false,
            },
            // -------------------------------------

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                320: {
                    effect: "slide",
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    effect: "coverflow",
                    slidesPerView: "auto",
                }
            }
        });
    }

    // --- SLIDER SẢN PHẨM MỚI ---
    if (document.querySelector(".product-slider")) {
        var productSwiper = new Swiper(".product-slider", {
            slidesPerView: 4, // Hiển thị 4 sản phẩm trên Desktop
            spaceBetween: 30, // Khoảng cách giữa các thẻ
            loop: true,       // Chạy lặp lại vô tận
            autoplay: {
                delay: 3000,  // Tự chạy sau 3 giây
                disableOnInteraction: false, // Vẫn chạy tiếp sau khi người dùng vuốt
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true, // Cho phép bấm vào dấu chấm
            },
            breakpoints: {
                // Mobile: Hiện 1 hình
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // Tablet: Hiện 2 hình
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // Laptop nhỏ: Hiện 3 hình
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // Desktop lớn: Hiện 4 hình
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    }
});