---
title: "DefaultPartyMoraleModel"
description: "战役系统中部队士气计算的默认规则模型，定义基础士气值、每日惩罚、战斗胜负修正以及综合士气聚合管线。"
---
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## 概述

`DefaultPartyMoraleModel` 是战役层部队士气子系统的默认计算引擎。它继承自 `PartyMoraleModel` 抽象基类，为所有非民兵、非驻军部队提供一套完整的士气数值规则：从 50 点基础值出发，依次叠加近期事件修正、领导力技能加成、饥饿与欠薪惩罚、perk 效果、食物多样性加成和超额编制惩罚，最终输出一个可解释的 `ExplainedNumber`。

这个类不持有任何状态——所有方法都是纯函数式的数值计算，输入是 `PartyBase` 或 `MobileParty`，输出是士气修正量或最终士气值。游戏通过 `Campaign.Current.Models.PartyMoraleModel` 拿到当前注册的实例，mod 开发者可以通过替换实现来重写任意一条规则。

## 心智模型

把 `DefaultPartyMoraleModel` 理解为一条**士气计算流水线**，而不是一个状态容器。

**谁创建它：** 战役初始化时由 `Campaign` 创建并注册到 `Campaign.Current.Models` 模型注册表。

**谁持有它：** `Campaign.Current.Models.PartyMoraleModel` 是全局唯一入口，所有系统（食物消耗、战斗结算、部队属性、治疗加速）都通过这个入口调用。

**谁调用它：** `FoodConsumptionBehavior` 每日饥饿 tick、`MapEvent` 战斗结算、`MobileParty.Morale` 属性 getter、`DefaultPartyHealingModel` 治疗加速判断、`DefaultClanFinanceModel` 欠薪结算。

**核心设计决策：** 类是无状态的，所有数值规则以常量或简单算术表达。这意味着 mod 开发者可以只重写一个方法（比如把胜利修正从 +20 改成 +30）而不影响其他规则。

**常见误用：**
- 试图直接 `new DefaultPartyMoraleModel()` 并传给系统——系统只认 `Campaign.Current.Models.PartyMoraleModel` 注册表中持有的实例。
- 混淆 `GetDailyStarvationMoralePenalty`（每日 -5，持续扣）和 `GetStarvationMoralePenalty`（一次性 -30，仅在 `GetEffectivePartyMorale` 聚合时触发）。前者由 `FoodConsumptionBehavior` 每日调用，后者由模型内部在综合计算时调用。
- 混淆 `GetDailyNoWageMoralePenalty`（每日 -3/人）和 `GetNoWageMoralePenalty`（一次性 -20）。

## 怎么用

**拿到实例：**

```csharp
// 通过模型注册表拿到当前注册的士气模型
var moraleModel = Campaign.Current.Models.PartyMoraleModel;
```

**读取最终士气：**

```csharp
// MobileParty.Morale 属性内部就是调用 GetEffectivePartyMorale
float morale = mobileParty.Morale;
```

**mod 替换整个模型：**

```csharp
// 在 CampaignBehaviorBase 的 RegisterEvents 或 OnGameStart 中替换
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyCustomMoraleModel());
```

**只重写部分规则：** 继承 `DefaultPartyMoraleModel` 并 override 需要改的方法，然后通过 `Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MySubclass())` 注册。

**坑：**
- `GetEffectivePartyMorale` 返回 `ExplainedNumber`，不是 `float`。需要 `.ResultNumber` 拿到数值，需要 `.Explanation` 拿到逐条解释文本。
- `HighMoraleValue` 是 `float` 类型的属性（70f），不是方法。
- 饥饿惩罚有两套：每日持续惩罚（`GetDailyStarvationMoralePenalty`，-5/天）和综合计算时的一次性惩罚（`GetStarvationMoralePenalty`，-30）。两者独立触发，不要混用。

## 关键成员

### HighMoraleValue
`public override float HighMoraleValue { get; }` — `DefaultPartyMoraleModel.cs:19`

返回士气阈值 70f。当部队士气 ≥ 此值时，`DefaultPartyHealingModel` 会启用加速治疗。这是一个纯常量属性，mod 可重写以调整加速治疗的触发门槛。

### GetDailyStarvationMoralePenalty
`public override int GetDailyStarvationMoralePenalty(PartyBase party)` — `DefaultPartyMoraleModel.cs:28`

