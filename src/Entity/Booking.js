module.exports = class {
    constructor() {
        this._jetpackId = null;
        this._startDate = null;
        this._endDate= null;
    }

    get jetpackId() {
        return this._jetpackId;
    }

    set jetpackId(value) {
        this._jetpackId = value;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = value;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = value;
    }

    toJson() {
        return {
            jetpack_id : this.jetpackId,
            start_date: this.startDate,
            end_date: this.endDate
        }
    }
}