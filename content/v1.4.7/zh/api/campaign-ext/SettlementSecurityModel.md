---
title: "SettlementSecurityModel"
description: "聚落治安契约：定义城镇治安数值如何计算——每日变化量的全部修正项（藏身处、围城、繁荣、驻军、政策、perk 等）、税收区间阈值、以及战斗/藏身处事件对治安的一次性影响，mod 通过替换本模型自定义全部治安规则。"
---
# SettlementSecurityModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**基类：** `MBGameModel<SettlementSecurityModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`（声明见第 8 行）

## 概述

`SettlementSecurityModel` 是城镇治安系统的**契约层**：只声明「治安怎么算」，不含任何实现。引擎与 mod 都通过 `Campaign.Current.Models.SettlementSecurityModel` 取当前生效实例。契约分三类成员：**阈值属性**（税收三阈值、notable 关系/战力阈值、藏身处与地图事件半径）、**一次性影响方法**（附近队伍被劫/匪帮被灭的即时治安变化）、**聚合方法** `CalculateSecurityChange`（每日治安变化量）与两个**税收修正方法**。默认实现是 `DefaultSettlementSecurityModel`；mod 继承本契约（或继承默认实现）后调用 `CampaignGameStarter.AddModel` 注册即可整体替换。

## 心智模型

把它想成**治安系统的「规则书」而不是「计算器」**。契约回答「需要哪些数字」，默认实现才回答「数字是多少」。三个心智要点：

1. **契约与实现分离，替换以「最后注册者赢」**。`GameModels` 构造时通过 `GetGameModel<SettlementSecurityModel>()`（`GameModels.cs:692`）从模型列表**末尾**取实现；`CampaignGameStarter.AddModel<T>`（`CampaignGameStarter.cs:95`）把新模型追加到列表末尾。mod 只要 `AddModel` 一次，就盖掉 `SandBoxManager.cs:297` 注册的默认实现。
2. **`CalculateSecurityChange` 返回的是「每日变化量」而不是绝对值**。`Town.DailyTick` 每天执行 `this.Security += this.SecurityChange`（`Town.cs:798`），而 `SecurityChange` 属性就是调 `CalculateSecurityChange(this, false).ResultNumber`（`Town.cs:275`）。所以契约里的每个阈值/修正项最终都体现为「每天加减几点」。
3. **税收是治安的下游消费者**。`DefaultSettlementTaxModel` 用三个阈值把治安划成三档：≥75 走 `CalculateGoldGainDueToHighSecurity`（税收加成）、[0,50) 走 `CalculateGoldCutDueToLowSecurity`（税收惩罚）、[50,75) 无修正。改阈值等于改税收曲线。

## 怎么用

**替换方式**：继承 `SettlementSecurityModel`（更常见地继承 `DefaultSettlementSecurityModel` 以保留默认数值），在 `CampaignBehaviorBase.Initialize()` 等注册时机调用：

```csharp
CampaignGameStarter.AddModel<SettlementSecurityModel>(new MySecurityModel());
```

`AddModel<T>` 先调 `Initialize(currentModel)` 把当前（默认）模型传给你的实例（`CampaignGameStarter.cs:95`），可用 `BaseModel` 属性读取旧状态，然后追加进模型列表——由于 `GetGameModel<T>` 从列表**末尾**向前找（`GameModelsManager.cs:17`），你的实例成为最终生效的实现。

**真实坑**：

1. **`MaximumSecurityInSettlement` 不参与治安钳制**。`Town.Security` 的 setter 把值硬编码钳到 [0,100]（`Town.cs:350-360`），并不读这个属性。把它改成 120 不会让治安超过 100。
2. **`SecurityDriftMedium` 只被默认实现内部使用**（`CalculateSecurityDrift` 的回归目标）。原版没有其他调用方；覆写它只在你保留默认 `CalculateSecurityChange` 时才生效。
3. **`GetLootedNearbyPartySecurityEffect` 返回负值**。调用方直接 `town.Town.Security += model.GetLootedNearbyPartySecurityEffect(town.Town, num)`（`TownSecurityCampaignBehavior.cs:49`）——覆写时保持负号约定，写成正值会让「被劫」变成「加治安」。
4. **税收三阈值默认把「更严厉惩罚」区间压成空集**。`ThresholdForHigherTaxCorruption` 默认 0，`ThresholdForTaxCorruption` 默认 50，所以默认只有 [0,50) 一档惩罚；想恢复「重罚」区间必须同时抬高这两个阈值。

**真实使用点**：

