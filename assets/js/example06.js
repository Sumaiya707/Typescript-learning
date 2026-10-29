var Status;
(function (Status) {
    Status[Status["draft"] = 0] = "draft";
    Status[Status["private"] = 1] = "private";
    Status[Status["public"] = 2] = "public";
})(Status || (Status = {}));
const article1 = {
    id: 1,
    title: "OKK",
    status: Status.private
};
const article2 = {
    id: 2,
    title: "NOOOOOOOK",
    status: Status.public
};
console.log(article1);
export {};
