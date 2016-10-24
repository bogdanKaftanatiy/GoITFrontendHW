function Article() {
    Article.created = (new Date);
    Article.count++;

    Article.showStats = function () {
        return console.log('Всего: ' + this.count + ' Последняя: ' + this.created);
    }
}
Article.count = 0;

console.log(new Date);

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();