- `Town.cs:275` — `SecurityChange` 属性 getter 调 `CalculateSecurityChange(this, false).ResultNumber`，即城镇界面显示的「每日治安变化」。
- `Town.cs:285` — `SecurityChangeExplanation` 属性调 `CalculateSecurityChange(this, true)`，返回带逐项说明的 `ExplainedNumber`，供 UI 悬浮提示。
- `Town.cs:798` — `Town.DailyTick` 执行 `this.Security += this.SecurityChange`，把变化量累加到当前治安。
- `TownSecurityCampaignBehavior.cs:27` — 藏身处被清空时，对半径内城镇 `Security += HideoutClearedSecurityGain`。
- `TownSecurityCampaignBehavior.cs:39` — 野外战斗结束时，用 `MapEventSecurityEffectRadius` 筛选受影响城镇。
- `TownSecurityCampaignBehavior.cs:49` — 战斗中有平民方被劫时，`Security += GetLootedNearbyPartySecurityEffect(town, 败方总强度)`。
- `TownSecurityCampaignBehavior.cs:62` — 匪帮被击败时，`Security += GetNearbyBanditPartyDefeatedSecurityEffect(town, 败方总强度)`。
- `CharacterRelationCampaignBehavior.cs:402` / `CharacterRelationCampaignBehavior.cs:411` — 治安 ≥ `ThresholdForNotableRelationBonus` 时，城镇 notable 每天 `+DailyNotableRelationBonus` 关系。
- `CharacterRelationCampaignBehavior.cs:418` / `CharacterRelationCampaignBehavior.cs:426` / `CharacterRelationCampaignBehavior.cs:427` — 治安 ≥ `ThresholdForNotableRelationPenalty` 时，notable 每天 `-DailyNotableRelationPenalty` 关系并 `-DailyNotablePowerPenalty` 战力。
- `CharacterRelationCampaignBehavior.cs:437` — 治安达标时 notable 每天 `+DailyNotablePowerBonus` 战力。
- `DefaultSettlementTaxModel.cs:153` / `DefaultSettlementTaxModel.cs:156` / `DefaultSettlementTaxModel.cs:159` / `DefaultSettlementTaxModel.cs:161` — 税收模型按 `ThresholdForTaxBoost` / `ThresholdForHigherTaxCorruption` / `ThresholdForTaxCorruption` 分档，调用两个税收修正方法。
- `GameModels.cs:309` / `GameModels.cs:692` — `SettlementSecurityModel` 属性与 `GetGameModel<SettlementSecurityModel>()` 注册点。
- `SandBoxManager.cs:297` — 默认实现注册：`AddModel<SettlementSecurityModel>(new DefaultSettlementSecurityModel())`。

## 关键成员

| 成员 | 位置 | 用途、副作用与时机 |
| --- | --- | --- |
| `int MaximumSecurityInSettlement { get; }` | `SettlementSecurityModel.cs:12` | 治安上限。**注意：`Town.Security` 的 setter 硬编码钳到 100，不读本属性**。默认 100。 |
| `int SecurityDriftMedium { get; }` | `SettlementSecurityModel.cs:16` | 治安漂移回归目标。默认实现 `CalculateSecurityDrift` 用它把治安往 50 拉。默认 50。 |
| `float MapEventSecurityEffectRadius { get; }` | `SettlementSecurityModel.cs:20` | 野外战斗影响半径。`TownSecurityCampaignBehavior.cs:39` 用它筛选受影响城镇。默认 50。 |
| `float HideoutClearedSecurityEffectRadius { get; }` | `SettlementSecurityModel.cs:24` | 藏身处清空影响半径。`TownSecurityCampaignBehavior.cs:27` 用它筛选受益城镇。默认 100。 |
| `int HideoutClearedSecurityGain { get; }` | `SettlementSecurityModel.cs:28` | 藏身处清空时给半径内城镇的即时治安增量。默认 6。 |
| `int ThresholdForTaxCorruption { get; }` | `SettlementSecurityModel.cs:32` | 税收惩罚档上界：治安低于它时走 `CalculateGoldCutDueToLowSecurity`。默认 50。 |
| `int ThresholdForHigherTaxCorruption { get; }` | `SettlementSecurityModel.cs:36` | 税收重罚档下界。默认 0（与上一阈值配合把重罚区间压成空集）。 |
| `int ThresholdForTaxBoost { get; }` | `SettlementSecurityModel.cs:40` | 税收加成档下界：治安 ≥ 它时走 `CalculateGoldGainDueToHighSecurity`。默认 75。 |
| `int SettlementTaxBoostPercentage { get; }` | `SettlementSecurityModel.cs:44` | 高治安税收加成的最大百分比。默认 5。 |
| `int SettlementTaxPenaltyPercentage { get; }` | `SettlementSecurityModel.cs:48` | 低治安税收惩罚的最大百分比。默认 10。 |
| `float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | `SettlementSecurityModel.cs:51` | 附近队伍被劫时对城镇治安的**负向**即时影响，与败方总强度成正比。默认 `-0.005 × 强度`。 |
| `int ThresholdForNotableRelationBonus { get; }` | `SettlementSecurityModel.cs:55` | 治安 ≥ 它时，城镇 notable 每天获得关系加成。默认 75。 |
| `int ThresholdForNotableRelationPenalty { get; }` | `SettlementSecurityModel.cs:59` | 治安 ≥ 它时，城镇 notable 每天受到关系/战力惩罚。默认 50。 |
| `int DailyNotableRelationBonus { get; }` | `SettlementSecurityModel.cs:63` | 高治安时 notable 的每日关系增量。默认 1。 |
| `int DailyNotableRelationPenalty { get; }` | `SettlementSecurityModel.cs:67` | 高治安时 notable 的每日关系扣减。默认 -1。 |
| `int DailyNotablePowerBonus { get; }` | `SettlementSecurityModel.cs:71` | 高治安时 notable 的每日战力增量。默认 1。 |
| `int DailyNotablePowerPenalty { get; }` | `SettlementSecurityModel.cs:75` | 高治安时 notable 的每日战力扣减。默认 -1。 |
| `ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)` | `SettlementSecurityModel.cs:78` | **核心聚合**：返回城镇的**每日治安变化量**（不是绝对值）。`Town.SecurityChange` 与 `Town.DailyTick` 都依赖它。 |
| `float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | `SettlementSecurityModel.cs:81` | 附近匪帮被击败时对城镇治安的**正向**即时影响，与败方总强度成正比。默认 `+0.005 × 强度`。 |
| `void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)` | `SettlementSecurityModel.cs:84` | 高治安税收加成：把治安从 `ThresholdForTaxBoost` 到上限映射到 [0, `SettlementTaxBoostPercentage`] 的因子，加进税收 `ExplainedNumber`。 |
| `void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)` | `SettlementSecurityModel.cs:87` | 低治安税收惩罚：把治安从 `ThresholdForHigherTaxCorruption` 到 `ThresholdForTaxCorruption` 映射到 [`SettlementTaxPenaltyPercentage`, 0] 的负因子。 |

