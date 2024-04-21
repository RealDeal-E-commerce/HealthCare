const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create Multiple Specialties
    const specialties = await prisma.speciality.createMany({
        data: [
            { speciality: "Cardiology" },
            { speciality: "Dermatology" },
            { speciality: "Neurology" },
            { speciality: "Pediatrics" },
            { speciality: "Orthopedics" }
        ],
    });

    // Create Doctors with Different Specialties
    const doctorJane = await prisma.user.create({
        data: {
            firstName: "Jane",
            lastName: "Doe",
            email: "jane.doe@hospital.com",
            password: "123456",
            phoneNumber: "1234567890",
            imageUrl: "http://example.com/image_jane.jpg",
            role: "doctor",
            specialityId: 1, // Cardiology
            doctor: {
                create: {}
            }
        }
    });

    const doctorAlice = await prisma.user.create({
        data: {
            firstName: "Alice",
            lastName: "Johnson",
            email: "alice.johnson@hospital.com",
            password: "securepassword",
            phoneNumber: "1234567891",
            imageUrl: "http://example.com/image_alice.jpg",
            role: "doctor",
            specialityId: 2, // Dermatology
            doctor: {
                create: {}
            }
        }
    });

    const doctorBob = await prisma.user.create({
        data: {
            firstName: "Bob",
            lastName: "Smith",
            email: "bob.smith@hospital.com",
            password: "password123",
            phoneNumber: "1234567892",
            imageUrl: "http://example.com/image_bob.jpg",
            role: "doctor",
            specialityId: 3, // Neurology
            doctor: {
                create: {}
            }
        }
    });

    // Create Normal Users
    await prisma.user.createMany({
        data: [
            {
                firstName: "John",
                lastName: "Smith",
                email: "john.smith@example.com",
                password: "password123",
                phoneNumber: "9876543210",
                imageUrl: "http://example.com/image_john.jpg",
                role: "user"
            },
            {
                firstName: "Emily",
                lastName: "Roe",
                email: "emily.roe@example.com",
                password: "emilypass",
                phoneNumber: "9876543211",
                imageUrl: "http://example.com/image_emily.jpg",
                role: "user"
            },
            {
                firstName: "Michael",
                lastName: "Brown",
                email: "michael.brown@example.com",
                password: "mike123",
                phoneNumber: "9876543212",
                imageUrl: "http://example.com/image_michael.jpg",
                role: "user"
            },
            {
                firstName: "Sarah",
                lastName: "Wilson",
                email: "sarah.wilson@example.com",
                password: "sarahpass",
                phoneNumber: "9876543213",
                imageUrl: "http://example.com/image_sarah.jpg",
                role: "user"
            },
            {
                firstName: "David",
                lastName: "Moore",
                email: "david.moore@example.com",
                password: "dave123",
                phoneNumber: "9876543214",
                imageUrl: "http://example.com/image_david.jpg",
                role: "user"
            }
        ],
    });

    console.log("Seed data created successfully!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
