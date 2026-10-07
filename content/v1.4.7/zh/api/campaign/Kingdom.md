---
title: "Kingdom"
description: "王国级阵营的运行时对象，实现 IFaction，聚合 clan、领地、军队、政策与决策。"
---
# Kingdom

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class Kingdom : MBObjectBase, IFaction`
**基类：** `MBObjectBase`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Kingdom.cs`（声明见第 26 行）

## 概述

`Kingdom` 是战役中"王国级阵营"的运行时代表，实现 `IFaction` 接口，位于 `TaleWorlds.CampaignSystem` 模块。它聚合其下所有 `Clan`、领地（`Fiefs`/`Towns`/`Villages`/`Settlements`）、军队（`Armies`）、政策（`ActivePolicies`）与未决决策（`UnresolvedDecisions`），并维护与其他阵营的战争与同盟关系。它同时是 `MBObjectBase`（可存档、可被 `MBObjectManager` 管理），也是 `Settlement.MapFaction`、`MobileParty.MapFaction` 的常见返回值。

## 心智模型

把 `Kingdom` 想成"一个国家的档案柜"：它不直接存军队或英雄，而是通过缓存列表（`Clans`、`Heroes`、`Fiefs`、`Towns`、`Villages`、`Settlements`、`Armies`、`WarPartyComponents`）聚合下属对象，这些缓存由 `OnHeroAdded`/`OnFortificationAdded`/`OnWarPartyAdded` 等回调维护。战争与同盟关系不在本类里算，而是委托给 `FactionManager` 与 `IAllianceCampaignBehavior`；`FactionsAtWarWith`/`AlliedKingdoms` 需要显式调用 `UpdateFactionsAtWarWith`/`UpdateAlliedKingdoms` 刷新。它不负责单个英雄的状态机、不负责战斗模拟、不负责决策的具体效果（那些在 `Hero`、`MapEvent`、`KingdomDecision` 里）。实例由 `CreateKingdom` 创建、`InitializeKingdom` 初始化，被消灭后置 `IsEliminated`，可由 `ReactivateKingdom` 复活。

## 怎么用

拿实例的常见途径：`Kingdom.All` 遍历全部；`Clan.PlayerClan.Kingdom` 取玩家王国；`Settlement.MapFaction as Kingdom` 取定居点所属王国。

坑位提醒：

