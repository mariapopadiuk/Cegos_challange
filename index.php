<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css">
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
</head>
<title>Cegos</title>

<body class="bg-[#414855]">
  <div class="container m-auto">
    <img src="img/cegos-logo.png" class="d-block h-[150px] w-[150px] p-[20px] mt-[30px] mb-[30px] border-[1px] border-solid border-white m-auto">
    <h1 class="text-center text-white font-semibold text-3xl tracking-widest">CEGOS DIGITAL STUDIO</h1>
    <p class="tracking-widest font-light text-white text-center text-lg border-b-2 border-solid border-white border-opacity-10 pb-[30px] pt-[20px]">SOFTWARE DEVELOPER TEST</p>
    <p class="text-center text-white text-base tracking-widest font-light pt-[10px]">FIRST TASK</p>

    <?php
    include('./api/insertData.php');
    ?>

    <div class="text-center text-red-700"><?php echo $error_message; ?></div>
    <p class="text-center text-white text-base tracking-widest font-light pt-[10px] pb-[20px]">SECOND TASK</p>
    <div class="text-center">
      <a class="button px-5 py-3 bg-[#4C5C96] text-white text-sm rounded-md hover:shadow-xl duration-300" href="dashboard.html">Dashboard</a>
    </div>
  </div>
</body>

</html>