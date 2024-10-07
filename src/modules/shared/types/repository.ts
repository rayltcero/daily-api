export interface Repository<T> {
    create(data: T): Promise<T>;
    update(id: string, data: T): Promise<T>;
    delete(id: string): Promise<T>;
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
}