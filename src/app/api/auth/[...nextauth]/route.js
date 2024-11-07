import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { User } from "../../../models";
import connectMongo from "@/utils/db";

await connectMongo();

const authOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session, token }) {
            console.log("Session Callback - Token:", token); // Debugging
            console.log("Session Callback - Session:", session); // Debugging

            // Fetch user from the database based on token.sub
            const dbUser = await User.findOne({ googleId: token.sub });
            if (dbUser) {
                session.user.id = dbUser._id.toString();
                session.user.creditPoints = dbUser.creditPoints;
            }
            return session;
        },
        async signIn({ user, account, profile }) {
            const existingUser = await User.findOne({ googleId: user.id });
            if (!existingUser) {
                await User.create({
                    googleId: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    creditPoints: 100,
                });
            }
            return true;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};


export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

export const { GET, POST } = handlers
