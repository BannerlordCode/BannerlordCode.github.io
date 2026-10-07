---
title: "DefaultClanFinanceModel"
description: "家族财政规则模型：计算家族每日收入（税收、关税、贡金、商队、工坊）和支出（工资、雇佣兵、王国预算、债务），是家族经济系统的核心计算器。"
---
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**Base:** `ClanFinanceModel`（抽象类，位于 `TaleWorlds.CampaignSystem.ComponentInterfaces`）
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## 概述

`DefaultClanFinanceModel` 是战役层家族财政子系统的默认规则实现，继承自抽象类 `ClanFinanceModel`。它负责计算家族每日的金币变化，包括：

**收入来源**：城镇税收（`SettlementTaxModel`）、关税（含 perk 加成）、村庄收入、商队贸易利润分成、工坊利润分成、贡金、雇佣兵津贴、王国预算分配、政策加成（LandTax、WarTax、RoadTolls、StateMonopolies 等）、领袖资产收入（商队、工坊、小巷）。

**支出类型**：部队工资（主部队、商队、驻军）、雇佣兵费用、贡金支出、召集军队费用、自动招募费用、王国预算贡献、债务偿还、工坊运营费。

这个模型是家族经济的**单一事实来源**，被 `ClanVariablesCampaignBehavior`（每日结算）、`ClanManagementVM`（UI 显示）、`AchievementsCampaignBehavior`（成就判定）等广泛引用。

## 心智模型

把 `DefaultClanFinanceModel` 想成家族财务的**每日结算引擎**：

- **谁创建它**：`SandBoxManager` 在 `InitializeGameStarter` 阶段通过 `AddModel<ClanFinanceModel>(new DefaultClanFinanceModel())` 注册。
- **谁持有它**：`GameModels` 容器解析为 `Campaign.Current.Models.ClanFinanceModel`。
- **谁调用它**：`ClanVariablesCampaignBehavior` 每日调用 `CalculateClanGoldChange` 结算金币；`ClanManagementVM` 调用 `CalculateClanIncome` 显示收入；`ClanPartyItemVM` 调用 `CalculateOwnerIncomeFromCaravan` 显示商队收入。
- **核心模式**：所有计算方法都返回 `ExplainedNumber`，支持 `includeDescriptions` 参数控制是否携带来源明细。`applyWithdrawals` 参数控制是否实际扣除累积值（如 `TradeTaxAccumulated`）。
- **收入平滑**：`RevenueSmoothenFraction` 返回 5.0，所有累积收入（关税、村庄税）都除以这个值再计入每日收入，避免单日收入波动过大。
- **怎么改它**：继承并覆盖你关心的成员，在 `SubModule.InitializeGameStarter` 中注册。例如想让商队收入更高，就覆盖 `CalculateOwnerIncomeFromCaravan`。

注意：这个模型只负责"算账"，不负责"转账"。实际的金币转移由 `GiveGoldAction.ApplyBetweenCharacters` 等 Action 完成。

## 主要属性

| Name | Signature | 说明 |
|------|-----------|------|
| `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold { get; }` | 部队贸易金币下限，硬编码为 `5000`。当部队贸易金币低于此值时，不再从该部队扣除工资。 |

## 主要方法

### CalculateClanGoldChange
`public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算家族每日总金币变化（收入 + 支出）。内部依次调用 `CalculateClanIncomeInternal` 和 `CalculateClanExpensesInternal`，结果累加到同一个 `ExplainedNumber` 中。这是家族财务结算的入口方法。

```csharp
// 来自 ClanVariablesCampaignBehavior.cs:402 的真实调用方式
int num = MathF.Round(Campaign.Current.Models.ClanFinanceModel
    .CalculateClanGoldChange(clan, false, true, false).ResultNumber);
GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, num, true);
```

### CalculateClanIncome
`public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算家族每日总收入。依次累加：统治家族收入、雇佣兵收入、定居点收入、领袖资产收入、部队贸易分成、贡金、召集军队津贴、王国预算、政策加成、SpringOfGold perk。

