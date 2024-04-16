/*
  Warnings:

  - You are about to drop the column `Email` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `Username` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `AppointmentDepartment` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `AppointmentTime` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `PaymentStatus` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `Text` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `Amount` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `PaymentDate` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `Category` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `Speciality` on the `speciality` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `PhoneNumber` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Speciality` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Username` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appointmentDepartment` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appointmentTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentDate` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciality` to the `Speciality` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciality` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Admin_Email_key` ON `admin`;

-- DropIndex
DROP INDEX `Admin_Username_key` ON `admin`;

-- DropIndex
DROP INDEX `User_Email_key` ON `user`;

-- DropIndex
DROP INDEX `User_Username_key` ON `user`;

-- AlterTable
ALTER TABLE `admin` DROP COLUMN `Email`,
    DROP COLUMN `Password`,
    DROP COLUMN `Username`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `AppointmentDepartment`,
    DROP COLUMN `AppointmentTime`,
    DROP COLUMN `PaymentStatus`,
    DROP COLUMN `Status`,
    ADD COLUMN `appointmentDepartment` VARCHAR(191) NOT NULL,
    ADD COLUMN `appointmentTime` DATETIME(3) NOT NULL,
    ADD COLUMN `paymentStatus` ENUM('paid', 'unpaid') NOT NULL DEFAULT 'unpaid',
    ADD COLUMN `status` ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE `blog` DROP COLUMN `ImageUrl`,
    DROP COLUMN `Text`,
    DROP COLUMN `Title`,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `text` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `payments` DROP COLUMN `Amount`,
    DROP COLUMN `PaymentDate`,
    ADD COLUMN `amount` DOUBLE NOT NULL,
    ADD COLUMN `paymentDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `Category`,
    DROP COLUMN `ImageUrl`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `speciality` DROP COLUMN `Speciality`,
    ADD COLUMN `speciality` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `Email`,
    DROP COLUMN `FirstName`,
    DROP COLUMN `ImageUrl`,
    DROP COLUMN `LastName`,
    DROP COLUMN `Password`,
    DROP COLUMN `PhoneNumber`,
    DROP COLUMN `Speciality`,
    DROP COLUMN `Username`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `speciality` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Admin_username_key` ON `Admin`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Admin_email_key` ON `Admin`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
