---
title: "PerkHelper"
description: "把 perk（专长）的加成计入 ExplainedNumber，并按角色、部队、队长、城镇与总督等不同持有者判定 perk 是否生效。"
---

# PerkHelper

**命名空间：** `Helpers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class PerkHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`

## 概述

`PerkHelper` 是战役层处理 perk（专长）加成的中心工具。它回答两类问题：第一，「这个 perk 现在应该算在谁头上、算多少」——是算在角色自己、氏族领袖、队长，还是城镇的总督或氏族领袖身上；第二，「把这份加成累加进 `ExplainedNumber` 时，是按加法还是按因子」。它同时提供若干查询入口：某英雄有哪些总督 perk、某城镇的 perk 值来自谁、某英雄还能点几个 perk、某兵种用途下有哪些队长 perk。所有「加加成」的方法都返回一个 `bool`，表示该 perk 这次是否真的生效，而不是返回数值。

## 心智模型

把 `PerkHelper` 想成「perk 的角色分发器」。一个 `PerkObject` 自己不携带「谁拥有它」的信息，真正决定它是否生效的是它的 `PrimaryRole` / `SecondaryRole`（`Personal`、`ClanLeader`、`Captain`、`Governor`）以及持有者当前的状态。`PerkHelper` 的工作就是把这份角色信息和你传入的上下文（一个 `CharacterObject`、一支 `MobileParty`、一座 `Town`）对上：

- 对**角色**：`AddPerkBonusForCharacter` 只在 perk 属于 `Personal` 且角色自己点了它，或属于 `ClanLeader` 且角色所属氏族的领袖点了它时生效。
- 对**部队**：`AddPerkBonusForParty` 走 `party.HasPerk(...)`，把「谁持有」的判定交给部队自己。
- 对**队长**：`AddPerkBonusFromCaptain` 只看传入的队长角色是否点了该 perk。
- 对**城镇**：`AddPerkBonusForTown` 要求总督点了 perk 且其 `CurrentSettlement` 正是该城，加成直接取 `PrimaryBonus` / `SecondaryBonus`。
- 对**史诗 perk**：`AddEpicPerkBonusForCharacter` 系列把加成乘以「有效技能 - 需求技能」，所以技能越高收益越大。

写加成时统一走私有的 `AddToStat`：`EffectIncrementType.Add` 走 `Add`，`AddFactor` 走 `AddFactor`。还有一个容易忽略的细节：`CalculateContextualPerkData` 会在 `EffectEnvironment.NavalReduced` 且当前是海战时把加成砍半（`NavalBattleEnvironmentMultiplier = 0.5f`）。

因此正确的用法是：**先确认持有者关系，再让它往 `ExplainedNumber` 里写**，而不是自己读 `perk.PrimaryBonus` 硬算。

## 怎么用

### 什么时候调它

- 你在写一个 GameModel 或 CampaignBehavior，需要把某个 perk 的加成计入一项派生数值（速度、士气、产量、伤害等）时，用对应的 `AddPerkBonusForXxx`。
- 你需要列出「这座城/这个英雄受哪些 perk 影响」时，用 `GetGovernorPerksForHero`、`GetPerkValueForTown`、`GetHeroForTownPerk`。
- 你需要在洗点或重置技能时清掉某个技能的全部 perk，用 `ClearPerksForSkill`。

### 调之前要准备什么

- 先有一个非空的 `ExplainedNumber`（通常由调用方创建并向下传递），因为加成方法都是 `ref` 写入。
- 调用 `AddPerkBonusForParty` 时传对 `isPrimaryBonus`：它决定读 `PrimaryRole` 还是 `SecondaryRole`，也决定 `HasPerk` 是否要求次要角色。
- 调用 `AddPerkBonusForTown` 前要确认 `town.Governor` 存在且确实在该城；只有 `governor.CurrentSettlement == town.Settlement` 时才会生效。
- `ClearPerksForSkill` 会顺带刷新主部队名册版本并把英雄血量夹到上限，属于有副作用的操作。

### 调之后会发生什么

- 所有 `AddPerkBonusForXxx` 成功时返回 `true` 并就地修改 `ExplainedNumber`；失败时返回 `false` 且不改动。
- `ClearPerksForSkill` 会遍历 `PerkObject.All`，把属于该技能且已生效的 perk 逐个撤销（包括移除永久属性/专注加成），再把 perk 值置否。
- `GetGovernorEngineeringSkillEffectForHero` 在总督无工程技能时返回空文本与「No effect」，不会抛异常。

### 最容易踩的坑

