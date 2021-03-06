class Adapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1';
        this.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
    }

    fetchFields() {
        return this.get(`${this.baseUrl}/maps`);
    }

    updateField(id, input, lat, lng, field_name) {
        return this.patch(`${this.baseUrl}/maps/${id}`, input, lat, lng, field_name);
    }

    sortField(id, lat, lng, field_name) {
        return this.patch(`${this.baseUrl}/maps/${id}`, lat, lng, field_name);
    }

    createNewMap(input, lat, lng, field_id, field_name) {
        return this.post(`${this.baseUrl}/maps`, input, lat, lng, field_id, field_name);
    }

    get(url) {
        return fetch(url).then(res => res.json());
    }

    post(url, input, lat, lng, field_name) {
        return fetch(url, {
            method: 'POST',
            headers: this.headers,
            id: this.id,
            body: JSON.stringify({
                field: input,
                map: {lat, lng, field_name},
              })
        }).then((response) => response.json())
       }

    patch(url, input, lat, lng, field_name) {
        return fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            id: this.id,
            body: JSON.stringify({
                field: input,
                map: {lat, lng, field_name},
              })
        }).then(res => res.json());
    }
}