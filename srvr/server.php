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

// require_once './../vendor/autoload.php';
// require_once './secrets.php';

// \Stripe\Stripe::setApiKey($stripeSecretKey);
// header('Content-Type: application/json');

// $YOUR_DOMAIN = 'http://localhost:8888/';

// $checkout_session = \Stripe\Checkout\Session::create([
//   'line_items' => [[
//     # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
//     'price' => 'price_1MeGmtGxHZYMtDr3QTU2dphQ',
//     'quantity' => 1,
//   ]],
//   'mode' => 'payment',
//   'success_url' => $YOUR_DOMAIN . '/Pages/success.html',
//   'cancel_url' => $YOUR_DOMAIN . '/Pages/cancel.html',
//   'automatic_tax' => [
//     'enabled' => true,
//   ],
// ]);

// header("HTTP/1.1 303 See Other");
// header("Location: " . $checkout_session->url);




require_once './../vendor/autoload.php';
require_once './secrets.php';

\Stripe\Stripe::setApiKey($stripeSecretKey);
header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://localhost:8888/';

$cart = json_decode($_POST['data']);

// echo '<pre>';
// print_r($cart);
// echo '</pre>';
$lineItems = [];

foreach ($cart as $item) {
  $lineItems[] = [
    'price' => $item->priceId,
    'quantity' => $item->quantity,
  ];
}

$checkout_session = \Stripe\Checkout\Session::create([
  'line_items' => $lineItems,
  'mode' => 'payment',
  'success_url' => $YOUR_DOMAIN . '/Pages/success.html',
  'cancel_url' => $YOUR_DOMAIN . '/Pages/cancel.html',
  'automatic_tax' => [
    'enabled' => true,
  ],
]);


header("HTTP/1.1 303 See Other");
header("Location: " . $checkout_session->url);