- 返回 `bool` 不等于「加了非零值」：加成可能为 0，但方法仍返回 `true`。要判断是否生效，看返回值而不是看数值。
- `AddPerkBonusForCharacter` 对 `ClanLeader` 角色取的是 `character.HeroObject.Clan.Leader`，不是角色本人；如果角色不在氏族里就永远不生效。
- 史诗 perk 的乘数是「有效技能 - 需求技能」，技能不高于需求时整项为 0。
- 海战环境会通过 `NavalBattleEnvironmentMultiplier` 把部分 perk 加成砍半，同一 perk 在陆战与海战里数值不同。
- `ClearPerksForSkill` 只清指定技能；想清全部技能需要对每个 `SkillObject` 各调一次。

## 关键成员

- **`ClearPerksForSkill(Hero, SkillObject)`**（`PerkHelper.cs:17`）— 清除某英雄在某技能上的全部 perk，并撤销其永久加成。
- **`GetCaptainPerksForTroopUsages(TroopUsageFlags, BattleEnvironment)`**（`PerkHelper.cs:32`）— 按兵种用途与环境筛出所有队长 perk。
- **`PlayerHasAnyItemDonationPerk()`**（`PerkHelper.cs:50`）— 玩家部队是否拥有物品捐赠类 perk。
- **`AddPerkBonusForParty(PerkObject, MobileParty, bool, ref ExplainedNumber)`**（`PerkHelper.cs:57`）— 把 perk 加成写入部队的派生数值，使用部队当前战斗环境。
- **`AddPerkBonusForParty(PerkObject, BattleEnvironment, MobileParty, bool, ref ExplainedNumber)`**（`PerkHelper.cs:63`）— 同上，但显式指定战斗环境。
- **`AddPerkBonusForCharacter(PerkObject, BattleEnvironment, CharacterObject, bool, ref ExplainedNumber)`**（`PerkHelper.cs:78`）— 按 `Personal` 或 `ClanLeader` 角色关系把 perk 计入角色数值。
- **`AddEpicPerkBonusForCharacterWithSkill(PerkObject, BattleEnvironment, CharacterObject, int, bool, ref ExplainedNumber, int)`**（`PerkHelper.cs:107`）— 史诗 perk：加成乘以「有效技能 - 需求技能」。
- **`AddEpicPerkBonusForCharacter(PerkObject, BattleEnvironment, CharacterObject, SkillObject, bool, ref ExplainedNumber, int)`**（`PerkHelper.cs:121`）— 上一方法的便捷版，有效技能取自角色该技能值。
- **`AddPerkBonusFromCaptain(PerkObject, BattleEnvironment, CharacterObject, ref ExplainedNumber)`**（`PerkHelper.cs:127`）— 若传入的队长角色点了该 perk，则把加成计入。
- **`AddPerkBonusForTown(PerkObject, Town, bool, ref ExplainedNumber)`**（`PerkHelper.cs:142`）— 城镇 perk：要求总督在该城且点了 perk。
- **`GetHeroForTownPerk(PerkObject, Town)`**（`PerkHelper.cs:154`）— 返回为这座城镇提供该 perk 的英雄（氏族领袖或总督）。
- **`GetPerkValueForTown(PerkObject, Town)`**（`PerkHelper.cs:177`）— 判断这座城镇是否享有该 perk。
- **`GetGovernorPerksForHero(Hero)`**（`PerkHelper.cs:200`）— 列出该英雄已点、且角色为总督的 perk。
- **`GetGovernorEngineeringSkillEffectForHero(Hero)`**（`PerkHelper.cs:214`）— 返回总督工程技能对城镇项目的效果文本，无技能时返回「No effect」。
- **`AvailablePerkCountOfHero(Hero)`**（`PerkHelper.cs:247`）— 该英雄当前可点的 perk 数量（排除已点与互斥项）。

## 真实示例

```csharp
// 洗掉某英雄的全部侦察 perk：会撤销永久加成、刷新主部队名册版本并夹住血量。
Hero hero = Hero.MainHero;
PerkHelper.ClearPerksForSkill(hero, DefaultSkills.Scouting);

// 查询同一英雄的总督 perk 与可点数量。
List<PerkObject> governorPerks = PerkHelper.GetGovernorPerksForHero(hero);
int available = PerkHelper.AvailablePerkCountOfHero(hero);
InformationManager.DisplayMessage(new InformationMessage($"governorPerks={governorPerks.Count} available={available}"));
```

来源：`PerkHelper.cs:17`（`ClearPerksForSkill`）、`PerkHelper.cs:200`（`GetGovernorPerksForHero`）、`PerkHelper.cs:247`（`AvailablePerkCountOfHero`）。

## 参见

- ↔ [FeatHelper](../FeatHelper) — 同为角色成长加成工具，`FeatHelper` 管特性、本类管 perk
- ↔ [SkillHelper](../SkillHelper) — 技能值与效果描述的查询入口，`GetGovernorEngineeringSkillEffectForHero` 会转调它
- ↔ [TraitEffectHelper](../TraitEffectHelper) — 人格特质的效果处理，与 perk 加成常在同一 GameModel 里并列累加

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
