---
title: "PartyMoraleModel"
description: "部队士气模型的抽象接口：定义饥饿、欠薪、胜负与有效士气的计算契约，供战役系统替换与查询。"
---

# PartyMoraleModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## 概述

PartyMoraleModel 是战役层部队士气系统的抽象契约。士气是 Bannerlord 战役地图上的核心数值：它决定部队的行军速度、战斗中的表现倾向，以及 AI 是否敢打、是否想逃。这个抽象类继承自 `MBGameModel<PartyMoraleModel>`，因此它像其他战役模型一样被 Campaign 聚合管理，可以被整体替换成自定义实现（例如 mod 想重做士气系统时）。它把士气计算拆成两类方法：一类是「每日结算」的固定惩罚（饥饿、欠薪）与战斗结算的固定变化（胜利、失败），另一类是「实时查询」的有效士气 `GetEffectivePartyMorale`，后者返回 `ExplainedNumber`，把最终数值拆成带文字说明的逐项累加，供 UI 悬浮提示使用。默认实现是 `DefaultPartyMoraleModel`，两者是接口与实现的关系。

## 心智模型

结构上这个类只有 8 个成员，全部是抽象成员，没有任何字段——它是一份纯契约。`HighMoraleValue` 是「高士气」阈值，默认实现返回 60，UI 与 AI 用它判断部队是否处于高昂状态。`GetDailyStarvationMoralePenalty` 与 `GetDailyNoWageMoralePenalty` 是每日结算时调用的固定惩罚，注意它们的返回值是 int，且默认实现分别返回 -5 与 -3——这是「每日」口径，与 `DefaultPartyMoraleModel` 内部私有方法（-30 与 -20 的「严重」口径）不是同一套数字，改接口实现时不要混淆。`GetStandardBaseMorale`、`GetVictoryMoraleChange`、`GetDefeatMoraleChange` 是三个标量参数，分别对应基础士气、胜利增益、失败减益。`GetEffectivePartyMorale` 是唯一返回 `ExplainedNumber` 的方法：它把基础值、近期事件、技能、perk、食物、超编等全部累加成一个可解释的数字，`includeDescription` 参数控制是否生成逐项文字说明。调用顺序上，游戏在每日结算时调用前两个惩罚方法，在战斗结算时调用胜负变化方法，在 UI 需要显示士气时调用 `GetEffectivePartyMorale`。常见误用：以为改 `GetStandardBaseMorale` 就能改变有效士气的基数（实际基数是硬编码 50f）；把每日惩罚的 -5/-3 当成有效士气里的惩罚值；在 `includeDescription` 为 false 时仍试图读取说明文字。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：`Campaign.Current.Models.PartyMoraleModel` 即为当前战役的士气模型实例。

### 典型用法

1. 查询部队当前士气：`Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(party, true)`，取 `ResultNumber` 得数值，取说明列表得逐项构成。
2. 在自定义战斗结算里套用胜负变化：`GetVictoryMoraleChange(party.Party)` 与 `GetDefeatMoraleChange(party.Party)`。
3. 在每日结算 mod 里读取固定惩罚：`GetDailyStarvationMoralePenalty(party.Party)`。
4. 判断部队是否处于高士气：与 `HighMoraleValue` 比较。
5. 整体替换实现：写一个继承 PartyMoraleModel 的类，在 mod 初始化时替换 Campaign 的模型。

### 最容易踩的坑

1. 把 `GetDailyStarvationMoralePenalty` 的 -5 当成有效士气里的饥饿惩罚——后者走的是私有方法，值是 -30。
2. 以为覆写 `GetStandardBaseMorale` 能改变 `GetEffectivePartyMorale` 的基数——基数是硬编码 50f。
3. `GetEffectivePartyMorale` 的 `includeDescription` 传 false 时仍去读说明文字，得到空。
4. 在模型里缓存部队引用——模型是无状态契约，部队状态随时变化，应每次传入。
5. 直接 new 一个 PartyMoraleModel 子类就用——必须挂到 Campaign 的 GameModels 上才会被游戏调用。

## 关键成员

- **PartyMoraleModel（类声明）**（`PartyMoraleModel.cs:8`）— 抽象基类，继承 `MBGameModel<PartyMoraleModel>`，被 Campaign 聚合管理，可整体替换。
- **HighMoraleValue**（`PartyMoraleModel.cs:12`）— 高士气阈值，只读属性；默认实现返回 60，UI 与 AI 用它判断部队是否士气高昂。
- **GetDailyStarvationMoralePenalty**（`PartyMoraleModel.cs:15`）— 每日结算时调用，返回固定 int 惩罚；默认实现 -5，注意与有效士气内部的 -30 区分。
- **GetDailyNoWageMoralePenalty**（`PartyMoraleModel.cs:18`）— 每日结算时调用，返回固定 int 惩罚；默认实现 -3，注意与有效士气内部的 -20 区分。
- **GetStandardBaseMorale**（`PartyMoraleModel.cs:21`）— 返回基础士气标量；默认实现 50f，但有效士气的基数是硬编码 50f，覆写它不会改变有效士气。
- **GetVictoryMoraleChange**（`PartyMoraleModel.cs:24`）— 战斗胜利结算时调用，返回士气增量；默认实现 +20f。
- **GetDefeatMoraleChange**（`PartyMoraleModel.cs:27`）— 战斗失败结算时调用，返回士气减量；默认实现 -20f。
- **GetEffectivePartyMorale**（`PartyMoraleModel.cs:30`）— 实时查询有效士气，返回 `ExplainedNumber`；`includeDescription` 控制是否生成逐项说明。

## 真实示例

```csharp
// 在 Campaign 行为或 Helper 里拿到士气模型并查询部队士气
PartyMoraleModel moraleModel = Campaign.Current.Models.PartyMoraleModel;
MobileParty party = MobileParty.MainParty;

// 有效士气：返回 ExplainedNumber，ResultNumber 即最终数值
ExplainedNumber morale = moraleModel.GetEffectivePartyMorale(party, true);
float currentMorale = morale.ResultNumber;

// 单项查询：胜利 / 失败带来的士气变化
float victoryChange = moraleModel.GetVictoryMoraleChange(party.Party);
float defeatChange = moraleModel.GetDefeatMoraleChange(party.Party);

// 每日结算用的固定惩罚
int starvationPenalty = moraleModel.GetDailyStarvationMoralePenalty(party.Party);
int noWagePenalty = moraleModel.GetDailyNoWageMoralePenalty(party);

// 高士气阈值
float highMorale = moraleModel.HighMoraleValue;
```

## 参见

- [DefaultPartyMoraleModel](../DefaultPartyMoraleModel) — 本批，先放着
- [PartyBaseHelper](../../core-extra/PartyBaseHelper) — 已落盘
- [MobilePartyHelper](../../core-extra/MobilePartyHelper) — 已落盘
- [GameModel](../../core-extra/GameModel) — 已落盘

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
