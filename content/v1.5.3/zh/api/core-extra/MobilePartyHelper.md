---
title: "MobilePartyHelper"
description: "生成领主部队与氏族部队，并在部队名册、经验、战俘、速度与士气之间做批量计算。"
---

# MobilePartyHelper

**命名空间：** `Helpers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class MobilePartyHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/MobilePartyHelper.cs`

## 概述

`MobilePartyHelper` 是战役层围绕「移动部队」（`MobileParty`）的一组静态批处理工具。它既负责在世界上凭空生成一支部队（领主部队、氏族部队），也负责在已有部队里做「按名册聚合」的计算：挑技能最高的英雄、挑最强的兵、算部队还能吃多少经验、把共享经验按可升级余量分配、随机伤兵并判定死亡、按物品重量把部队速度压到目标值，以及判断士气是否还够发动攻击。它不持有状态，所有输入输出都是你传给它的部队、名册或英雄。

## 心智模型

把 `MobilePartyHelper` 想成「部队装配线 + 名册聚合器」，而不是一支部队本身。它解决的问题分三类：

第一类是**造部队**。`SpawnLordParty` 把一个英雄变成一支挂 `LordPartyComponent` 的领主部队；`CreateNewClanMobileParty` 在此之上处理「英雄原来在主部队或别的部队里」的搬迁细节，必要时先摘人、再选一个可用的生成坐标；`FillPartyManuallyAfterCreation` 则用 `PartyTemplateObject` 把新部队的人数填到指定规模。

第二类是**读名册**。`GetHeroWithHighestSkill`、`GetStrongestAndPriorTroops`、`CanTroopGainXp`、`GetMaximumXpAmountPartyCanGet`、`PartyAddSharedXp` 都是对 `TroopRoster` 的线性扫描与加权分配。理解它们的关键是记住经验按每个兵种的**可升级余量**（`UpgradeXpCost * elementNumber - elementXp`）加权，所以同一笔共享经验分到不同兵种上并不均等，已经吃满的兵种拿不到。

第三类是**世界交互的小判定**。`GetCurrentSettlementOfMobilePartyForAICalculation` 把「刚离开聚落」也当成还在聚落（AI 决策用）；`CanPartyAttackWithCurrentMorale` 只看 `Morale > 0f`；`GetPlayerPrisonersPlayerCanSell` 会剔除被玩家在部队界面锁定的战俘。

调用方通常是 CampaignBehavior、任务逻辑或 AI 行为：先造出部队，再决定往名册里塞什么。

## 怎么用

### 什么时候调它

- 需要在战役地图上「凭空出现」一支部队（剧情、任务、玩家创建氏族部队）时，用 `SpawnLordParty` 或 `CreateNewClanMobileParty`。
- 需要从一支部队里挑人（挑最强的 N 个、挑某技能最高的英雄、给主部队找技能顾问）时，用名册聚合的那几个方法。
- 需要把一笔经验、一批伤害或一次士气判定施加到整支部队时，用 `PartyAddSharedXp`、`WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath`、`CanPartyAttackWithCurrentMorale`。

### 调之前要准备什么

- 生成部队要求 `hero.CharacterObject` 有效；`CreateNewClanMobileParty` 会主动把英雄从原部队摘出来，所以调用后英雄的归属会改变。
- 名册聚合方法都要求传入的 `MobileParty` 已经初始化（`MemberRoster` 非空、`Party` 有效）。
- `WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath` 只处理**非英雄**兵种，英雄不会被伤到。

### 调之后会发生什么

- `SpawnLordParty` 会真正把一支部队注册进战役世界，并返回这个 `MobileParty`。
- `PartyAddSharedXp` 会就地修改名册 XP；`WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath` 会就地删除与致伤兵种，并通过 `out` 参数回传死亡人数。
- `TryMatchPartySpeedWithItemWeight` 会反复给部队加或减配重物品，直到速度接近目标或物品用尽，循环上限 200 次。

### 最容易踩的坑

- `SpawnLordParty` 的两个重载语义不同：传 `Settlement` 的版本在**城门位置**生成且半径为 0；传 `CampaignVec2` 的版本按你给的半径散布，且不绑定任何聚落。
- `GetStrongestAndPriorTroops` 会**先移除伤兵**，并把「不可在部队界面转移的英雄」优先塞进去，再按等级降序补人，因此返回结果并不等于「名册里等级最高的 N 个」。
- `GetMainPartySkillCounsellor` 在所有候选都不合格时会回退到主部队领袖，不会返回 null。
- `TryMatchPartySpeedWithItemWeight` 默认用 `DefaultItems.HardWood` 当配重；物品数量不够时可能达不到目标速度就退出。

