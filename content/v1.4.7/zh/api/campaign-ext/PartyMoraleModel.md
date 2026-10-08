---
title: "PartyMoraleModel"
description: "队伍士气契约：定义队伍士气如何计算——基础值、每日断粮/欠饷惩罚、胜负结算与最终有效士气的唯一权威来源，mod 通过替换本模型自定义全部士气规则。"
---
# PartyMoraleModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**基类：** `MBGameModel<PartyMoraleModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`（声明见第 8 行）

## 概述

`PartyMoraleModel` 是队伍士气系统的**契约层**：只声明「士气怎么算」，不含任何实现。引擎与 mod 都通过 `Campaign.Current.Models.PartyMoraleModel` 取当前生效实例，因此本契约的每个成员都直接对应玩家可见行为——地图上队伍的士气数字、战斗结算的胜负士气变化、断粮与欠饷的每日扣减、以及治疗模型「高士气加成」的判定阈值。默认实现是 `DefaultPartyMoraleModel`；mod 继承本契约（或继承默认实现）后调用 `CampaignGameStarter.AddModel` 注册即可整体替换。

## 心智模型

把它想成**士气系统的「规则书」而不是「计算器」**。契约回答「需要哪些数字」，默认实现才回答「数字是多少」。三个心智要点：

1. **契约与实现分离，替换以「最后注册者赢」**。`GameModels` 构造时通过 `GetGameModel<PartyMoraleModel>()`（`GameModels.cs:659`）从模型列表**末尾**取实现；`CampaignGameStarter.AddModel<T>`（`CampaignGameStarter.cs:95`）把新模型追加到列表末尾。mod 只要 `AddModel` 一次，就盖掉 `SandBoxManager.cs:255` 注册的默认实现。
2. **「每日惩罚」与「一次性结算」是两套尺度**。`GetDailyStarvationMoralePenalty` / `GetDailyNoWageMoralePenalty` 是**每天**扣的固定小数目（默认 -5 / -3），由每日行为调用；`GetVictoryMoraleChange` / `GetDefeatMoraleChange` 是**战斗结算**时一次性加减的大数目（默认 ±20）。改错尺度会让士气曲线完全变形。
3. **有效士气是「一个累加过程」**。`GetEffectivePartyMorale` 返回 `ExplainedNumber`——从 50 出发，依次加上近期事件、领导技能、断粮、欠饷、perk、食物多样性、队伍规模。UI 显示的 `MobileParty.Morale` 就是它的 `ResultNumber` 被钳到 [0,100]（`MobileParty.cs:2030`）。

## 怎么用

**替换方式**：继承 `PartyMoraleModel`（更常见地继承 `DefaultPartyMoraleModel` 以保留默认数值），在 `CampaignBehaviorBase.Initialize()` 等注册时机调用：

```csharp
CampaignGameStarter.AddModel<PartyMoraleModel>(new MyMoraleModel());
```

`AddModel<T>` 先调 `Initialize(currentModel)` 把当前（默认）模型传给你的实例（`CampaignGameStarter.cs:95`），可用 `BaseModel` 属性读取旧状态，然后追加进模型列表——由于 `GetGameModel<T>` 从列表**末尾**向前找（`GameModelsManager.cs:17`），你的实例成为最终生效的实现。

**真实坑**：

1. **`GetStandardBaseMorale` 与 `GetVictoryMoraleChange` 在原版没有任何调用方**。全源码树搜索只有契约声明与默认实现，没有第三方调用。覆写它们**不改变原版行为**——要么连 `GetEffectivePartyMorale` 一起覆写并在其中调用，要么把它们当作「留给 mod 的扩展点」。
2. **`GetEffectivePartyMorale` 内部把基值硬编码为 `50f`**，并不调用 `GetStandardBaseMorale()`。只覆写 `GetStandardBaseMorale` 对有效士气毫无影响。
3. **公开每日惩罚与私有事件惩罚尺度不同**。默认实现里 `GetDailyStarvationMoralePenalty` 返回 -5（每日行为用），而 `GetEffectivePartyMorale` 内部用的是私有的 `GetStarvationMoralePenalty`（-30）。覆写公开方法只影响每日结算路径，不影响有效士气的当前值计算。
4. **士气最终会被钳制**。`MobileParty.Morale` 的 getter 把结果钳到 [0,100]（`MobileParty.cs:2030`），超过 100 的加成在 UI 上不可见。

**真实使用点**：

