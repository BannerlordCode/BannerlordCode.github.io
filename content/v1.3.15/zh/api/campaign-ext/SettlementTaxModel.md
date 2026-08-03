---
title: "SettlementTaxModel"
description: "计算城镇税收、村庄收入税和交易佣金修正的可替换据点模型契约。"
---
# SettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`  
**Base:** `MBGameModel<SettlementTaxModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## 一句话职责

`SettlementTaxModel` 计算城镇每日税收、村庄市场收入应缴税、城镇交易佣金比例，以及低安全度对佣金的影响；它不直接给 Clan 或 Town 增加金币。

## 心智模型

税收模型有两个消费面。`DefaultClanFinanceModel` 在家族每日财政中读取 `CalculateTownTax`；交易 Action 则读取 town/village tax ratio 并把结果用于 `SettlementComponent` 金币和 `TradeTaxAccumulated` 的写回。模型是“该收多少”的规则层，实际金币移动仍由下游行为或 Action 完成。

它还与 [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) 和 [`SettlementSecurityModel`](../SettlementSecurityModel) 互相连接：城镇税收会根据忠诚和安全阈值增加或腐败扣减，而交易佣金会根据安全度重新计算。替换税收模型时应同时核对这些阈值模型的契约。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | 提供战役开始时注册的税收模型。 |
| [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | 提供繁荣、安全、忠诚、政策、建筑和市场收入。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) / [`SettlementSecurityModel`](../SettlementSecurityModel) | 提供税收增益/腐败阈值和解释项。 |
| `DefaultClanFinanceModel` / `SellItemsAction` | 消费返回值并执行家族税收或交易佣金写回。 |

## 公共契约

| 成员 | 真实职责与典型时机 |
| --- | --- |
| `SettlementCommissionRateTown` / `SettlementCommissionRateVillage` | 交易佣金的基础比例。 |
| `SettlementCommissionDecreaseSecurityThreshold` | 低于该安全度后，交易佣金会进入安全度修正。 |
| `MaximumDecreaseBasedOnSecuritySecurity` | 安全度导致的最大佣金降幅百分比。 |
| `GetTownTaxRatio(Town)` / `GetVillageTaxRatio(Village)` | 交易或收入 Action 取得实际税率。 |
| `GetTownCommissionChangeBasedOnSecurity(Town, float)` | 按城镇安全度调整已算出的佣金。 |
| `CalculateTownTax(Town, bool)` | 返回可解释的每日城镇税收。 |
| `CalculateVillageTaxFromIncome(Village, int)` | 把村庄市场收入转换成整数税额。 |

## 真实获取路径

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Settlement townSettlement = Settlement.All.FirstOrDefault(settlement => settlement.IsTown);
Settlement villageSettlement = Settlement.All.FirstOrDefault(settlement => settlement.IsVillage);
SettlementTaxModel model = Campaign.Current.Models.SettlementTaxModel;

if (townSettlement?.Town != null)
{
    Town town = townSettlement.Town;
    float townRatio = model.GetTownTaxRatio(town);
    float dailyTax = model.CalculateTownTax(town, includeDescriptions: true).ResultNumber;
    float adjustedCommission = model
        .GetTownCommissionChangeBasedOnSecurity(town, 100f);
}

if (villageSettlement?.Village != null)
{
    int villageTax = model.CalculateVillageTaxFromIncome(
        villageSettlement.Village, marketIncome: 100);
}
```

读取应发生在 Campaign 已启动之后。替换模型应在 `CampaignGameStarter.AddModel` 中注册，而不是在交易执行期间创建临时实例。

## 风险与版本边界

- `CalculateTownTax` 是每日税收结果，不是已写入 Clan 金库的余额；重复应用会制造金币。
- `GetTownCommissionChangeBasedOnSecurity` 的输入是已计算的佣金，不是交易总价；单位混用会造成双重税收或负佣金。
- 低忠诚/低安全的阈值来自其他 Model；只改税率而忽略它们会让解释面板与实际税收不一致。
- `SellItemsAction` 会把佣金写入交易税累计；不要在 Model 内部调用 `ChangeGold`、`GiveGoldAction` 或修改 `TradeTaxAccumulated`。
- 城镇和村庄的税率参数可能受政策影响，跨版本时以目标版本的 `DefaultSettlementTaxModel` 为准。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultSettlementTaxModel](../DefaultSettlementTaxModel)
- [相关：SettlementSecurityModel](../SettlementSecurityModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [下游：Town](../../campaign/Town) · [ClanFinanceModel](../ClanFinanceModel)
