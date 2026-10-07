---
title: "Campaign — 战役世界：实体与状态"
description: "TaleWorlds.CampaignSystem 本体所在的目录：战役世界的实体与读写它们的规则。目前 14 页。"
---
# Campaign — 战役世界：实体与状态

这个桶装的是 `TaleWorlds.CampaignSystem` **这个命名空间本身**，也就是战役世界本体：谁在里面、现在是什么状态、改状态的规则怎么走。1.4.7 里这个命名空间根目录下有 135 个 `.cs`。

对模组作者来说，它是"持久世界"这一层的入口。`Hero`、`Party`、`Clan`、`Kingdom`、`Town`、`ItemObject` 都在这里，它们是存档里真正存在的东西 —— 和战斗里那些转瞬即逝的对象是两种东西。判断一个字段该放哪，看的就是这条线：会进存档的进这里，只活在战斗场景里的去 [mission-ext](../mission-ext/)。

`CampaignSystem` 的子命名空间**不在这里**，它们按前缀规则被分到了别处：

| 子命名空间 | 落到哪个桶 |
| --- | --- |
| `CampaignBehaviors`、`ComponentInterfaces`、`GameComponents` | [campaign-ext](../campaign-ext/) |
| `Conversation`、`Issues`、`PartyBasedVisitables` | [campaign-ext](../campaign-ext/) |
| `SandBox` | [sandbox](../sandbox/) |
| `ViewModelCollection` | [viewmodel](../viewmodel/) |

界面上看到的那些 `*VM` 也因此不在这里 —— 它们是绑定层，不是状态层。

## 本区页面（14）

| 页面 | 讲的是什么 |
| --- | --- |
| [Campaign](./Campaign) | 战役世界单例：当前战役、时间推进、事件总线 |
| [CampaignGameStarter](./CampaignGameStarter) | 模块往上面挂战役行为的那道门 |
| [CampaignBehaviorBase](./CampaignBehaviorBase) | 挂在 `CampaignGameStarter` 上的东西的基类 |
| [CampaignEvents](./CampaignEvents) | 战役在其上触发事件的静态枢纽 |
| [IFaction](./IFaction) | `Clan` 与 `Kingdom` 背后的派系抽象 |
| [Hero](./Hero) | 战役层每个角色的活实例：把 `CharacterObject` 模板包装成有装备、技能、阵营与生死状态的人 |
| [CharacterObject](./CharacterObject) | 每一个能上场的个体（领主英雄或普通兵种）的统一身份对象，同时是兵种模板与升级链节点 |
| [Clan](./Clan) | 家族与阵营对象：族长、声望、等级与家臣缓存，对外以 `IFaction` 身份参与战争与外交 |
| [Kingdom](./Kingdom) | 王国级阵营的运行时对象：聚合 clan、领地、军队、政策与决策 |
| [Settlement](./Settlement) | 定居点（城镇、城堡、村庄、藏身处）的运行时对象：驻军、城墙、围攻与归属状态 |
| [MobileParty](./MobileParty) | 地图上一切可移动部队的总控：位置与导航、移动指令、队伍组件、名册与物品、士气食物工资 |
| [PartyBase](./PartyBase) | 战斗与交互实体的基类：承载部队或聚落的名册、物品、阵营、食物、治疗与战斗力 |
| [TroopRoster](./TroopRoster) | 兵种名册：成员/俘虏列表的增删改查、伤员与经验管理、缓存统计 |
| [MapEvent](./MapEvent) | 地图上一切交战（野战、攻城、劫掠、突围、封锁）的结算中枢与战利品分配 |

这 14 页分成三层读：

1. **入口层** —— `CampaignGameStarter` 挂一个 `CampaignBehaviorBase`，行为里挂 `CampaignEvents` 的处理器，改动通过 `Campaign` 落到世界；
2. **实体层** —— `Hero` / `CharacterObject` / `Clan` / `Kingdom` / `Settlement` / `IFaction`，是存档里真正存在的对象；
3. **承载层** —— `MobileParty` / `PartyBase` / `TroopRoster` / `MapEvent`，是部队怎么动、兵员怎么记、仗怎么打。

## 尚未收录

这个桶按命名空间规则应覆盖 **734** 个类型，现在有页面的是 **14** 个，其余 **720** 个没有页面。缺口最大的几族（括号内是该子命名空间下的待写类型数）：

| 子命名空间 | 待写 |
| --- | ---: |
| `TaleWorlds.CampaignSystem`（根） | 142 |
| `Actions` | 75 |
| `LogEntries` | 56 |
| `Party`（`PartyComponents` 等） | 33 |
| `GameState` | 32 |
| `CharacterDevelopment` | 30 |
| `Election` | 29 |
| `SceneInformationPopupTypes` | 28 |
| `MapNotificationTypes` | 27 |
| `CharacterCreationContent` | 25 |
| `GameMenus` | 25 |
| `Settlements`（`Buildings` / `Locations` / `Workshops`） | 20 |
| `MapEvents` | 16 |
| `BarterSystem.Barterables` | 15 |

其余缺口分布在 `CraftingSystem`、`Encounters`、`Encyclopedia`、`Incidents`、`Inventory`、`Map`、`Naval`、`SaveCompability`、`Siege`、`TournamentGames`、`TroopSuppliers`、`AgentOrigins`、`Handlers`、`Extensions`、`FastMode` 等子命名空间里。

量它的命令（在仓库根跑）：

```bash
node -e "const t=require('./tools/_verify/types-1.4.7.json').types,fs=require('fs');
const sub=['ComponentInterfaces','CampaignBehaviors','GameComponents','Conversation','Issues','ViewModelCollection'];
const camp=t.filter(x=>(x.namespace==='TaleWorlds.CampaignSystem'||x.namespace.startsWith('TaleWorlds.CampaignSystem.'))&&!sub.some(s=>x.namespace.includes('.'+s)));
const pages=new Set(fs.readdirSync('content/v1.4.7/zh/api/campaign').filter(f=>f.endsWith('.md')&&f!=='_index.md').map(f=>f.replace('.md','')));
console.log(camp.length, pages.size, camp.filter(x=>!pages.has(x.name)).length);"
```

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)