- `MobileParty.cs:2030` — `Morale` 属性 getter 调 `GetEffectivePartyMorale(this, false).ResultNumber` 并钳到 [0,100]，即地图上队伍旗帜旁的士气数字。
- `MobileParty.cs:2096` — `MoraleExplained` 属性调 `GetEffectivePartyMorale(this, true)`，返回带逐项说明的 `ExplainedNumber`，供 UI 悬浮提示逐条展示士气来源。
- `MapEvent.cs:2239` — 战斗结算时败方每个移动队伍 `RecentEventsMorale += GetDefeatMoraleChange(party)`。
- `DefaultPartyHealingModel.cs:166` 与 `DefaultPartyHealingModel.cs:256` — 治疗模型在 `mobileParty.Morale >= HighMoraleValue` 时追加 `BestMedicine` perk 的治疗加成。
- `FoodConsumptionBehavior.cs:207` — 每日食物结算时断粮队伍按 `GetDailyStarvationMoralePenalty` 扣 `RecentEventsMorale`。
- `DefaultClanFinanceModel.cs:973` — 欠饷工资计算按 `GetDailyNoWageMoralePenalty` 折算士气损失。
- `GameModels.cs:114` / `GameModels.cs:659` — `PartyMoraleModel` 属性与 `GetGameModel<PartyMoraleModel>()` 注册点。
- `SandBoxManager.cs:255` — 默认实现注册：`AddModel<PartyMoraleModel>(new DefaultPartyMoraleModel())`。

## 关键成员

| 成员 | 位置 | 用途、副作用与时机 |
| --- | --- | --- |
| `float HighMoraleValue { get; }` | `PartyMoraleModel.cs:12` | 「高士气」阈值。治疗模型在 `Morale >= HighMoraleValue` 时给额外治疗加成（`DefaultPartyHealingModel.cs:166`）。默认 70。 |
| `int GetDailyStarvationMoralePenalty(PartyBase party)` | `PartyMoraleModel.cs:15` | 断粮期间**每天**的士气扣减，由 `FoodConsumptionBehavior.cs:207` 调用。默认 -5。 |
| `int GetDailyNoWageMoralePenalty(MobileParty party)` | `PartyMoraleModel.cs:18` | 欠饷时**每天**的士气扣减，由 `DefaultClanFinanceModel.cs:973` 用于工资折算。默认 -3。 |
| `float GetStandardBaseMorale(PartyBase party)` | `PartyMoraleModel.cs:21` | 士气基值。**原版无调用方**，仅作扩展点；默认实现返回 50。 |
| `float GetVictoryMoraleChange(PartyBase party)` | `PartyMoraleModel.cs:24` | 战斗胜利时的一次性士气变化。**原版无调用方**；默认 +20。 |
| `float GetDefeatMoraleChange(PartyBase party)` | `PartyMoraleModel.cs:27` | 战斗失败时的一次性士气变化，由 `MapEvent.cs:2239` 结算。默认 -20。 |
| `ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)` | `PartyMoraleModel.cs:30` | **核心聚合**：从 50 出发累加近期事件、技能、断粮、欠饷、perk、食物多样性与队伍规模，返回带逐项说明的 `ExplainedNumber`。`MobileParty.Morale` 与 `MoraleExplained` 都调它。 |

## 真实示例

### 示例 1：整体替换士气规则（更严苛的士气）

继承默认实现以保留未覆写成员的数值，只改关键项：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class HarshMoraleModel : DefaultPartyMoraleModel
{
    public override float HighMoraleValue => 85f;          // 高士气门槛更高，治疗加成更难触发

    public override int GetDailyStarvationMoralePenalty(PartyBase party) => -8;  // 断粮扣得更狠

    public override float GetDefeatMoraleChange(PartyBase party) => -35f;       // 败仗打击更大

    public override ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)
    {
        ExplainedNumber morale = base.GetEffectivePartyMorale(party, includeDescription);
        morale.Add(-10f, new TextObject("MyMod: occupation strain"));  // 常驻 -10
        return morale;
    }
}
```

注册（`CampaignBehaviorBase.Initialize` 内）：

```csharp
CampaignGameStarter.AddModel<PartyMoraleModel>(new HarshMoraleModel());
```

注意 `base.GetEffectivePartyMorale(party, includeDescription)` 保留了默认的全部累加项，只在其上叠加自己的修正——这是「改规则」而不是「重算规则」的典型写法。

## 参见

- ↔ [DefaultPartyMoraleModel](../DefaultPartyMoraleModel)：本契约的默认实现，数值与累加顺序的权威参考。
- ↔ [MobileParty](../../campaign/MobileParty)：`Morale` / `MoraleExplained` 属性的宿主，契约的主要消费方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。
- ↔ [PartyBase](../../campaign/PartyBase)：契约方法的参数类型，队伍静态数据。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
