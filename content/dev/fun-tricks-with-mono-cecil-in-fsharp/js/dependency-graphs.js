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

        var cyProduct = cytoscape({
            container: document.getElementById('graph-container-product'), // container to render in
            style: style,
            elements: [{"group":"nodes","data":{"id":"3faab13c-6b7c-41b4-9866-0f1de1fb3b9f","name":"RecurringProductCyclePeriod","source":"","target":""}},{"group":"edges","data":{"id":"21594562-e19b-40dc-8fb7-7c81b9f48155","name":"RecurringCyclePeriod","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"3faab13c-6b7c-41b4-9866-0f1de1fb3b9f"}},{"group":"nodes","data":{"id":"e9f1b81a-b7e8-4c33-9c04-de3522186a8b","name":"ManageInventoryMethod","source":"","target":""}},{"group":"edges","data":{"id":"824f5c73-a454-4ef8-9319-dba4495156d6","name":"ManageInventoryMethod","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"e9f1b81a-b7e8-4c33-9c04-de3522186a8b"}},{"group":"nodes","data":{"id":"5a9ba102-a3f2-49e7-830d-bc3f09049a07","name":"LowStockActivity","source":"","target":""}},{"group":"edges","data":{"id":"bd76af8a-813f-4122-82b5-a46d40e992b7","name":"LowStockActivity","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"5a9ba102-a3f2-49e7-830d-bc3f09049a07"}},{"group":"nodes","data":{"id":"c54b29f0-c46d-47ab-8a41-e48b3d53ccb4","name":"GiftCardType","source":"","target":""}},{"group":"edges","data":{"id":"db56655c-29de-4a09-a50c-9564f29122de","name":"GiftCardType","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"c54b29f0-c46d-47ab-8a41-e48b3d53ccb4"}},{"group":"nodes","data":{"id":"85587a03-2551-4edd-8de1-e9027c8e4443","name":"DownloadActivationType","source":"","target":""}},{"group":"edges","data":{"id":"22e3cffb-b987-466b-b2a8-f3cca7d2a493","name":"DownloadActivationType","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"85587a03-2551-4edd-8de1-e9027c8e4443"}},{"group":"nodes","data":{"id":"b8e6dd0e-4e09-4d96-8f0d-aee08f0793bb","name":"BackorderMode","source":"","target":""}},{"group":"edges","data":{"id":"eee15a87-5fe4-4725-9907-5336173262ac","name":"BackorderMode","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"b8e6dd0e-4e09-4d96-8f0d-aee08f0793bb"}},{"group":"nodes","data":{"id":"3a457f91-3934-43f3-bf97-61a299ee1869","name":"ProductType","source":"","target":""}},{"group":"edges","data":{"id":"f55ac148-6323-4549-964e-5c0e0fa730f6","name":"ProductType","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"3a457f91-3934-43f3-bf97-61a299ee1869"}},{"group":"nodes","data":{"id":"f6abf6e1-0f21-4336-9724-f66244e1a01f","name":"Country","source":"","target":""}},{"group":"edges","data":{"id":"210fc839-eb91-46a0-9be2-d47345a46197","name":"CountryOfOrigin","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"f6abf6e1-0f21-4336-9724-f66244e1a01f"}},{"group":"nodes","data":{"id":"0281cc46-a5d0-4a01-9cf8-321106339895","name":"QuantityUnit","source":"","target":""}},{"group":"edges","data":{"id":"c1e956cc-7547-4e68-a055-3e4c2e3b0224","name":"QuantityUnit","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"0281cc46-a5d0-4a01-9cf8-321106339895"}},{"group":"nodes","data":{"id":"078ae76c-8d5a-4da6-97ea-34166a35ff95","name":"DeliveryTime","source":"","target":""}},{"group":"edges","data":{"id":"e7814a8f-c035-48fe-b3db-6e4632ef7462","name":"DeliveryTime","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"078ae76c-8d5a-4da6-97ea-34166a35ff95"}},{"group":"nodes","data":{"id":"d0d4481d-4ef2-4b67-8f5f-eb4c839cdd65","name":"QuantityControlType","source":"","target":""}},{"group":"edges","data":{"id":"637b62be-29a9-4756-b579-88f63224e520","name":"QuantiyControlType","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"d0d4481d-4ef2-4b67-8f5f-eb4c839cdd65"}},{"group":"nodes","data":{"id":"ff5e4b6e-6cfb-47b6-bdda-3d6adabe9619","name":"MediaStorage","source":"","target":""}},{"group":"edges","data":{"id":"81cdd85a-6171-422d-a0f9-9c45324e4c4c","name":"MediaStorage","source":"048ecce2-9e3a-4c6c-89cc-1dee37a84c13","target":"ff5e4b6e-6cfb-47b6-bdda-3d6adabe9619"}},{"group":"nodes","data":{"id":"048ecce2-9e3a-4c6c-89cc-1dee37a84c13","name":"Download","source":"","target":""}},{"group":"edges","data":{"id":"cc0eb2f5-4151-48f8-8ab2-73320224679c","name":"SampleDownload","source":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","target":"048ecce2-9e3a-4c6c-89cc-1dee37a84c13"}},{"group":"nodes","data":{"id":"286159b3-ee2c-44e4-ad69-e3d8520b6b2f","name":"Product","source":"","target":""}}],
            layout: { 
                name: 'dagre', 
                spacingFactor: 1.5,
                nodeSep: 150
            }
        });
    });
};