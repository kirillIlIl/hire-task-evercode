Решение тестового задания на NestJS.

Установить зависиомсти 
> npm install

Запуск приложения
> npm run start

Cервер слушает на 3001 порту.

Работоспобность тестировалась через CURL:

- Сгенерировать запись 
> curl -X POST http://localhost:3001/app/generate

- Получить запись по ID
> curl -X GET http://localhost:3001/app/id_of_record
