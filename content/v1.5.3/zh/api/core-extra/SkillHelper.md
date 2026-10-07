---
title: "SkillHelper"
description: "把技能效果折算成可解释数值的静态工具集：按等级、队伍、城镇或具体角色取技能值，并生成对应的显示文本。"
---

# SkillHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SkillHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## 概述

本类解决一个具体问题：`SkillEffect` 声明的加成到底该加多少进某个 `ExplainedNumber`。它提供四条取值路径——按技能等级直接算、按队伍里实际担任该角色的人算、按城镇的氏族首领或总督算、按指定角色算——最后都汇流到同一个私有方法 `AddToStat`，由它区分 `Add` 与 `AddFactor` 两种增量类型分别落账。

## 心智模型

把 SkillHelper 想成「技能效果 → 数值」的翻译层。`SkillEffect` 只声明「哪个角色、影响哪个技能、增量类型是什么」，真正生效的数值取决于「现在是谁在那个位置上」。所以本类的方法都遵循同一个模式：先定位到某个 `CharacterObject`，再问它要影响的技能值，最后把结果写进调用方传进来的 `ExplainedNumber`。`ExplainedNumber` 是带账本的数值——每个加项都附带说明文本，这正是本类存在的意义：让 UI 能显示「+5 来自总督的工程」而不只是一个光秃秃的数字。

## 怎么用

### 怎么拿到它

静态类，直接 `SkillHelper.方法名(...)` 调用。所有方法都要求调用方自己持有 `ExplainedNumber` 实例并通过 `ref` 传入。

### 典型用法

- 给城镇面板加「总督技能加成」时，用 `AddSkillBonusForTown`，它会自己找到总督并取值。
- 给队伍面板加「领队技能加成」时，用 `AddSkillBonusForParty`，它会按优先级在领队、角色担任者、事实领队之间回退。
- 只要一个裸数值、不关心来源时，用 `AddSkillBonusForCharacter` 或 `AddSkillBonusForSkillLevel`。
- 需要给技能效果生成显示文本时，用 `GetEffectDescriptionForSkillLevel`。

### 最容易踩的坑

- `AddSkillBonusForParty` 三段回退都拿不到人时**静默什么都不加**，不报错也不加 0，调用方以为加了其实没加。
- `AddSkillBonusForTown` 只认 `ClanLeader` 和 `Governor` 两个角色，传其他 `SkillEffect` 进来同样静默无操作。
- `GetEffectDescriptionForSkillLevel` 返回的是 `SkillEffect` **共享的** `Description` 对象，且就地改写了它的 `a0` 变量——同一 `SkillEffect` 用不同 `level` 调两次会互相覆盖，要稳定文本必须自己 `new TextObject(effect.Description.ToString())`。
- `AddToStat` 只处理 `Add` 和 `AddFactor` 两种增量类型，其他类型静默丢弃。

## 关键成员

- `public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)` —— 按给定技能等级取加成值并加进可解释数值，说明文本走 role 本地化。`SkillHelper.cs:16`
- `public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)` —— 按「队伍里谁实际担任这个角色」取技能值，三段回退定位到人。`SkillHelper.cs:23`
- `public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)` —— 城镇版本，只认氏族首领与总督两个角色，其他角色不加。`SkillHelper.cs:48`
- `public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)` —— 最直接的一条：用指定角色的技能值加进可解释数值。`SkillHelper.cs:70`
- `public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)` —— 给技能效果生成显示文本，`AddFactor` 时值 ×100，就地改写 `Description` 的 `a0` 变量。`SkillHelper.cs:78`
- `private static void AddToStat(ref ExplainedNumber stat, EffectIncrementType effectIncrementType, float number, TextObject text)` —— 私有，不对外。区分 `Add` 与 `AddFactor` 两种增量类型分别落账，其他类型静默丢弃。`SkillHelper.cs:87`
- `public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)` —— 取队伍的「事实领队」：优先 `LeaderHero`，否则拿队里第 0 号兵。`SkillHelper.cs:101`
- `public static int GetHeroRelevantSkillValueForPartyRole(Hero hero, PartyRole role)` —— 返回英雄在给定队伍角色下真正生效的技能值，角色→技能映射来自模型层。`SkillHelper.cs:120`

## 真实示例

```csharp
// 把「总督的工程技能」加进一个可解释数值里，说明文本走 role 本地化
ExplainedNumber number = new ExplainedNumber(0f, true, null);
SkillEffect effect = Campaign.Current.Models.ClanMemberPartyRoleModel.GetSkillEffect(PartyRole.Governor);
SkillHelper.AddSkillBonusForTown(effect, town, ref number);
Debug.Print($"governor bonus = {number.ResultNumber}");
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models.ClanMemberPartyRoleModel` 提供「角色 → 技能」映射
- ↔ [GameModels](../../campaign/GameModels) —— 强类型属性容器，模型的实际读取入口
- ↔ [DefaultSettlementProsperityModel](../../campaign-ext/DefaultSettlementProsperityModel) —— `ExplainedNumber` + `AddFactor` 这套「可解释数值」写法的完整样例

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
