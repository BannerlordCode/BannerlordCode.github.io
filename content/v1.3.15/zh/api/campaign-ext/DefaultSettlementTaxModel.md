---
title: "DefaultSettlementTaxModel"
description: "Bannerlord 默认据点税率、繁荣税收、政策扣减以及安全/忠诚腐败规则。"
---
# DefaultSettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`  
**Base:** [`SettlementTaxModel`](../SettlementTaxModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementTaxModel` 将繁荣、政策、总督 Perk、问题、建筑、忠诚和安全组合为默认税收；另外提供交易佣金和村庄收入税率。它把这些因素作为可解释的计算结果交给财政和交易流程，而不是自行修改城镇或家族金币。

## 心智模型

默认每日城镇税从 `prosperity * 0.35` 开始，再经过政策扣减、Perk、文化、问题、建筑和安全/忠诚效果，最后 clamp 到不小于零。`DefaultClanFinanceModel` 读取这个解释结果用于财政项目；交易则走 `SellItemsAction` 的比例和佣金入口。模型永远只返回数值，金币和累计税额由下游写回。

基础比例是另一条路径：城镇佣金为 `0.7`，村庄佣金为 `1.0`；Crown Duty 会让城镇比例增加 `5%`，Land Grants for Veterans 会让村庄比例减少 `5%`。城镇安全低于 `75` 时，交易佣金最多按 `10%` 下降。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementTaxModel`](../SettlementTaxModel) / [`GameModels`](../GameModels) | 定义契约并暴露当前注册的实现。 |
| [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | 提供繁荣、政策归属、安全、忠诚、市场收入和建筑效果。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) / [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 提供高安全/高忠诚税收增益和低值腐败扣减。 |
| `DefaultClanFinanceModel` / `SellItemsAction` | 将结果应用到财政、佣金和交易税累计。 |

## 默认公式

| 成员/阶段 | 1.4.5 行为 |
| --- | --- |
| `GetTownTaxRatio` | 基础 `0.7`；有 `CrownDuty` 时乘以 `1.05`。 |
| `GetVillageTaxRatio` | 基础 `1.0`；有 `LandGrantsForVeterans` 时减少 `5%`。 |
| `GetTownCommissionChangeBasedOnSecurity` | 安全度低于 `75` 时，把差值映射到最多 `10%` 的佣金降幅。 |
| 每日原始税 | `prosperity * 0.35`，再应用 Council of the Commons、Magistrates、Bailiffs、Tribunes of the People、Cantons 等政策。 |
| 忠诚/安全效果 | 通过当前注册的 Loyalty/Security Model 的税收 helper 增加或扣减；极低忠诚会添加 `Very Low Loyalty` 因素。 |
| 收尾 | 合并问题、建筑和 Perk 效果后执行 `Clamp(0, float.MaxValue)`。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null)
{
    SettlementTaxModel model = Campaign.Current.Models.SettlementTaxModel;
    ExplainedNumber tax = model.CalculateTownTax(town, includeDescriptions: true);
    float commission = model.GetTownCommissionChangeBasedOnSecurity(town, 100f);
}
```

定制实现应在启动阶段通过 `gameStarter.AddModel(new MySettlementTaxModel())` 注册。若需要保留 vanilla 计算，可在派生类中组合默认实现；不要在 `CalculateTownTax` 中直接给 Clan 或 Settlement 加钱。

## 风险与版本边界

- 税收、佣金比例和交易总价是不同单位；把 `CalculateTownTax` 的结果当成佣金会在交易路径再次扣税。
- 默认税收调用 Loyalty/Security Model 的 helper；替换其中任一模型后，应验证阈值和 `ExplainedNumber` 因素仍然有意义。
- 交易路径先计算佣金，再由 `SellItemsAction` 改变据点金币并累积交易税；模型里做写回会导致重复变更。
- `CalculateVillageTaxFromIncome` 对零收入直接返回零，并将收入按当前注册的村庄税率转成整数；不要假设所有税收都有解释对象。
- 本页常量和政策名单以 1.4.5 源码为准；不要把 1.3.15 的规则差异静默当作兼容行为。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementTaxModel](../SettlementTaxModel)
- [相关：SettlementSecurityModel](../SettlementSecurityModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [下游：ClanFinanceModel](../ClanFinanceModel) · [Town](../../campaign/Town)
