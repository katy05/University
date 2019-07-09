<?php
class user {
    var $name;
    var $lastname;
    var $password;
    var $email;
    var $phone;
    var $country;
    

    public function __construct() {
        $this->name="none";
        $this->lastname="none";
        $this->password="none";
        $this->email="none";
        $this->phone="none";
        $this->country="none";
      
    }

    function Getname() {
        echo $this->name;
    }

    function Setname($name) {
        $this->name = $name;
    }

    function Getlastname() {
        echo $this->lastname;
    }

    function Setlastname($lastname) {
        $this->lastname = $lastname;
    }
    function Getpassword() {
        echo $this->password;
    }

    function Setpassword($password) {
        $this->password = $password;
    }
    function GetEmail() {
        echo $this->email;
    }

    function SetEmail($email) {
        $this->email = $email;
    }
    function GetPhone() {
        echo $this->phone;
    }

    function SetPhone($phone) {
        $this->phone = $phone;
    }
    function GetCountry() {
        echo $this->country;
    }

    function SetCountry($country) {
        $this->country = $country;
    }
  

}
$user01 = new user;
$user01->Setname("Катя");
$user01->Getname();
echo("<br>");
$user01->Setlastname("Подоприго");
$user01->Getlastname();
echo("<br>");
$user01->Setpassword("Пароль");
$user01->Getpassword();
echo("<br>");
$user01->SetEmail("katryn@gmail.com");
$user01->GetEmail();
echo("<br>");
$user01->SetPhone("+375(33) 329-14-87");
$user01->GetPhone();
echo("<br>");
$user01->SetCountry("Belarus");
$user01->GetCountry();
echo("<br>");
?>