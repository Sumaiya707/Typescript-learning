enum Status{
    draft,
    private,
    public
}
type article={
    id: number;
    title: string;
    status: Status;
};
const article1:article={
    id:1,
    title: "OKK",
    status: Status.private
};
const article2:article={
    id:2,
    title: "NOOOOOOOK",
    status: Status.public
};
console.log(article1);