返回每日饥饿士气惩罚 -5。由 `FoodConsumptionBehavior` 在每日食物消耗 tick 中调用，对处于饥饿状态的部队持续扣减士气。注意这与 `GetStarvationMoralePenalty`（一次性 -30）是两套独立机制。

### GetDailyNoWageMoralePenalty
`public override int GetDailyNoWageMoralePenalty(MobileParty party)` — `DefaultPartyMoraleModel.cs:34`

返回每日欠薪士气惩罚率 -3。由 `DefaultClanFinanceModel` 在 clan 财政更新时调用，乘以欠薪人数得到当日总惩罚。注意这与 `GetNoWageMoralePenalty`（一次性 -20）是两套独立机制。

### GetStandardBaseMorale
`public override float GetStandardBaseMorale(PartyBase party)` — `DefaultPartyMoraleModel.cs:50`

返回基础士气值 50f。这是所有士气计算的起点，`GetEffectivePartyMorale` 内部以它为初始值叠加所有修正。mod 可重写以改变全局士气基线。

### GetVictoryMoraleChange
`public override float GetVictoryMoraleChange(PartyBase party)` — `DefaultPartyMoraleModel.cs:58`

返回战斗胜利后的士气修正 +20f。由 `MapEvent` 在战斗结算时调用，加到 `MobileParty.RecentEventsMorale` 上。

### GetDefeatMoraleChange
`public override float GetDefeatMoraleChange(PartyBase party)` — `DefaultPartyMoraleModel.cs:64`

返回战斗失败后的士气修正 -20f。由 `MapEvent` 在战斗结算时调用，加到 `MobileParty.RecentEventsMorale` 上。

### GetEffectivePartyMorale
`public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)` — `DefaultPartyMoraleModel.cs:222`

核心聚合方法。以 50f 为初始值，依次叠加：近期事件士气（`RecentEventsMorale`）、领导力技能加成、饥饿惩罚（民兵/驻军/普通部队各有判断分支）、欠薪惩罚（`HasUnpaidWages × -20`）、perk 效果（PeasantLeader/SelfPromoter/Logistician）、食物多样性加成（-2 到 +10，受 WarriorsDiet/Gourmet perk 修正）、超额编制惩罚（`-1 × √(超出人数)`）。返回 `ExplainedNumber`，可通过 `.ResultNumber` 拿数值、`.Explanation` 拿解释文本。

## 真实示例

```csharp
// FoodConsumptionBehavior.cs:207 — 每日饥饿 tick 应用持续惩罚
int dailyStarvationMoralePenalty = Campaign.Current.Models.PartyMoraleModel.GetDailyStarvationMoralePenalty(mobileParty.Party);
```

```csharp
// MapEvent.cs:2140 — 战斗失败后应用士气修正
party.MobileParty.RecentEventsMorale += Campaign.Current.Models.PartyMoraleModel.GetDefeatMoraleChange(party);
```

```csharp
// MobileParty.cs:1874 — Morale 属性 getter 读取综合士气
float resultNumber = Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(this, false).ResultNumber;
```

```csharp
// DefaultPartyHealingModel.cs:166 — 高士气触发加速治疗
if (mobileParty.Morale >= Campaign.Current.Models.PartyMoraleModel.HighMoraleValue)
```

## 参见

- [PartyMoraleModel](../PartyMoraleModel) — 抽象基类，定义士气模型的接口契约
- [ExplainedNumber](../ExplainedNumber) — 返回值类型，提供可解释的数值聚合
- [DefaultPartyHealingModel](../DefaultPartyHealingModel) — 消费 `HighMoraleValue` 触发加速治疗
- [DefaultClanFinanceModel](../DefaultClanFinanceModel) — 消费 `GetDailyNoWageMoralePenalty` 计算欠薪惩罚
- [MobileParty](../MobileParty) — 消费 `GetEffectivePartyMorale` 暴露 `Morale` 属性
- [FoodConsumptionBehavior](../FoodConsumptionBehavior) — 消费 `GetDailyStarvationMoralePenalty` 每日扣减
- [MapEvent](../MapEvent) — 消费 `GetDefeatMoraleChange` / `GetVictoryMoraleChange` 战斗结算

## 导航

- [战役 API 索引](../)