### CalculateClanExpenses
`public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算家族每日总支出。依次累加：部队和驻军工资、雇佣兵费用、贡金支出、召集军队费用、自动招募费用、王国预算贡献、债务偿还、工坊运营费。

### CalculateClanExpensesInternal
`public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 支出计算的核心实现（供 `CalculateClanExpenses` 和 `CalculateClanGoldChange` 共用）。处理工资扣除时的预算检查：当家族金币低于阈值时，AI 家族会减少工资支付，玩家家族则正常扣除。

### CalculateTownIncomeFromTariffs
`public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**用途 / Purpose:** 计算城镇关税收入。以 `town.TradeTaxAccumulated / RevenueSmoothenFraction()` 为基准，叠加 perk 加成（ContentTrades、Steady、SaltTheEarth、GivingHands）和建筑效果（TariffIncome）。`applyWithdrawals` 为 `true` 时扣除累积值并触发 `OnPlayerEarnedGoldFromAsset` 事件。

```csharp
// 来自 ClanSettlementItemVM.cs:215 的真实调用方式
int num3 = (int)Campaign.Current.Models.ClanFinanceModel
    .CalculateTownIncomeFromTariffs(Clan.PlayerClan, town, false).ResultNumber;
```

### CalculateTownIncomeFromProjects
`public override int CalculateTownIncomeFromProjects(Town town)`

**用途 / Purpose:** 计算城镇建筑项目带来的收入。包括 `DenarByBoundVillageHeartPerDay` 建筑效果和总督的 `ArchitecturalCommisions` perk 加成。

### CalculateVillageIncome
`public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**用途 / Purpose:** 计算村庄每日收入。以 `village.TradeTaxAccumulated / RevenueSmoothenFraction()` 为基准，考虑劫掠状态（Looted/BeingRaided 时收入为 0）、LandTax 政策扣除、总督 perk 加成（ForestKin、Logistician）。

### CalculateOwnerIncomeFromCaravan
`public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**用途 / Purpose:** 计算领袖从商队贸易中获得的收入。公式为 `max(0, caravan.PartyTradeGold - GetInitialTradeGold(...)) / RevenueSmoothenFraction()`，即贸易利润超过初始本金的部分除以平滑系数。

```csharp
// 来自 ClanPartyItemVM.cs:122 的真实调用方式
this.Income = Campaign.Current.Models.ClanFinanceModel
    .CalculateOwnerIncomeFromCaravan(party.MobileParty);
```

### CalculateOwnerIncomeFromWorkshop
`public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**用途 / Purpose:** 计算领袖从工坊获得的收入。公式为 `max(0, workshop.ProfitMade) / RevenueSmoothenFraction()`，即工坊利润除以平滑系数。

### RevenueSmoothenFraction
`public override float RevenueSmoothenFraction()`

**用途 / Purpose:** 返回收入平滑系数，硬编码为 `5.0`。所有累积收入（关税、村庄税、商队利润、工坊利润）都除以此值再计入每日收入，避免单日收入波动过大。

### CalculateNotableDailyGoldChange
`public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**用途 / Purpose:** 计算知名英雄（Notable）的每日金币变化。包括该英雄拥有的商队收入、工坊收入和小巷收入。用于给 NPC 英雄发放每日津贴。

```csharp
// 来自 ClanVariablesCampaignBehavior.cs:472 的真实调用方式
GiveGoldAction.ApplyBetweenCharacters(null, hero,
    Campaign.Current.Models.ClanFinanceModel.CalculateNotableDailyGoldChange(hero, true), true);
