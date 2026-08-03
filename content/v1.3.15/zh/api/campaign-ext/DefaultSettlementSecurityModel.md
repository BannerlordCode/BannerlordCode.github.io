---
title: "DefaultSettlementSecurityModel"
description: "默认城镇治安漂移、附近战斗影响和税收因素的源码驱动实现。"
---
# DefaultSettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`  
**Base:** [`SettlementSecurityModel`](../SettlementSecurityModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`（1.4.5 权威源码；1.3.15 同名实现）

## 一句话职责

`DefaultSettlementSecurityModel` 计算城镇每日治安变化，并把附近劫掠、击败土匪、驻军、繁荣、政策、问题、建筑、巡逻队和 Perk 转成可解释因素。它还提供税收因子，但不直接写 `Town.Security`。

## 心智模型

`Town.SecurityChange` 与解释属性读取 `Campaign.Current.Models.SettlementSecurityModel`。每日城镇 tick 才会把结果写回治安状态；`TownSecurityCampaignBehavior` 负责在地图事件和据点清理事件之后应用附近战斗的直接增减。因此 `CalculateSecurityChange`、附近战斗效果和税收效果是三个不同的契约，不能把它们合并成一个 setter。

默认每日公式依次考虑附近 hideout、被劫掠村庄、围城、繁荣、驻军、政策、总督、项目、问题、Perk、治安漂移和巡逻队。驻军强度还会经 `MilitaryPowerModel` 计算，说明项用于 UI 和调试。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | 提供已注册的治安 Model 与地图时间/距离上下文。 |
| [`Town`](../../campaign/Town) | 提供治安、繁荣、驻军、建筑、帮派和所有者状态，并暴露 `SecurityChange`。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 使用治安阈值和高/低治安忠诚因素。 |
| `TownSecurityCampaignBehavior` / [`MapEvent`](../../campaign/MapEvent) | 使用半径与附近战斗效果，并负责写入治安。 |
| `DefaultSettlementTaxModel` | 使用高治安加税和低治安腐败因子。 |

## 默认契约与公式锚点

| 成员 | 1.4.5 默认值 | 含义 |
| --- | ---: | --- |
| `MaximumSecurityInSettlement` / `SecurityDriftMedium` | `100` / `50` | 治安上界与漂移中心。 |
| `MapEventSecurityEffectRadius` | `50f` | 地图事件影响城镇的距离半径。 |
| `HideoutClearedSecurityEffectRadius` / `HideoutClearedSecurityGain` | `100f` / `6` | 清理 hideout 后的范围与治安增益。 |
| `ThresholdForTaxBoost` | `75` | 高治安税收加成起点。 |
| `ThresholdForTaxCorruption` / `ThresholdForHigherTaxCorruption` | `50` / `0` | 低治安税收惩罚区间。 |
| `SettlementTaxBoostPercentage` / `SettlementTaxPenaltyPercentage` | `5` / `10` | 高治安加成和低治安惩罚百分比。 |
| `ThresholdForNotableRelationBonus` / `ThresholdForNotableRelationPenalty` | `75` / `50` | 名人关系效果的治安边界。 |
| `DailyNotableRelationBonus` / `DailyNotableRelationPenalty` | `1` / `-1` | 每日关系因素。 |
| `DailyNotablePowerBonus` / `DailyNotablePowerPenalty` | `1` / `-1` | 每日影响力因素。 |

默认实现的主要常量包括：被劫掠村庄 `-2`、围城 `-3`、附近 hideout `-2`，繁荣对治安最多 `-5` 且每点繁荣为 `-0.0005`，治安漂移为 `-(security - 50) / 15`。驻军、政策、建筑、问题和 Perk 会继续添加 `ExplainedNumber` 项；没有驻军或没有有效巡逻队时相应分支为零。

`GetLootedNearbyPartySecurityEffect` 返回 `-0.005 * strength`，`GetNearbyBanditPartyDefeatedSecurityEffect` 返回 `0.005 * strength`。它们只计算事件影响，不判断事件是否合法，也不执行 `+=`。

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Campaign campaign = Campaign.Current;
SettlementSecurityModel model = campaign.Models.SettlementSecurityModel;
Town town = Town.AllTowns.FirstOrDefault();
if (town != null)
{
    ExplainedNumber change = model.CalculateSecurityChange(town, includeDescriptions: true);
    float banditEffect = model.GetNearbyBanditPartyDefeatedSecurityEffect(town, 20f);
}
```

替换时使用抽象接口注册，而不是在地图事件中 `new` 一个临时实例：

```csharp
public sealed class ModSettlementSecurityModel : DefaultSettlementSecurityModel
{
    public override float HideoutClearedSecurityEffectRadius => 120f;
}

public override void InitializeGameStarter(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel(new ModSettlementSecurityModel());
}
```

## 风险与版本边界

- 模型返回值会被 UI、每日 tick 和事件 Behavior 重复读取，不能在计算中调用 Action 或修改城镇。
- `MapEventSecurityEffectRadius` 和 hideout 半径按世界地图距离使用平方比较；把它当作 `float` 数值增益会造成错误影响范围。
- 驻军强度依赖 `MilitaryPowerModel`，替换多个 Model 时要检查递归依赖和总量单位。
- 修改治安阈值时必须同步检查忠诚和税收页面；治安状态本身由 `Town` 保存，不属于无状态 Model。
- 本页公式和数值以 1.4.5 `Bannerlord.Source/bin` 为准，1.3.15 发布前需复核对应 DLL。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementSecurityModel](../SettlementSecurityModel)
- [相关：SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementProsperityModel](../SettlementProsperityModel)
- [事件输入：MapEvent](../../campaign/MapEvent)
