<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<?php




require_once './../vendor/autoload.php';
require_once './secrets.php';

\Stripe\Stripe::setApiKey($stripeSecretKey);
header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://the.esoteric.gallery/';

$cart = json_decode($_POST['data']);


$lineItems = [];

$metadata = [];

foreach ($cart as $item) {
  $lineItems[] = [
    'price' => $item->priceId,
    'quantity' => $item->quantity
  ];

  if (isset($item->size)) {
    $metadata['Size'] = $item->size;
  }
}

$checkout_session = \Stripe\Checkout\Session::create([
  'line_items' => $lineItems,
  'mode' => 'payment',
  'success_url' => $YOUR_DOMAIN . '/Pages/copy-returns/success.html',
  'cancel_url' => $YOUR_DOMAIN . '/',
  'automatic_tax' => [
    'enabled' => true,
  ],
  'metadata' => $metadata // set metadata at the root level
]);


header("HTTP/1.1 303 See Other");
header("Location: " . $checkout_session->url);


