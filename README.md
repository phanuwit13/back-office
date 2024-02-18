
  

# Back-Office

  

โปรเจกต์ Back-Office เป็นโปรเจกต์ที่พัฒนาด้วย [React](https://reactjs.org/) และใช้งาน [Vite](https://vitejs.dev/) เป็นเครื่องมือในการพัฒนาและสร้างเวอร์ชั่น production ของเว็บแอปพลิเคชัน นอกจากนี้ยังใช้ [json-server](https://github.com/typicode/json-server) เพื่อจำลองการทำงานของ API สำหรับการพัฒนา

  

## การเริ่มต้นใช้งาน

  

หลังจากที่คุณ clone หรือดาวน์โหลดโปรเจกต์นี้มาแล้ว คุณสามารถทำตามขั้นตอนด้านล่างเพื่อเริ่มต้นใช้งาน:

  

### การติดตั้ง Dependencies

  

ใช้คำสั่งด้านล่างเพื่อติดตั้ง dependencies ที่จำเป็น:

```bash

nmp  install

# or

yarn

```

  

### การเริ่มต้นเซิร์ฟเวอร์สำหรับพัฒนา

  

เริ่มต้นเว็บเซิร์ฟเวอร์พร้อม hot-reload ด้วยคำสั่ง:

```bash

nmp  run  dev

# or

yarn  dev

```

### การเริ่มต้น JSON Server

  

เริ่มต้น JSON Server บนพอร์ต 8081 ด้วยคำสั่ง:

  

```bash

nmp  run  server

# or

yarn  server

```

  

## การเริ่มต้นใช้งาน with Docker

  

เริ่มต้นเว็บเซิร์ฟเวอร์ด้วยคำสั่ง:

```bash

docker-compose  up

```

  ## Username Password
```bash
├── public
├── server
│   ├── db.json <-- this file
│   ├── Dockerfile
├── src
```

## การใช้งาน Libraries

  

โปรเจกต์นี้ใช้งาน libraries และเครื่องมือต่างๆ ดังนี้:

  

-  `react-hook-form` สำหรับการจัดการเรื่องของ form

-  `@tanstack/react-query` และ `@tanstack/react-table` สำหรับการจัดการข้อมูลและตาราง

-  `axios` สำหรับการทำ HTTP requests

-  `dayjs` สำหรับการจัดการวันที่

-  `react-router-dom` สำหรับการ route ในแอปพลิเคชัน

-  `zustand` สำหรับการจัดการ state management

-  `eslint` และ `@typescript-eslint` สำหรับการตรวจสอบโค้ด