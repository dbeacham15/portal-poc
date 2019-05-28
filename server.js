const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const port = process.env.PORT || 5000;
const componentDirectory = './client/src/core-components';

const getSingleComponent = (cd) => {
    const parsedId = cd.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const dir = `${componentDirectory}/${parsedId}`;
    const configFile = `${dir}/config.yml`;
    const config = yaml.safeLoad(fs.readFileSync(configFile, 'utf-8'));
    const readmeFile = `${dir}/README.md`;
    const readme = fs.readFileSync(readmeFile, 'utf-8');

    return {
        config,
        readme
    };
};

const getComponents = async () => {
    const directorySync = fs.readdirSync(componentDirectory);

    components = directorySync.map(node => getSingleComponent(node));

    return components;
}

app.get('/api/component/:id', async (req, res) => {
    const id = req.params.id;

    res.send({
        component: getSingleComponent(id)
    });
});

app.get('/api/components', async (req, res) => {
    const components = await getComponents();

    res.send({
        components
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));