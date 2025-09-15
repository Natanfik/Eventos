export const ok = (body) => {
    return {
        success: true,
        statusCode: 200,
        body: body
    }
}

export const notFound = () => {
    return {
        success: false,
        statusCode: 404,
        body: 'Not found'
    }
}

export const serverError = (err) => {
    return {
        success: false,
        statusCode: 500,
        body: { message: err?.message || 'Erro interno do servidor.' }
    }
}