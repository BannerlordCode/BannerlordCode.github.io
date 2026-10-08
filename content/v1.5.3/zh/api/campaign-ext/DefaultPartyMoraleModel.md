---
title: "DefaultPartyMoraleModel"
description: "默认士气模型实现：以 50 点基础士气为种子，逐项累加近期事件、领导力、 perk、食物与超编效果。"
---

# DefaultPartyMoraleModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## 概述

DefaultPartyMoraleModel 是 PartyMoraleModel 的默认实现，位于 GameComponents 命名空间，是游戏实际使用的士气计算引擎。它把部队士气拆成一条可解释的累加链：以 50 点基础士气为种子，依次并入近期事件（战斗胜负、事件奖励）、领导力技能加成、perk 效果、食物多样性、超编惩罚等，最终得到一个 `ExplainedNumber`——既有最终数值，也有逐项文字说明，供 UI 悬浮提示使用。士气在游戏里影响部队的行军速度与战斗表现：士气高昂的部队移动更快、作战更坚决，士气低落的部队则行动迟缓、容易溃逃。这个类被 Campaign 的 GameModels 聚合持有，mod 可以通过替换整个模型来重做士气系统，也可以只覆写其中几个标量方法（如胜负变化）来微调平衡。它与相邻模型的分工是：士气模型只负责「算出士气数值」，而士气的实际消费（速度、战斗）由其他系统读取。

## 心智模型

`GetEffectivePartyMorale` 是深度核心，累加顺序固定，理解这条链就理解了整个类：

1. **种子**：`new ExplainedNumber(50f, ...)`——硬编码 50f，不是调用 `GetStandardBaseMorale`。
2. **近期事件**：`new ExplainedNumber(mobileParty.RecentEventsMorale, ...)` 单独建一个累加器；若为正且部队有领袖，用 `GenerosityMoraleGainEffect` 特性放大；若为负，则找军队领袖（或本部队领袖）用 `ValorLossMoraleResistEffect` 特性抵消部分减益。
3. **领袖平坦增益**：`GenerosityFlatMoraleEffect` 特性并入主累加器。
4. **合并近期事件**：`AddFromExplainedNumber` 把近期事件累加器整体并入主累加器。
5. **领导力技能**：`GetMoraleEffectsFromSkill` 通过 `SkillHelper.AddSkillBonusForCharacter` 加 `LeadershipMoraleBonus`。
6. **饥饿**：民兵看 `HomeSettlement.IsStarving`，驻军看 `SettlementHelper.IsGarrisonStarving`，其他部队看 `Party.IsStarving`；命中则加私有 `GetStarvationMoralePenalty` 的 -30。
7. **欠薪**：`HasUnpaidWages > 0` 时加 `HasUnpaidWages` × 私有 `GetNoWageMoralePenalty` 的 -20。
8. **perk**：`GetMoraleEffectsFromPerks` 处理 PeasantLeader（按低阶兵比例加因子）、SelfPromoter（围城时）、Logistician（马匹多于未骑马士兵时）。
9. **食物多样性**：`CalculateFoodVarietyMoraleBonus` 按 `FoodVariety` 0-12 映射 -2 到 +10；WarriorsDiet perk 把负值归零；Gourmet perk 把正值翻倍（海上减半）。
10. **超编**：`GetPartySizeMoraleEffect` 对非民兵/非村民部队，超出 `PartySizeLimit` 的部分按 `-sqrt(超编数)` 惩罚。

常见误用：以为覆写 `GetStandardBaseMorale` 能改有效士气基数（实际是硬编码 50f）；把公开的每日惩罚 -5/-3 当成有效士气里的惩罚（实际是私有的 -30/-20）；在 `includeDescription` 为 false 时读说明文字；直接 new 使用而不挂到 Campaign。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：`Campaign.Current.Models.PartyMoraleModel` 返回的就是这个默认实例（除非被 mod 替换）。

### 典型用法