- `FactionsAtWarWith` 与 `AlliedKingdoms` 是缓存，关系变化后必须调 `UpdateFactionsAtWarWith`/`UpdateAlliedKingdoms` 才刷新（Kingdom.cs:737, Kingdom.cs:757）。
- `Leader` 是 `RulingClan.Leader` 的快捷方式，无统治 clan 时为 null（Kingdom.cs:471）。
- `IsMinorFaction`/`IsRebelClan`/`IsClan` 恒为 false，`IsMapFaction` 恒为 true——这些是给 `IFaction` 多态用的固定答案（Kingdom.cs:291, Kingdom.cs:502, Kingdom.cs:522, Kingdom.cs:532）。
- `AllParties` 每次访问都遍历 `Campaign.Current.MobileParties` 全表（Kingdom.cs:713），高频调用要考虑自行缓存。
- `AddDecision` 默认扣提议 clan 的影响力，`ignoreInfluenceCost=true` 可跳过（Kingdom.cs:997）。
- `Aggressiveness` 的 setter 被 clamp 到 0–100 且为 internal（Kingdom.cs:699）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Name` / `InformalName` / `EncyclopediaText` / `EncyclopediaTitle` / `EncyclopediaRulerTitle` | 名称与百科文本；`InformalName` 用于百科链接显示。Kingdom.cs:221, Kingdom.cs:227, Kingdom.cs:233, Kingdom.cs:239, Kingdom.cs:245 |
| `EncyclopediaLink` / `EncyclopediaLinkWithName` | 百科链接与带名链接。Kingdom.cs:249, Kingdom.cs:259 |
| `UnresolvedDecisions` | 未决决策列表（缓存）。Kingdom.cs:269 |
| `Culture` | 所属文化，决定基础部队与默认政策。Kingdom.cs:281 |
| `InitialHomeSettlement` | 初始主城。Kingdom.cs:287 |
| `IsMapFaction` / `IsMinorFaction` / `IsRebelClan` / `IsClan` | `IFaction` 多态固定答案：`IsMapFaction` 恒 true，其余恒 false。Kingdom.cs:291, Kingdom.cs:502, Kingdom.cs:522, Kingdom.cs:532 |
| `HasNavalNavigationCapability` | 文化默认队伍模板是否含船体。Kingdom.cs:301 |
| `Color` / `Color2` / `PrimaryBannerColor` / `SecondaryBannerColor` | 阵营颜色与旗帜颜色。Kingdom.cs:313, Kingdom.cs:319, Kingdom.cs:325, Kingdom.cs:331 |
| `MainHeroCrimeRating` | 主角犯罪评级。Kingdom.cs:337 |
| `FactionsAtWarWith` / `AlliedKingdoms` | 交战/同盟阵营缓存，需显式调 `UpdateFactionsAtWarWith`/`UpdateAlliedKingdoms` 刷新。Kingdom.cs:341, Kingdom.cs:351 |
| `Fiefs` / `Towns` / `Villages` / `Settlements` | 领地缓存列表。Kingdom.cs:361, Kingdom.cs:371, Kingdom.cs:381, Kingdom.cs:391 |
| `Heroes` / `AliveLords` / `DeadLords` | 英雄缓存，按存活/死亡分列。Kingdom.cs:401, Kingdom.cs:411, Kingdom.cs:421 |
| `WarPartyComponents` | 战团组件缓存。Kingdom.cs:431 |
| `DailyCrimeRatingChange` / `DailyCrimeRatingChangeExplained` | 每日犯罪评级变化（经 `CrimeModel`）。Kingdom.cs:441, Kingdom.cs:451 |
| `BasicTroop` | 文化基础部队。Kingdom.cs:461 |
| `Leader` | `RulingClan.Leader` 的快捷方式；无统治 clan 时为 null。Kingdom.cs:471 |
| `Banner` | 阵营旗帜。Kingdom.cs:488 |
| `IsBanditFaction` / `IsOutlaw` | 由统治 clan 的对应标记决定。Kingdom.cs:492, Kingdom.cs:542 |
| `Clans` / `RulingClan` | 下属 clan 列表与统治 clan。Kingdom.cs:552, Kingdom.cs:563 |
| `Armies` | 军队列表。Kingdom.cs:577 |
| `GetName` / `ToString` | 名称访问器。Kingdom.cs:586, Kingdom.cs:592 |
| `CurrentTotalStrength` | 所有下属 clan 当前战力之和。Kingdom.cs:599 |
| `FactionMidSettlement` / `DistanceToClosestNonAllyFortification` | 阵营中心定居点与最近非盟友防御工事距离（缓存）。Kingdom.cs:615, Kingdom.cs:625 |
| `ActivePolicies` | 当前生效政策列表。Kingdom.cs:640 |
| `All`（static） | 全部王国，即 `Campaign.Current.Kingdoms`。Kingdom.cs:650 |
| `LastKingdomDecisionConclusionDate` | 最近一次决策结论日期。Kingdom.cs:662 |
| `IsEliminated` | 是否已被消灭。Kingdom.cs:666 |
| `LastMercenaryOfferTime` | 最近一次雇佣兵报价时间。Kingdom.cs:678 |
| `MapFaction` | 返回 `this`（王国即地图阵营）。Kingdom.cs:682 |
| `NotAttackableByPlayerUntilTime` | 玩家不可攻击该阵营的截止时间。Kingdom.cs:694 |
| `Aggressiveness` | 侵略性（0–100，setter 为 internal）。Kingdom.cs:699 |
| `AllParties` | 遍历 `Campaign.Current.MobileParties` 全表筛选本阵营队伍。Kingdom.cs:713 |
| `MercenaryWallet` | 雇佣兵钱包（setter 为 internal）。Kingdom.cs:734 |
| `UpdateFactionsAtWarWith` / `UpdateAlliedKingdoms` | 刷新交战/同盟缓存。Kingdom.cs:737, Kingdom.cs:757 |
| `TributeWallet` / `KingdomBudgetWallet` / `CallToWarWallet` | 贡金/预算/征召钱包。Kingdom.cs:773, Kingdom.cs:788, Kingdom.cs:803 |
| 构造函数 | 初始化缓存列表与随机政治停滞值。Kingdom.cs:816 |
| `CreateKingdom`（static） | 按 `StringId` 创建并注册王国。Kingdom.cs:833 |
| `InitializeKingdom` | 完整初始化：名称、文化、旗帜、颜色、百科、初始政策。Kingdom.cs:843 |
| `ChangeKingdomName` | 改名称与非正式名。Kingdom.cs:880 |
| `OnHeroChangedState` | 英雄状态变化时维护存活/死亡领主缓存。Kingdom.cs:887 |
| `IsAllyWith` / `IsAtWarWith` / `IsAtConstantWarWith` / `GetStanceWith` | 外交关系查询，委托 `FactionManager`。Kingdom.cs:936, Kingdom.cs:942, Kingdom.cs:948, Kingdom.cs:954 |
| `CreateArmy` | 以指定领袖与目标定居点创建军队。Kingdom.cs:972 |
| `AddDecision` / `RemoveDecision` / `OnKingdomDecisionConcluded` | 决策管理；`AddDecision` 默认扣影响力。Kingdom.cs:997, Kingdom.cs:1025, Kingdom.cs:1031 |
| `AddPolicy` / `RemovePolicy` / `HasPolicy` | 政策管理。Kingdom.cs:1037, Kingdom.cs:1046, Kingdom.cs:1055 |
| `Deserialize` | 存档反序列化入口。Kingdom.cs:1068 |
| `OnFortificationAdded` / `OnFortificationRemoved` | 领地增减时维护缓存并重算中心。Kingdom.cs:1161, Kingdom.cs:1178 |
| `OnHeroAdded` / `OnHeroRemoved` | 英雄增减时维护缓存。Kingdom.cs:1209, Kingdom.cs:1219 |
| `OnWarPartyAdded` / `OnWarPartyRemoved` | 战团增减时维护缓存。Kingdom.cs:1251, Kingdom.cs:1257 |
| `CalculateMidSettlement` | 重算阵营中心定居点。Kingdom.cs:1263 |
| `ReactivateKingdom` | 复活已消灭的王国。Kingdom.cs:1272 |
| `PoliticalStagnation` | 政治停滞值（可存档字段）。Kingdom.cs:1363 |

## 真实示例

```csharp
foreach (Kingdom kingdom in Kingdom.All)
{
    if (!kingdom.IsEliminated)
    {
        kingdom.UpdateFactionsAtWarWith();
        kingdom.UpdateAlliedKingdoms();
    }
}
```

## 参见

- [Clan](../Clan) — 王国下属的 clan
- [Hero](../Hero) — 王国的领主与英雄
- [Settlement](../Settlement) — 王国的领地
- [MobileParty](../MobileParty) — 王国所属的队伍
- [Campaign](../Campaign) — 提供 `Kingdoms` 集合与当前战役上下文
- [MBObjectBase](../../campaign-ext/MBObjectBase) — 存档对象基类

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