## 关键成员

- **`SpawnLordParty(Hero, Settlement)`**（`MobilePartyHelper.cs:18`）— 在聚落门口生成一支领主部队，`spawnRadius` 为 0。
- **`SpawnLordParty(Hero, CampaignVec2, float)`**（`MobilePartyHelper.cs:24`）— 在指定坐标按给定半径生成领主部队，不绑定聚落。
- **`CreateNewClanMobileParty(Hero, Clan)`**（`MobilePartyHelper.cs:36`）— 为氏族创建新部队，并处理英雄从原部队迁出与生成坐标选择。
- **`GetHeroWithHighestSkill(MobileParty, SkillObject)`**（`MobilePartyHelper.cs:76`）— 返回部队中该技能值最高的英雄，找不到返回 null。
- **`GetStrongestAndPriorTroops(MobileParty, int, bool)`**（`MobilePartyHelper.cs:93`）— 去伤兵后按等级取最强兵，优先保留不可转移英雄。
- **`GetStrongestAndPriorTroops(FlattenedTroopRoster, int, bool)`**（`MobilePartyHelper.cs:101`）— 同上，但直接消费扁平化名册。
- **`GetMaximumXpAmountPartyCanGet(MobileParty)`**（`MobilePartyHelper.cs:135`）— 汇总全队所有兵种还能吸收的经验上限。
- **`PartyAddSharedXp(MobileParty, float)`**（`MobilePartyHelper.cs:152`）— 按可升级余量把一笔共享经验加权分给各兵种。
- **`WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(TroopRoster, int, float, out int)`**（`MobilePartyHelper.cs:182`）— 随机致伤若干非英雄，并按概率判定死亡人数。
- **`CanTroopGainXp(PartyBase, CharacterObject, out int)`**（`MobilePartyHelper.cs:203`）— 判断某兵种是否还能吃经验，并输出最大可吸收量。
- **`TryMatchPartySpeedWithItemWeight(MobileParty, float, ItemObject)`**（`MobilePartyHelper.cs:232`）— 通过增减配重物品把部队速度压到目标值附近。
- **`GetMainPartySkillCounsellor(SkillObject)`**（`MobilePartyHelper.cs:259`）— 主部队中该技能最高的未受伤英雄，兜底为主部队领袖。
- **`GetCurrentSettlementOfMobilePartyForAICalculation(MobileParty)`**（`MobilePartyHelper.cs:281`）— AI 视角的「当前聚落」，把刚离开的最近聚落也算进去。
- **`GetPlayerPrisonersPlayerCanSell()`**（`MobilePartyHelper.cs:296`）— 玩家战俘中未被锁定、可出售的那部分名册。
- **`FillPartyManuallyAfterCreation(MobileParty, PartyTemplateObject, int)`**（`MobilePartyHelper.cs:311`）— 清空名册并按模板把新部队填充到指定人数。
- **`CanPartyAttackWithCurrentMorale(MobileParty)`**（`MobilePartyHelper.cs:392`）— 士气是否为正，即是否允许发起攻击。

## 真实示例

```csharp
// 在聚落门口生成一支领主部队，再挑出其中侦察技能最高的英雄。
Hero hero = Hero.MainHero;
Settlement settlement = hero.CurrentSettlement;
MobileParty lordParty = MobilePartyHelper.SpawnLordParty(hero, settlement);

Hero scout = MobilePartyHelper.GetHeroWithHighestSkill(lordParty, DefaultSkills.Scouting);
if (scout != null && MobilePartyHelper.CanPartyAttackWithCurrentMorale(lordParty))
{
    MobilePartyHelper.PartyAddSharedXp(lordParty, 50f);
}
```

来源：`MobilePartyHelper.cs:18`（`SpawnLordParty`）、`MobilePartyHelper.cs:76`（`GetHeroWithHighestSkill`）、`MobilePartyHelper.cs:152`（`PartyAddSharedXp`）、`MobilePartyHelper.cs:392`（`CanPartyAttackWithCurrentMorale`）。

## 参见

- ↔ [AiHelper](../AiHelper) — 同为部队决策工具：`AiHelper` 管「怎么走」，本类管「怎么造、怎么算」
- ↔ [DistanceHelper](../DistanceHelper) — 部队移动距离计算，常与 `AiHelper` 的导航代价一起使用
- ↔ [GameModel](../GameModel) — 部队经验、速度与上限等数值最终由对应 GameModel 决定

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
