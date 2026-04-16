import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErros";

export default ({ 
    create: async (request: Request, response: Response) => {
        try {
        const {nome, idade, cpf, genero, gmail} = request.body;

        if(!nome || idade || cpf || gmail){
            response.status(400).json("Dados incompletos")
        }

        const aluno = await prisma.alunos.create({
            data: {
                nome,
                idade,
                cpf,
                gmail,
                genero
            },
        })
        return response.status(201).json(aluno);
    } catch (e) {
        return handleErrors(e, response)
    }
     },
    list: async (request: Request, response: Response) => { 
        try {
            const alunos = await prisma.alunos.findMany();
            return response.status(200).json(alunos);
        } catch (e) {
            return handleErrors(e, response)
        }
    },
    getById: async (request: Request, response: Response) => {
        try{
            const { id } = request.params;

            const aluno = await prisma.alunos.findUnique({
                where: {
                    id: +id
                }
            });

            if(!aluno) {
                return response.status(404).json("Aluno não encontrado")
            }

        return response.status(200).json(aluno);
        }catch(e) {
        return handleErrors(e, response);
        }
     },
    update: async (request: Request, response: Response) => { 
        try {
            const { id } = request.params;
            const {nome, idade, cpf, genero, gmail} = request.body;

            const aluno = await prisma.alunos.update({
                where: {
                    id: Number(id),
                },
                data: {
                    nome,
                    idade,
                    cpf,
                    gmail,
                    genero
                }
            });
            return response.status(200).json(aluno);
        }catch(e) {
            return handleErrors(e, response)
        }
    },
    delete: async (request: Request, response: Response) => { 
        try {
            const { id } = request.params;

            const aluno = await prisma.alunos.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.status(200).json(aluno);
        }catch(e){
            return handleErrors(e, response)
        }
     }
 }) 