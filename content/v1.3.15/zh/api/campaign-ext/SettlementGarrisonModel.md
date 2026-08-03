---
title: "SettlementGarrisonModel"
description: "计算据点驻军增长、自动招募、队伍进出驻军数量和城墙修复上限的模型契约。"
---
# SettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`  
**Base:** `MBGameModel<SettlementGarrisonModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## 一句话职责

`SettlementGarrisonModel` 决定据点每日基础驻军变化、自动招募上限、队伍从驻军带走/留下多少人，以及城墙每天最多修复多少；它不直接改名册或墙体生命值。

## 心智模型

这是驻军“政策层”，不是驻军队伍本身。`GarrisonRecruitmentCampaignBehavior` 在每日据点阶段读取前两个方法并应用到驻军，`Town.RepairWallsOfSettlementDaily` 读取修复上限后才修改城墙比例。两个 `FindNumber...` 方法是 AI 队伍决策的建议数量，返回值不是已经执行的转移。

方法参数隐含了前置条件：`FindNumber...` 需要 `settlement.Town.GarrisonParty`、队伍规模和所有者关系等运行态；在村庄、未初始化的主队或没有驻军时应先检查，不能把它们当成纯静态数学函数。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | 持有战役注册的驻军模型。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供据点、驻军、繁荣、粮食、墙体和所有者上下文。 |
| `GarrisonRecruitmentCampaignBehavior` | 应用基础驻军变化和自动招募结果。 |
| [`MobileParty`](../../campaign/MobileParty) / `PartyRoster` | 接收队伍进出驻军的建议数量，实际转移由行为/Action 完成。 |
| `Town.RepairWallsOfSettlementDaily` | 把最大修复量应用到每段城墙生命比例。 |

## 公共契约

| 成员 | 真实职责与典型时机 |
| --- | --- |
| `GetMaximumDailyAutoRecruitmentCount(Town)` | 返回每天自动补入驻军的人数上限。 |
| `CalculateBaseGarrisonChange(Settlement, bool)` | 返回基础驻军每日增量，可带问题/叛乱解释。 |
| `FindNumberOfTroopsToTakeFromGarrison(MobileParty, Settlement, float)` | AI 队伍从驻军带走的建议人数。 |
| `FindNumberOfTroopsToLeaveToGarrison(MobileParty, Settlement)` | AI 队伍留下的建议人数。 |
| `GetMaximumDailyRepairAmount(Settlement)` | 返回据点每天可修复的城墙生命点数。 |

## 真实获取路径

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
MobileParty party = MobileParty.MainParty;

if (settlement?.Town != null && party != null)
{
    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    int autoRecruit = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
    ExplainedNumber baseChange = model
        .CalculateBaseGarrisonChange(settlement, includeDescriptions: true);
    int leave = model.FindNumberOfTroopsToLeaveToGarrison(party, settlement);
    float repair = model.GetMaximumDailyRepairAmount(settlement);
}
```

查询建议数量只能用于预览或 AI 决策。要改规则，应在 Campaign 启动阶段注册派生 Model；不要在模型方法内操作 `MemberRoster`。

## 风险与版本边界

- `FindNumberOfTroopsToTakeFromGarrison` 和 `FindNumberOfTroopsToLeaveToGarrison` 返回建议，不是转移 Action；再次应用会重复扣兵或增兵。
- 默认实现访问 `settlement.Town.GarrisonParty`，对村庄或没有驻军的据点直接调用可能触发空引用。
- 修复量是城墙生命点数，`Town` 会再除以单段最大生命值并逐段写回；不要把返回值当成 `0..1` 比例。
- 围城中或所有墙段满血时默认修复量为零；自定义实现跳过这两个边界会改变攻城生命周期。
- 驻军数量与粮食、工资、民兵和建筑互相反馈，跨 Model 调参前要检查每日 tick 顺序。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultSettlementGarrisonModel](../DefaultSettlementGarrisonModel)
- [相关：SettlementFoodModel](../SettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel)
- [下游：Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty)