1. 查询部队当前士气：`Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(party, true)`。
2. 微调胜负平衡：继承 DefaultPartyMoraleModel，覆写 `GetVictoryMoraleChange` 或 `GetDefeatMoraleChange`。
3. 微调每日惩罚：覆写 `GetDailyStarvationMoralePenalty` 或 `GetDailyNoWageMoralePenalty`。
4. 读取高士气阈值：`HighMoraleValue`（默认 60）。
5. 整体重做士气：继承 PartyMoraleModel 实现全部 8 个抽象成员，在 mod 初始化时替换 Campaign 的模型。

### 最容易踩的坑

1. 覆写 `GetStandardBaseMorale` 后期望 `GetEffectivePartyMorale` 的基数跟着变——基数是硬编码 50f，必须覆写 `GetEffectivePartyMorale` 本身。
2. 把 `GetDailyStarvationMoralePenalty` 的 -5 当成有效士气里的饥饿惩罚——有效士气走私有方法，值是 -30。
3. `GetEffectivePartyMorale` 的 `includeDescription` 传 false 时仍去读说明文字。
4. 直接 `new DefaultPartyMoraleModel()` 使用——必须挂到 Campaign 的 GameModels 上才会被游戏调用。
5. 在累加链里插自定义项时忘了 `ExplainedNumber.Add` 会同时影响数值与说明，导致 UI 悬浮提示出现重复或缺失行。

## 关键成员

- **DefaultPartyMoraleModel（类声明）**（`DefaultPartyMoraleModel.cs:15`）— 默认实现，继承 PartyMoraleModel，被 Campaign 的 GameModels 聚合持有。
- **HighMoraleValue**（`DefaultPartyMoraleModel.cs:19`）— 高士气阈值，固定返回 60f。
- **GetDailyStarvationMoralePenalty**（`DefaultPartyMoraleModel.cs:28`）— 每日结算口径的饥饿惩罚，固定返回 -5。
- **GetDailyNoWageMoralePenalty**（`DefaultPartyMoraleModel.cs:34`）— 每日结算口径的欠薪惩罚，固定返回 -3。
- **GetStandardBaseMorale**（`DefaultPartyMoraleModel.cs:52`）— 基础士气标量，固定返回 50f；注意有效士气的基数是硬编码 50f，与本方法无调用关系。
- **GetVictoryMoraleChange**（`DefaultPartyMoraleModel.cs:58`）— 胜利士气变化，固定返回 +20f。
- **GetDefeatMoraleChange**（`DefaultPartyMoraleModel.cs:64`）— 失败士气变化，固定返回 -20f。
- **GetEffectivePartyMorale**（`DefaultPartyMoraleModel.cs:231`）— 有效士气查询，返回 `ExplainedNumber`；内部按固定顺序累加基础、近期事件、技能、perk、食物、超编等项。

## 真实示例

```csharp
// 默认士气模型：查询主部队的士气构成
DefaultPartyMoraleModel moraleModel = (DefaultPartyMoraleModel)Campaign.Current.Models.PartyMoraleModel;
MobileParty mainParty = MobileParty.MainParty;

// 基础值与高士气阈值
float baseMorale = moraleModel.GetStandardBaseMorale(mainParty.Party);
float highMorale = moraleModel.HighMoraleValue;

// 有效士气（含说明），ResultNumber 即最终数值
ExplainedNumber effective = moraleModel.GetEffectivePartyMorale(mainParty, true);
float value = effective.ResultNumber;

// 战斗结算后的士气变化
float afterVictory = value + moraleModel.GetVictoryMoraleChange(mainParty.Party);
float afterDefeat = value + moraleModel.GetDefeatMoraleChange(mainParty.Party);
```

## 参见

- [PartyMoraleModel](../PartyMoraleModel) — 本批，先放着
- [PartyBaseHelper](../../core-extra/PartyBaseHelper) — 已落盘
- [PerkHelper](../../core-extra/PerkHelper) — 已落盘
- [MobilePartyHelper](../../core-extra/MobilePartyHelper) — 已落盘

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
