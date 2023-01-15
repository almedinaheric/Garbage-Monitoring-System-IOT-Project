#include <ESP8266WiFi.h>

#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>

const int pingPin = 2; // Trigger Pin of Ultrasonic Sensor //send
const int echoPin = 0; // Echo Pin of Ultrasonic Sensor //receive

// Set these to run example.
#define FIREBASE_HOST "example.firebaseio.com"
#define FIREBASE_AUTH "abcdefghijklmnopqrstuvwxyz"
#define WIFI_SSID "WiFiSSID"                 //provide ssid (wifi name)
#define WIFI_PASSWORD "password"  //wifi passwordvoid setup()

void setup() {
  // Debug console
  Serial.begin(9600);  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WIFI_SSID);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  if (Firebase.failed()) {
    Serial.print(Firebase.error());
  } else {
    Serial.println("Firebase Connected");
  }
}

void loop() {
  long duration, cm;
   pinMode(pingPin, OUTPUT);
   digitalWrite(pingPin, LOW);
   delayMicroseconds(2);
   digitalWrite(pingPin, HIGH);
   delayMicroseconds(10);
   digitalWrite(pingPin, LOW);
   pinMode(echoPin, INPUT);
   duration = pulseIn(echoPin, HIGH);
   cm = microsecondsToCentimeters(duration);
   Serial.print(cm);
   Serial.print("cm");
   Serial.println();
   Firebase.setInt("distanca", cm);
   delay(5000);
}

long microsecondsToCentimeters(long microseconds) {
   return microseconds / 29 / 2;
}