## 真实示例

### 示例 1：整体替换治安规则（更安全的城镇）

继承默认实现以保留未覆写成员的数值，只改关键项：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public class SafeTownsModel : DefaultSettlementSecurityModel
{
    public override int HideoutClearedSecurityGain => 10;   // 清空藏身处收益翻倍

    public override int ThresholdForTaxBoost => 60;          // 更容易拿到税收加成

    public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)
        => sumOfAttackedPartyStrengths * 0.01f;               // 剿匪治安收益翻倍
}
```

注册（`CampaignBehaviorBase.Initialize` 内）：

```csharp
CampaignGameStarter.AddModel<SettlementSecurityModel>(new SafeTownsModel());
```

注意 `GetNearbyBanditPartyDefeatedSecurityEffect` 保持**正值**约定——调用方是直接 `Security +=` 的，写成负值会让剿匪变成惩罚。

### 示例 2：在默认结果上做加法（覆写 `CalculateSecurityChange`）

`CalculateSecurityChange` 是本契约里**唯一返回 `ExplainedNumber` 的方法**，也是最适合「先沿用原版、再微调」的挂钩点。覆写时先用 `base.` 取到原版累加结果，再往里面加自己的项：

```csharp
using TaleWorlds.CampaignSystem;                        // ExplainedNumber
using TaleWorlds.CampaignSystem.GameComponents;         // DefaultSettlementSecurityModel
using TaleWorlds.CampaignSystem.Settlements;            // Town

public class SiegeReliefSecurityModel : DefaultSettlementSecurityModel
{
    public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)
    {
        // ① 真实方法调用：取原版算好的治安变化（十三个累加器都已折在里面）
        ExplainedNumber result = base.CalculateSecurityChange(town, includeDescriptions);

        // ② 真实方法调用：被围城时追加一点治安
        if (town.IsUnderSiege)
        {
            result.Add(0.5f);
        }

        return result;
    }
}
```

注册方式与示例 1 相同：

```csharp
CampaignGameStarter.AddModel<SettlementSecurityModel>(new SiegeReliefSecurityModel());
```

心智模型要点：

- **`base.…` 必须先调**：原版把 `MaximumSecurityInSettlement` 上限、`SecurityDriftMedium` 漂移、税率阈值等十几条规则全部折进同一个 `ExplainedNumber`。自己从头构造会丢掉这些，还极易与 `ThresholdForTaxBoost` 之类的阈值自相矛盾。
- **`ExplainedNumber` 是结构体**：`Add` 直接改本地副本即可（`result.Add(...)`），无需写回；但**不要**把它塞进字段长期持有，那是副本语义。
- **`includeDescriptions` 要透传**：UI 结算面板依赖它为每一项生成说明文本；传死 `false` 会让玩家看到「治安 +3.5」却不知道来源。

## 参见

- ↔ [DefaultSettlementSecurityModel](../DefaultSettlementSecurityModel)：本契约的默认实现，十三个私有累加器与全部阈值的权威参考。
- ↔ [Settlement](../../campaign/Settlement)：`Town.Security` 的宿主，契约的主要消费方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。
- ↔ [Clan](../../campaign/Clan)：城镇所有者，政策修正的作用对象。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
