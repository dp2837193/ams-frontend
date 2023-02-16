export class TestQuestion{
    id?: number;
    testId?: number;
    question?: string;
    type?: string;
    options?: Option[];
}

export class Option{
    label?: number;
    option?: string;
}