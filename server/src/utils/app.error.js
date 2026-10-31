export default class AppError extends Error {
  constructor(statusCode, code, message) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.code = code;
  }
}

// export default class AppError extends Error {
//   constructor(statusCode, code, message) {
//     super(message);
//     this.name = "AppError";
//     this.statusCode = statusCode;
//     this.code = code;
//     Error.captureStackTrace(this, this.constructor);
//   }
// }

// Sorról sorra

// export default class AppError extends Error {

// Létrehozol egy AppError osztályt, ami az beépített Error-ból öröklődik. Így az AppError példányok Error-nak számítanak: van message, van stack, és működik a throw, a try/catch és az instanceof Error is. Az export default miatt máshol import AppError from "./AppError.js" formában tudod behozni.

// constructor(statusCode, code, message) {

// A konstruktor akkor fut le, amikor new AppError(409, "EMAIL_IN_USE", "...")-t hívsz. A három paraméter: a HTTP státuszkód, egy géppel olvasható hibakód (ezt a frontend tudja vizsgálni), és az emberi üzenet.

// super(message);

// Meghívja az Error konstruktorát. Ez állítja be a this.message-et. Öröklésnél a this használata előtt kötelező a super() hívás, különben hibát kapsz.

// this.name = "AppError";

// Alapból a name értéke "Error" lenne. Így a stack trace és a console.log is AppError: ...-t ír, ami logoláskor segít megkülönböztetni a saját hibáidat a váratlanoktól.

// this.statusCode = statusCode;
// this.code = code;

// Eltárolod a saját mezőidet, ezeket olvassa ki a hibakezelő middleware (err.statusCode, err.code).

// Error.captureStackTrace(this, this.constructor);

// Erről lent részletesen.

// Error.captureStackTrace

// Ez egy V8-specifikus (Node.js, Chrome) függvény, ami a megadott objektumra beállítja a stack tulajdonságot, vagyis azt, hogy a hiba hol keletkezett.

// Az első paraméter (this): melyik objektumhoz írja a stacket.
// A második paraméter (this.constructor): ettől a függvénytől felfelé hagyja ki a stack frame-eket. Ez azt jelenti, hogy a stack trace nem tartalmazza az AppError konstruktorát, tehát az első sor már az a hely lesz, ahol a new AppError(...)-t hívtad. Kicsit tisztább a nyom.

// Enélkül is működne?

// Igen, gond nélkül. Az Error konstruktora (a super(message)) már eleve beállítja a stack-et. A modern Node-ban a különbség csak annyi, hogy a stack trace-ben egy plusz sor jelenik meg az AppError konstruktoráról. Funkcionálisan semmi nem romlik el.

// Érdemes tudni, hogy:

// Nem szabványos JavaScript, csak V8-ban létezik (böngészőben Firefoxban nem), ezért a biztonságos változat Error.captureStackTrace?.(this, this.constructor) lenne, de Node-on ez nem számít.
// Sok mai kód már el is hagyja, mert a nyereség kicsi.

// Szóval nyugodtan kiveheted, ha egyszerűbbet szeretnél. A kód többi része pontosan ugyanúgy fog működni.
