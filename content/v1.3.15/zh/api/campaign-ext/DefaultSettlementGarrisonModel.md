---
title: "DefaultSettlementGarrisonModel"
description: "Bannerlord 默认驻军变化、补充决策、队伍驻军分配与城墙修复规则。"
---
# DefaultSettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`  
**Base:** [`SettlementGarrisonModel`](../SettlementGarrisonModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementGarrisonModel` 用叛乱、问题、驻军强度、工资预算、繁荣、粮食潜力、队伍容量和墙体状态计算默认驻军决策，并把增量、建议人数和修墙上限分别交给对应的 Campaign 行为消费；它不直接操作驻军名册。

## 心智模型

默认模型把“驻军应该怎样变化”拆成三条消费链：每日补充由 `GarrisonRecruitmentCampaignBehavior` 应用；队伍带兵/留兵数量供 AI 行为选择；城墙修复由 `Town` 按每段墙体逐步写回。模型不拥有名册、工资或墙体状态，因此改它不会自动执行任何转移。

基础驻军变化不是所有据点都有：城镇或城堡由叛军占有且不属于王国时增加 `2`，再叠加 `SettlementGarrison` 问题效果。自动招募上限固定为每天 `1`。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementGarrisonModel`](../SettlementGarrisonModel) / [`GameModels`](../GameModels) | 提供契约与默认注册实例。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供城镇类型、驻军强度、粮食、繁荣和城墙状态。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供队伍容量、成员数、领袖、军团和工资限制。 |
| `GarrisonRecruitmentCampaignBehavior` | 每日消费自动招募、基础变化和驻军名册写入。 |
| `Town.RepairWallsOfSettlementDaily` / `BuildingEffectEnum.WallRepairSpeed` | 消费墙体修复上限并应用建筑效果。 |

## 默认规则

| 成员 | 1.4.5 行为 |
| --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | 固定返回 `1`。 |
| `CalculateBaseGarrisonChange` | 叛军城镇/城堡且不属于王国时增加 `2`，并合并 `SettlementGarrison` 问题效果。 |
| `FindNumberOfTroopsToTakeFromGarrison` | 以当前驻军强度与理想驻军强度的 `1.5` 次方、队伍容量和领袖身份估计可带走人数，保留城镇 `50`/城堡 `25` 名正规兵底线。 |
| `FindNumberOfTroopsToLeaveToGarrison` | 结合领地经济、繁荣、粮食、驻军缺口、队伍伤员和军团状态，返回最多约 `70%` 的可用正规兵比例。 |
| `GetMaximumDailyRepairAmount` | 围城中或墙体全满时为 `0`；否则为 `每段最大生命值 * 墙段数 * 0.04`，再叠加城镇建筑修墙效果。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
if (settlement?.Town != null)
{
    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    ExplainedNumber change = model.CalculateBaseGarrisonChange(
        settlement, includeDescriptions: true);
    float repairAmount = model.GetMaximumDailyRepairAmount(settlement);
    int recruitmentLimit = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
}
```

在 `InitializeGameStarter` 中使用 `gameStarter.AddModel(new MySettlementGarrisonModel())` 替换默认策略。实际把人加入驻军仍由行为和名册 API 完成。

## 风险与版本边界

- 取兵/留兵公式会读取 `LeaderHero`, `PartySizeLimit`, `Army` 和 `GarrisonParty`；测试时不能用未初始化的临时 `MobileParty` 伪造上下文。
- 保留正规兵底线是默认实现防止城镇被一次性抽空的重要边界；删除它会改变守城和存档长期状态。
- 修墙方法由 `Town` 按段消费，返回值变大并不等于立刻修满；直接把它当比例会造成重复修复。
- 该 Model 没有保存字段；把 AI 决策缓存放进其中会引入生命周期和存档兼容问题。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementGarrisonModel](../SettlementGarrisonModel)
- [相关：SettlementFoodModel](../SettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel)
- [下游：Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty)
