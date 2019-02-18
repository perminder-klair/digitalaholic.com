---
title: How to upload files using Yii2 and DropZone.Js
date: "2014-06-30"
spoiler: As Yii2 is almost going to ready for production but still in development
---

As Yii2 is almost going to ready for production but still in development. It is not very easy to find an upload extention for Yii2 yet. So, I have ported amazing [DropZone.Js](http://www.dropzonejs.com/)  as an [Yii2 DropZone](https://github.com/perminder-klair/yii2-dropzone) Extention.

<!-- end -->

To get started, we will use [Yii2 Basic App](https://github.com/yiisoft/yii2-app-basic/) follow readme there if you have not yet setuped Yii2 app yet.

### Install Yii2 DropZone.js extention

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist perminder-klair/yii2-dropzone "dev-master"
```

or add

```
"perminder-klair/yii2-dropzone": "dev-master"
```

to the require section of your `composer.json` file.

Once Dropzone extention is installed into your Yii2 app. Let's move on to find out how to use it.

### Using Yii2 DropZone.js

Once the extension is installed, simply add the following code to you view file where you want to show DropZone ajax upload area:

```language-php
echo \kato\DropZone::widget();
```

We can also pass DropZone.js options for example:

```language-php
echo \kato\DropZone::widget([
       'options' => [
           'maxFilesize' => '2',
           'clientEvents' => [
               'complete' => "function(file){console.log(file)}",
               'removedfile' => "function(file){alert(file.name + ' is removed')}"
           ]
       ],
   ]);
```

Once you done this, save the view file and reload browser.
Great! now you can see nice drog and drop upload area.

Next still is how to handle files in Yii2 which are uploaded by DropZone extention. I will show you an example controller action and here it is:

```language-php
public function actionUpload()
{
    $fileName = 'file';
    $uploadPath = './files';

    if (isset($_FILES[$fileName])) {
        $file = \yii\web\UploadedFile::getInstanceByName($fileName);

        //Print file data
        //print_r($file);

        if ($file->saveAs($uploadPath . '/' . $file->name)) {
            //Now save file data to database

            echo \yii\helpers\Json::encode($file);
        }
    }

    return false;
}
```

In this method we can see DropZone is sending file as `$_FILES[$fileName]` and Yii2 UploadedFile class is doing rest of the job to save to upload path.

Rest, it's upto you what you want to do next.
Any questions? Feel free to use comment box below, I will be happy to help.
