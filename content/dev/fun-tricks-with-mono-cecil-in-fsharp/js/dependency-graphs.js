var style = [
    {
        selector: 'node',
        style: {
            'content': 'data(name)',
            'text-opacity': 0.5,
            'text-valign': 'center',
            'text-halign': 'right',
            'background-color': '#11479e'
        }
    },

    {
        selector: 'edge',
        style: {
            'curve-style': 'bezier',
            'width': 5,
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
            'content': 'data(name)',
        }
    }
];

window.onload = function () {
    $(document).ready(function () {
        var cyAddress = cytoscape({
            container: document.getElementById('graph-container-address'), // container to render in
            style: style,
            elements: [{ "group": "nodes", "data": { "id": "43229c14-151a-4b2d-bded-152cdb4c00b0", "name": "Country", "source": "", "target": "" } }, { "group": "edges", "data": { "id": "3f5ef028-0630-40b3-93dc-49a21e2092c4", "name": "Country", "source": "7b888fb7-60fb-4a71-a6dc-111d9b58b272", "target": "43229c14-151a-4b2d-bded-152cdb4c00b0" } }, { "group": "nodes", "data": { "id": "7b888fb7-60fb-4a71-a6dc-111d9b58b272", "name": "StateProvince", "source": "", "target": "" } }, { "group": "edges", "data": { "id": "e214a6ab-c0c8-46ec-92e4-1136ad91f831", "name": "StateProvince", "source": "efac72bd-3f52-4a83-ade7-3fb813621606", "target": "7b888fb7-60fb-4a71-a6dc-111d9b58b272" } }, { "group": "nodes", "data": { "id": "46eea0e8-f520-4fb9-a41e-6eb2fee9b253", "name": "Country", "source": "", "target": "" } }, { "group": "edges", "data": { "id": "aba64e2f-a9f4-4783-8bf2-636187f731cf", "name": "Country", "source": "efac72bd-3f52-4a83-ade7-3fb813621606", "target": "46eea0e8-f520-4fb9-a41e-6eb2fee9b253" } }, { "group": "nodes", "data": { "id": "efac72bd-3f52-4a83-ade7-3fb813621606", "name": "Address", "source": "", "target": "" } }],
            layout: { 
                name: 'dagre', 
                spacingFactor: 1.5,
                nodeSep: 125
            }
        });

        var cyCustomer = cytoscape({
            container: document.getElementById('graph-container-customer'), // container to render in
            style: style,
            elements: [{"group":"nodes","data":{"id":"34ee8ee6-ba77-48dd-9f25-c25a06f22e44","name":"Country","source":"","target":""}},{"group":"edges","data":{"id":"df33ce50-d029-4b02-b4ee-1e9cd77d1337","name":"Country","source":"87df2a4b-b766-454b-9973-8f09a0266a56","target":"34ee8ee6-ba77-48dd-9f25-c25a06f22e44"}},{"group":"nodes","data":{"id":"87df2a4b-b766-454b-9973-8f09a0266a56","name":"StateProvince","source":"","target":""}},{"group":"edges","data":{"id":"2eef9b12-2525-4bc1-be8f-4e2bb5b0eb01","name":"StateProvince","source":"cb52cdf4-a03a-4a88-9861-6c72a3ba2011","target":"87df2a4b-b766-454b-9973-8f09a0266a56"}},{"group":"nodes","data":{"id":"9b4abf99-50cd-46e1-bee2-b7db545c5a6f","name":"Country","source":"","target":""}},{"group":"edges","data":{"id":"41c71aa5-510f-4838-aa11-e4ea9e0653d4","name":"Country","source":"cb52cdf4-a03a-4a88-9861-6c72a3ba2011","target":"9b4abf99-50cd-46e1-bee2-b7db545c5a6f"}},{"group":"nodes","data":{"id":"cb52cdf4-a03a-4a88-9861-6c72a3ba2011","name":"Address","source":"","target":""}},{"group":"edges","data":{"id":"f2c600ec-5a83-42ee-a419-5323d0d4bffc","name":"ShippingAddress","source":"9ac7dced-1cf8-4e5e-ab67-8540434c4a4d","target":"cb52cdf4-a03a-4a88-9861-6c72a3ba2011"}},{"group":"nodes","data":{"id":"6483be52-be3e-4688-a260-424a293c6f8b","name":"Country","source":"","target":""}},{"group":"edges","data":{"id":"67dee479-67ae-44ac-9aed-61040ad2de4a","name":"Country","source":"64cdb30e-cd28-47a6-91af-3e1938a3d0db","target":"6483be52-be3e-4688-a260-424a293c6f8b"}},{"group":"nodes","data":{"id":"64cdb30e-cd28-47a6-91af-3e1938a3d0db","name":"StateProvince","source":"","target":""}},{"group":"edges","data":{"id":"1ff381d9-ac20-4ed9-816c-b2c77f59f953","name":"StateProvince","source":"2e79cdff-2432-478e-87b2-d1201caa727d","target":"64cdb30e-cd28-47a6-91af-3e1938a3d0db"}},{"group":"nodes","data":{"id":"c1ee77e9-9a5a-4e4d-a436-072659cd5126","name":"Country","source":"","target":""}},{"group":"edges","data":{"id":"e8a4ccde-fd53-47f1-b93b-2c2258406c6e","name":"Country","source":"2e79cdff-2432-478e-87b2-d1201caa727d","target":"c1ee77e9-9a5a-4e4d-a436-072659cd5126"}},{"group":"nodes","data":{"id":"2e79cdff-2432-478e-87b2-d1201caa727d","name":"Address","source":"","target":""}},{"group":"edges","data":{"id":"2eea90fb-c8e2-49ce-bfd5-a0b66b7a0116","name":"BillingAddress","source":"9ac7dced-1cf8-4e5e-ab67-8540434c4a4d","target":"2e79cdff-2432-478e-87b2-d1201caa727d"}},{"group":"nodes","data":{"id":"87e5b6bb-e892-42e9-b631-9df8f035a926","name":"PasswordFormat","source":"","target":""}},{"group":"edges","data":{"id":"967ff171-ff49-48b2-ae84-0360167687d9","name":"PasswordFormat","source":"9ac7dced-1cf8-4e5e-ab67-8540434c4a4d","target":"87e5b6bb-e892-42e9-b631-9df8f035a926"}},{"group":"nodes","data":{"id":"9ac7dced-1cf8-4e5e-ab67-8540434c4a4d","name":"Customer","source":"","target":""}}],
            layout: { 
                name: 'dagre', 
                spacingFactor: 1.5,
                nodeSep: 150
            }
        });
    });
};