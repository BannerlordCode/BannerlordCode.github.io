---
title: "SettlementSecurityModel"
description: "计算城镇治安变化以及税收、忠诚和经济系统使用的治安因素。"
---
# SettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`  
**Base:** `MBGameModel<SettlementSecurityModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementSecurityModel.cs`

## One-line job

`SettlementSecurityModel` 解释城镇每日治安变化，以及附近劫掠和击败土匪带来的临时治安因素。它不直接修改 `Town.Security`，也不创建劫掠事件。

## Mental Model

`Town.SecurityChange` 在每日 tick 和 UI 预览中读取本 Model。税收与忠诚模型会再次读取治安阈值；战役行为负责记录劫掠或土匪战斗，并在后续 tick 把结果作为输入。因此所有方法必须是只读、可重复的计算。

```text
Town + garrison + gangs + nearby outcomes
        -> Campaign.Current.Models.SettlementSecurityModel
        -> CalculateSecurityChange / raid effects
        -> settlement behavior -> Town.Security
        -> loyalty / tax / economy
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有活动 Model 注册表。 |
| [`Town`](../../campaign/Town) | 提供治安、驻军、帮派和所有者上下文。 |
| [`MapEvent`](../../campaign/MapEvent) | 提供附近队伍强度和战斗结果。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 在忠诚公式中消费治安阈值。 |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | 暴露 `SecurityChange` 和解释。 |
| `DefaultSettlementTaxModel` | 使用高/低治安税收效果。 |
| `DefaultSettlementLoyaltyModel` | 使用高/低治安忠诚因素。 |
| `DefaultSettlementProsperityModel` | 把治安作为经济输入。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `CalculateSecurityChange` | 计算每日治安变化。 | 城镇 tick、UI |
| `GetLootedNearbyPartySecurityEffect` | 把被攻击队伍强度转换为负面效果。 | 劫掠结算 |
| `GetNearbyBanditPartyDefeatedSecurityEffect` | 把击败土匪转换为正面效果。 | MapEvent 结算 |
| `CalculateGoldGainDueToHighSecurity` | 添加高治安税收因素。 | 税收预览 |

## Real access path

```csharp
public ExplainedNumber ExplainSecurity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.SettlementSecurityModel
        .CalculateSecurityChange(town, includeDescriptions: true);
}
```

劫掠辅助方法也只是计算：

```csharp
float loss = Campaign.Current.Models.SettlementSecurityModel
    .GetLootedNearbyPartySecurityEffect(town, attackedPartyStrength);
```

行为系统才记录事件；Model 不能在计算 `loss` 时调用 Action 或修改城镇。

## 风险与调试顺序

1. 劫掠效果和每日变化是不同输入，不要相互替代。
2. 保留无驻军、无帮派和所有者文化不同等 vanilla 分支。
3. 治安保存于 Town，Model 无状态；不要给替换 Model 加保存字段。
4. 改动高/低治安因素时同步检查税收和忠诚页面。
5. 预览路径不能使用随机数，随机结果应由事件解析器产生。

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [SettlementProsperityModel](../SettlementProsperityModel)
- [MapEvent](../../campaign/MapEvent)
