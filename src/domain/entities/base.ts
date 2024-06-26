export type BaseEntityParams = {
	id: string;
	createTime: Date;
	updateTime: Date;
};

export abstract class BaseEntity {
	protected readonly _id: string;
	protected readonly _createTime: Date;
	protected readonly _updateTime: Date;
	protected constructor(params: BaseEntityParams) {
		this._id = params.id;
		this._createTime = params.createTime;
		this._updateTime = params.updateTime;
	}

	get id(): string {
		return this._id;
	}

	get createTime(): Date {
		return this._createTime;
	}
	get updateTime(): Date {
		return this._updateTime;
	}
}
