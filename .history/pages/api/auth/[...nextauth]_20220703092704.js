import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitlabProvider from 'next-auth/providers/gitlab'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GitlabProvider({
      clientId: process.env.GITLAB_ID,
      clientSecret: process.env.GITLAB_SECRET
    })
  ],
 /*  adapter: MongoDBAdapter(clientPromise) */
})