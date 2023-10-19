import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  faHeart = faHeart;
  products = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Nike React Miler',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'Nike Air Zoom Pegasus 37',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg',
      slug: 'nike-air-zoom-pegasus-37',
    },
    {
      id: 4,
      name: 'Nike Joyride Run Flyknit',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', , 'Brown', 'Red'],
      price: 180,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg',
      slug: 'nike-joyride-run-flyknit',
    },
    {
      id: 5,
      name: 'Nike Mercurial Vapor 13 Elite FG',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg',
      slug: 'nike-mercurial-vapor-13-elite-fg',
    },
    {
      id: 6,
      name: 'Nike Phantom Vision Elite Dynamic Fit FG',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg',
      slug: 'nike-phantom-vision-elite-dynamic-fit-fg',
    },
    {
      id: 7,
      name: 'Nike Phantom Venom Academy FG',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Brown', 'Red', 'Black'],
      price: 80,
      discountPrice: 60,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg',
      slug: 'nike-phantom-venom-academy-fg',
    },
    {
      id: 8,
      name: 'Nike Mercurial Vapor 13 Elite Tech Craft FG',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 145,
      discountPrice: 125,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg',
      slug: 'nike-mercurial-vapor-13-elite-tech-craft-fg',
    },
    {
      id: 9,
      name: 'Nike Mercurial Superfly 7 Pro MDS FG',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 137,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg',
      slug: 'nike-mercurial-superfly-7-pro-mds-fg',
    },
    {
      id: 10,
      name: 'Nike Air Force 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 90,
      discountPrice: 70,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg',
      slug: 'nike-air-force-1',
    },
    {
      id: 11,
      name: 'Nike Air Max 90',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black'],
      price: 100,
      discountPrice: 75,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg',
      slug: 'nike-air-max-90',
    },
    {
      id: 12,
      name: 'Nike Air Max 90 LTR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Red'],
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg',
      slug: 'nike-air-max-90-ltr',
    },
    {
      id: 13,
      name: 'Nike Joyride Dual Run',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'KIDS',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg',
      slug: 'nike-joyride-dual-run',
    },
    {
      id: 14,
      name: 'Nike Renew Run',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'KIDS',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 80,
      discountPrice: 65,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg',
      slug: 'nike-renew-run',
    },
    {
      id: 16,
      name: 'Bridgport Advice',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'MEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 30,
      is_in_inventory: false,
      items_left: 4,
      imageURL:
        'https://zala.bt/uploads/products/2022/hush-puppies-824-447358.jpg',
      slug: 'bridgport-advice',
    },
    {
      id: 15,
      name: 'Beck',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'MEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 80,
      discountPrice: 45,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://dynamic.zacdn.com/b4IKqMLQukfjaBONoT8-yeXoqUs=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/hush-puppies-8050-0271573-2.jpg',
      slug: 'beck',
    },
    {
      id: 17,
      name: 'Fester',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'MEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 70,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        'https://www.brantano.co.uk/cdn/shop/products/gbt-27719-52460-f-a-1.jpg?v=1660222270',
      slug: 'fester',
    },
    {
      id: 18,
      name: 'Pixel',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'MEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 75,
      is_in_inventory: true,
      items_left: 7,
      imageURL:
        'https://i.etsystatic.com/14176273/r/il/0e800c/2155961056/il_570xN.2155961056_6902.jpg',
      slug: 'pixel',
    },
    {
      id: 19,
      name: 'Austin',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'MEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue'],
      price: 75,
      discountPrice: 60,
      is_in_inventory: false,
      items_left: 2,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Austin-Coffee_800x800.jpg?v=1574772988',
      slug: 'austin',
    },
    {
      id: 20,
      name: 'SS-HL-0135',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'WOMEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black'],
      price: 30,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270',
      slug: 'ss-hl-0135',
    },
    {
      id: 21,
      name: 'SS-HL-0136',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'WOMEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 50,
      discountPrice: 35,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372',
      slug: 'ss-hl-0136',
    },
    {
      id: 22,
      name: 'SS-HL-0128',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'WOMEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 35,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174',
      slug: 'ss-hl-0128',
    },
    {
      id: 23,
      name: 'SS-MS-0075',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 25,
      is_in_inventory: false,
      items_left: 7,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687',
      slug: 'ss-ms-0075',
    },
    {
      id: 24,
      name: 'SS-MS-0075',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 35,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-615-SS-MS-0075-TAN_800x800.jpg?v=1570688687',
      slug: 'ss-ms-0075',
    },
    {
      id: 25,
      name: 'SS-PM-0093',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUSHPUPPIES',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue'],
      price: 30,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253',
      slug: 'ss-pm-0093',
    },
    {
      id: 26,
      name: 'Nizza X Disney',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8],
      color: ['White', 'Blue', 'Black', 'Red'],
      price: 55,
      is_in_inventory: false,
      items_left: 6,
      imageURL:
        'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg',
      slug: 'nizza-x-disney',
    },
    {
      id: 27,
      name: 'X_PLR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 65,
      discountPrice: 45,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg',
      slug: 'x_plr',
    },
    {
      id: 28,
      name: 'Stan Smith',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11],
      color: ['White', 'Blue', 'Black'],
      price: 55,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg',
      slug: 'stan-smith',
    },
    {
      id: 29,
      name: 'NMD_R1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 120,
      discountPrice: 105,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg',
      slug: 'nmd_r1',
    },
    {
      id: 30,
      name: 'NMD_R1 Flash Red',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown'],
      price: 140,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg',
      slug: 'nmd_r1-flash-red',
    },
    {
      id: 31,
      name: 'Superstar',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 90,
      discountPrice: 80,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg',
      slug: 'superstar',
    },
    {
      id: 32,
      name: 'Club C Revenge Mens',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Reebok',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 70,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://www.outbacksylt.com/files/image/id/10434/fixed/1/w/1000/h/1000/n/reebok-club-c-revenge-chalk-und-teal-ef3091-1.jpg',
      slug: 'club-c-revenge-mens',
    },
    {
      id: 33,
      name: 'SK80-Low',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Vans',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black', 'Red'],
      price: 60,
      discountPrice: 25,
      is_in_inventory: true,
      items_left: 3,
      imageURL: 'https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$',
      slug: 'sk80-low',
    },
    {
      id: 34,
      name: 'Michael Feburary SK8-Hi',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Vans',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 72,
      is_in_inventory: true,
      items_left: 3,
      imageURL: 'https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$',
      slug: 'michael-feburary-sk8-hi',
    },
  ];
  filteredProducts: any = this.products
  
  totalProduct = this.products.length;
  productInStock = this.products.filter((el) => el.is_in_inventory).length;
  productOutOfStock = this.products.filter((el) => !el.is_in_inventory).length;

  selectedFilterRadioButton: string = 'all';


  updateFilteredProducts() {
    if (this.selectedFilterRadioButton === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) => product.is_in_inventory.toString() === this.selectedFilterRadioButton);
    }
  }

  onFilterChange(value: string) {
    this.selectedFilterRadioButton = value
    this.updateFilteredProducts();
  }
}
