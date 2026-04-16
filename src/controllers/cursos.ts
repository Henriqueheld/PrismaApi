import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErros";

export default ({ 
    create: async (request: Request, response: Response) => {
        try {
        const {nome, descrição, duracao,} = request.body;

        if(!nome || descrição || duracao ){
            response.status(400).json("Dados incompletos")
        }

        const curso = await prisma.cursos.create({
            data: {
                nome,
                descrição,
                duracao,
            },
        })
        return response.status(201).json(curso);
    } catch (e) {
        return handleErrors(e, response)
    }
     },
    list: async (request: Request, response: Response) => { 
        try {
            const cursos = await prisma.cursos.findMany();
            return response.status(200).json(cursos);
        } catch (e) {
            return handleErrors(e, response)
        }
    },
    getById: async (request: Request, response: Response) => {
        try{
            const { id } = request.params;

            const curso = await prisma.cursos.findUnique({
                where: {
                    id: +id
                }
            });

            if(!curso) {
                return response.status(404).json("Curso não encontrado")
            }

        return response.status(200).json(curso);
        }catch(e) {
        return handleErrors(e, response);
        }
     },
    update: async (request: Request, response: Response) => { 
        try {
            const { id } = request.params;
            const {nome, descrição, duracao} = request.body;

            const curso = await prisma.cursos.update({
                where: {
                    id: Number(id),
                },
                data: {
                    nome,
                    descrição,
                    duracao,
                }
            });
            return response.status(200).json(curso);
        }catch(e) {
            return handleErrors(e, response)
        }
    },
    delete: async (request: Request, response: Response) => { 
        try {
            const { id } = request.params;

            const curso = await prisma.cursos.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.status(200).json(curso);
        }catch(e){
            return handleErrors(e, response)
        }
     }
 }) 