```

### AssetIncomeType (enum)
`public enum AssetIncomeType`

**用途 / Purpose:** 资产收入类型枚举，用于 `OnPlayerEarnedGoldFromAsset` 事件。值为：`Workshop`、`Caravan`、`Taxes`、`TributesEarned`。当玩家从资产获得金币时，此枚举标识收入来源。

## 使用示例

### 示例 1：读取家族每日收支

```csharp
// 在 CampaignBehaviorBase 或任何战役运行期代码中
Clan clan = Clan.PlayerClan;
ExplainedNumber income = Campaign.Current.Models.ClanFinanceModel
    .CalculateClanIncome(clan, true, false, false);
ExplainedNumber expenses = Campaign.Current.Models.ClanFinanceModel
    .CalculateClanExpenses(clan, true, false, false);
InformationManager.DisplayMessage(new InformationMessage(
    $"每日收入：{income.ResultNumber:F0}，支出：{expenses.ResultNumber:F0}"));
```

### 示例 2：子类化并替换，提高商队收入

```csharp
public class MyClanFinanceModel : DefaultClanFinanceModel
{
    // 商队收入翻倍
    public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)
    {
        return base.CalculateOwnerIncomeFromCaravan(caravan) * 2;
    }
}

// 在 SubModule.InitializeGameStarter 中注册
protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyClanFinanceModel());
}
```

### 示例 3：修改收入平滑系数

```csharp
public class MyClanFinanceModel : DefaultClanFinanceModel
{
    // 把平滑系数从 5 改为 3，让收入更快到账
    public override float RevenueSmoothenFraction() => 3f;
}
```

### 示例 4：监听资产收入事件

```csharp
// 在 CampaignBehaviorBase.RegisterEvents 中订阅
CampaignEventDispatcher.Instance.OnPlayerEarnedGoldFromAsset += (type, amount) =>
{
    InformationManager.DisplayMessage(new InformationMessage(
        $"资产收入类型：{type}，金额：{amount}"));
};
```

## 依赖关系

- 上游：[SandBoxManager](../SandBoxManager) 在 `InitializeGameStarter` 阶段通过 `AddModel<ClanFinanceModel>` 注册此实例。
- 持有：[GameModels](../GameModels) 通过 `GetGameModel<ClanFinanceModel>()` 解析并暴露为 `Campaign.Current.Models.ClanFinanceModel`。
- 下游：[ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) 每日调用 `CalculateClanGoldChange` 和 `CalculateNotableDailyGoldChange` 结算金币。
- UI 层：[ClanManagementVM](../../viewmodel/ClanManagementVM) 调用 `CalculateClanIncome` 显示家族收入；[ClanPartyItemVM](../../viewmodel/ClanPartyItemVM) 调用 `CalculateOwnerIncomeFromCaravan` 显示商队收入。
- 税收模型：[SettlementTaxModel](../SettlementTaxModel) 提供城镇税收计算，被 `CalculateClanIncomeInternal` 调用。
- 商队模型：[CaravanModel](../CaravanModel) 提供 `GetInitialTradeGold` 计算商队初始本金。
- 士气模型：[PartyMoraleModel](../PartyMoraleModel) 提供 `GetDailyNoWageMoralePenalty` 计算欠薪士气惩罚。
- 基类：[ClanFinanceModel](../ClanFinanceModel) 定义抽象契约，位于 `ComponentInterfaces` 命名空间。
- 数值模式：[ExplainedNumber](../ExplainedNumber) 是大多数方法的返回类型，支持携带来源说明。

## 参见

- [本区域目录](../)
- [ClanFinanceModel](../ClanFinanceModel) — 抽象基类，定义家族财政模型的接口契约
- [Clan](../Clan) — 家族实体，持有金币和资产
- [SettlementTaxModel](../SettlementTaxModel) — 城镇税收计算
- [CaravanModel](../CaravanModel) — 商队初始本金计算
- [PartyMoraleModel](../PartyMoraleModel) — 欠薪士气惩罚
- [ExplainedNumber](../ExplainedNumber) — 数值结构，支持携带来源说明
- [Workshop](../Workshop) — 工坊实体，提供利润数据
- [Town](../Town) — 城镇实体，提供关税累积值
- [Village](../Village) — 村庄实体，提供贸易税累积值
