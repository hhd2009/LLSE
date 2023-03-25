ll.registerPlugin(
	"死亡传送",
	"§f输入§e/back§f以回到§e死亡点§f",
	[1, 2, 0],
	{
		"Author": "寒冬利刃"
	}
);

mc.listen("onServerStarted", () => {
    const cmd = mc.newCommand("death_tp", "death_tp", PermType.Any);
    cmd.setAlias("死亡传送");
    cmd.setAlias("dback");
    cmd.setAlias("back");
    cmd.setCallback((cmd, ori, out, res) => {
        try{
            if(!!ori.player.uuid){
            ori.player.teleport(ori.player.lastDeathPos);
            logger.info(`§e${ori.player.realName}§f已传送至死亡点。`);
            };
        }
        catch{
            logger.info('运行对象不正确！')
        };
    });
    cmd.overload();
    cmd.setup();
    logger.info('§e注册成功！§f');
});

mc.listen("onRespawn", (pl) => {
    pl.tell('§f输入§e/back§f以回到§e死亡点§f。');
});