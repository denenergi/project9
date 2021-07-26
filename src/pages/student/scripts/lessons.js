import {timeSlots, lessons}  from '../scripts/constants';
console.log('lessons form');
const who = JSON.parse(localStorage.getItem('who'))

const logins = localStorage.getItem('students');

const type_01 = document.querySelector('#type_01');
const type_02 = document.querySelector('#type_02');
const type_03 = document.querySelector('#type_03');
const type_04 = document.querySelector('#type_04');
const time_01 = document.querySelector('#time_01');
const time_02 = document.querySelector('#time_02');
const time_03 = document.querySelector('#time_03');
const time_04 = document.querySelector('#time_04');
const time_05 = document.querySelector('#time_05');
const time_06 = document.querySelector('#time_06');
const lesson_choose = document.querySelector('#lesson_choose');
const d = {
    name: '',
    time: 12,
    title: 'Новый урок',
    duration: 120,
    tomorrow: false,
};
time_01.addEventListener('click', function(){
   d.time = timeSlots.time_01;
   d.tomorrow = false;
});
time_02.addEventListener('click', function(){
    d.time = timeSlots.time_02;
    d.tomorrow = false;
 });
 time_03.addEventListener('click', function(){
    d.time = timeSlots.time_03;
    d.tomorrow = false;
 });
 time_04.addEventListener('click', function(){
    d.time = timeSlots.time_04;
    d.tomorrow = true;
 });
 time_05.addEventListener('click', function(){
    d.time = timeSlots.time_05;
    d.tomorrow = true;
 });
 time_06.addEventListener('click', function(){
    d.time = timeSlots.time_06;
    d.tomorrow = true;
 });
 type_01.addEventListener('click', function(){
    d.title = lessons.type_01.title;
    d.duration = lessons.type_01.duration;
 });
 type_02.addEventListener('click', function(){
    d.title = lessons.type_02.title;
    d.duration = lessons.type_02.duration;
 });
 type_03.addEventListener('click', function(){
    d.title = lessons.type_03.title;
    d.duration = lessons.type_03.duration;
 });
  type_04.addEventListener('click', function(){
    d.title = lessons.type_04.title;
    d.duration = lessons.type_04.duration;
 });
d.name = JSON.parse(logins)[who].name;
lesson_choose.addEventListener('click', function(){
    const lessons = JSON.parse(localStorage.getItem('lessons')) || [];
    localStorage.setItem('lessons', JSON.stringify([{
        ...d
    }, ...lessons]));
 });