//drizzle page for firebase
'use client'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';





const sql = neon("postgresql://neondb_owner:npg_0n3oKDXuzcwC@ep-shiny-bush-a8d6u385-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require");
const db = drizzle({ client: sql });
