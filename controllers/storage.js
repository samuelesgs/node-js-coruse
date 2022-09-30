const fs = require("fs")
const { matchedData } = require('express-validator');
const {storageModel} = require('../models');
const {handleHttpError} = require('../utils/handleError');
const {PUBLIC_URL} = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async(req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({data});
    } catch (error) {
        console.log(error);
     handleHttpError(res, "ERROR_GET_ITEM")
    }
};

const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await storageModel.findById(id);
        res.send({data});
    } catch (error) {
     handleHttpError(res, "ERROR_DETAIL_ITEM")
    }
};

const createItem = async (req, res) => { 
    const { body, file } = req;
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data})
};

const updateItem = (req, res) => { };

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await storageModel.findById(id);
        const {filename} = data;
        const filePath = `${MEDIA_PATH}/${filename}`;
        res.send({data});
    } catch (error) {
     handleHttpError(res, "ERROR_DETAIL_ITEM")
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem} 