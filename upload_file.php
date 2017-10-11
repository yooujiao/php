<?php
header("content-type:text/html;charset=utf-8");
//允许上传的图片、音频后缀
$allowedExts = array("jpg" , "mp3" , "gif" , "png");
$temp = explode(".", $_FILES["file"]["name"]);
//echo $_FILES["file"]["size"];
$extension = end($temp);     // 获取文件后缀名
if ((($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "audio/mp3")
|| ($_FILES["file"]["type"] == "image/gif")
//|| ($_FILES["file"]["type"] == "image/pjpeg")
//|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png"))
//&& ($_FILES["file"]["size"] < 204800)   // 小于 200 kb
&& in_array($extension, $allowedExts))
{
	if ($_FILES["file"]["error"] > 0)
	{
		//echo "错误：: " . $_FILES["file"]["error"] . "<br>";
	}
	else
	{
		//echo "上传文件名: " . $_FILES["file"]["name"];
		//echo "文件类型: " . $_FILES["file"]["type"] . "<br><br>";
		//echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br><br>";
		//echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"] . "<br><br>";
		
		// 判断当期目录下的 upload 目录是否存在该文件
		// 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
		
		$name = iconv('utf-8','gbk',$_FILES["file"]["name"]);
		$file_name = iconv('gbk','utf-8',$name);
		if (file_exists("upload/" . $name))
		{
			echo '<h3 style="color:red;font-family:楷体">' . $file_name . ' 文件已经存在</h3>';
			echo "<h4 style='color:green;font-family:楷体'>你可以加入歌曲到歌曲列表播放！</h4>";
			/*echo "<script type='text/javascript'>
					 
					confirm('$file_name   文件已经存在，是否要覆盖？');
							
				</script>";*/

			/*if(move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $name)){
					echo "<br><h3 style='color:green'>文件上传成功</h3>";
					echo "文件存储在: " . "upload/" . $file_name;
				}else{echo "文件上传失败";}*/

		}
		else
		{
			// 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
			if(move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $name)){
					echo "<h3 style='color:green;font-family:楷体'>文件上传成功</h3>";
					//echo "文件存储在: " . "upload/" . $file_name;
					echo "<h4 style='color:green;font-family:楷体'>你可以加入歌曲到歌曲列表播放了！</h4>";
				}else{echo "文件正在上传中，请稍等...";}
		}
		/*if($flag){
				
		}else
		{
			echo "文件正在上传中";
		}*/
	}
}
else
{
	echo "<h3 style='color:red'>非法的文件格式</h3>";
}
?>

/*<?php
		class Person{
			public $name;
			
			function Person($name) {
				$this->name = $name;
			}
		}
		$A = new Person('宋江');
		
		echo $A->name;
	?>*/


 

