---
title: "BuildingConstructionModel"
description: "据点建筑每日施工点、储备加速成本与加速收益的可替换战役模型契约。"
---
# BuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`  
**Base:** `MBGameModel<BuildingConstructionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`

## 一句话职责

`BuildingConstructionModel` 规定一个城镇或城堡每天产生多少施工点，以及花费储备加速建筑时应使用的成本和收益；它只计算，不直接修改 `Building.BuildingProgress` 或 `Town.BoostBuildingProcess`。

## 心智模型

把它看成“建筑进度的公式提供者”，而不是建筑队列。`Town.Construction` 和 `Town.ConstructionExplanation` 从 `Campaign.Current.Models.BuildingConstructionModel` 读取它的结果；真正的每日推进由 `BuildingsCampaignBehavior.TickCurrentBuildingForTown` 把施工点加到当前 `Building`，并扣减加速储备。`BuildingHelper.GetDaysToComplete` 也会读取模型，用于估算剩余天数。

这使模型处在 Campaign Model 层：它可以读取繁荣、忠诚、总督、建筑和市场输入，但不应在计算方法中触发 Action、改名册、发钱或把结果再次写回据点。要改规则，替换模型；要执行世界状态变化，使用对应的行为或 Action。

## 何时使用 / 何时不要使用

- 想调整每日施工速度、城镇/城堡加速价格、加速收益或解释面板因素时，继承它并在战役启动阶段注册自定义实现。
- 想显示当前施工点或预计完成时间时，从 `Campaign.Current.Models` 读取当前模型；不要 `new DefaultBuildingConstructionModel()` 绕过已注册的模型。
- 不要用它决定建筑队列顺序；队列选择由 `BuildingScoreCalculationModel` 和 `BuildingsCampaignBehavior` 负责。
- 不要在它的方法里直接改 `BuildingProgress`、`BoostBuildingProcess` 或建筑队列；这会让每日行为重复应用结果，甚至把状态写入错误的 tick 阶段。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | 战役启动后保存并暴露当前注册的模型实例。 |
| [`Town`](../../campaign/Town) / [`Building`](../Building) | 提供繁荣、忠诚、总督、当前建筑、储备和建筑进度；`Town` 暴露计算结果。 |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | 每日把 `Town.Construction` 加到当前建筑，并扣减储备；围城或没有项目时会跳过推进。 |
| [`BuildingHelper`](../BuildingHelper) | 使用无加速施工点和成本估算建筑完成天数。 |
| [`DefaultBuildingConstructionModel`](../DefaultBuildingConstructionModel) / [`BuildingEffectModel`](../BuildingEffectModel) | 前者提供 vanilla 公式，后者是相关建筑效果规则；二者都不替代行为的写回职责。 |

## 公共契约

| 成员 | 用途、时机与副作用 |
| --- | --- |
| `TownBoostCost` | 非城堡据点每一段加速储备对应的成本单位；消费者用它扣除 `Town.BoostBuildingProcess`。它是规则常量，不是当前据点余额。 |
| `TownBoostBonus` | 非城堡据点每段加速储备提供的基础施工收益。总收益可由实现按总督 Perk 调整。 |
| `CastleBoostCost` | 城堡加速储备的成本单位；不能与 `TownBoostCost` 混用。 |
| `CastleBoostBonus` | 城堡每段加速储备提供的基础施工收益。 |
| `CalculateDailyConstructionPower(Town, bool)` | 返回包含或不包含解释文本的 `ExplainedNumber`；`ResultNumber` 是每日施工点，`includeDescriptions` 只影响解释因素。 |
| `CalculateDailyConstructionPowerWithoutBoost(Town)` | 返回不计入 `BoostBuildingProcess` 的每日施工点，供完成时间估算等需要比较基础产能的调用使用。 |
| `GetBoostCost(Town)` | 按据点类型返回当前实现的城镇或城堡加速成本。 |
| `GetBoostAmount(Town)` | 返回一段储备带来的加速施工量；实现可以根据据点总督和 Perk 改变它。 |

## 真实获取与替换

只读当前规则时，应从已初始化的战役模型集合获取：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .FirstOrDefault(settlement => settlement.IsTown && settlement.Town != null)
    ?.Town;

if (Campaign.Current != null && town != null)
{
    BuildingConstructionModel model = Campaign.Current.Models.BuildingConstructionModel;
    ExplainedNumber explanation = model.CalculateDailyConstructionPower(
        town, includeDescriptions: true);
    int basePower = model.CalculateDailyConstructionPowerWithoutBoost(town);
    int boostCost = model.GetBoostCost(town);
}
```

自定义模型应在 `CampaignGameStarter` 初始化阶段登记，而不是在每日 tick 中替换：

```csharp
if (gameStarter is CampaignGameStarter campaignStarter)
{
    campaignStarter.AddModel(new MyBuildingConstructionModel());
}
```

## 风险与版本边界

- `CalculateDailyConstructionPower` 返回的是“本日施工点”，不是新的 `BuildingProgress`；自行再加一次会使建筑加速两次。
- `CalculateDailyConstructionPowerWithoutBoost` 可能被 `BuildingHelper.GetDaysToComplete` 用作除数；自定义实现不应在有产能的据点返回零，除非同时处理所有调用者的除零路径。
- `BuildingsCampaignBehavior` 在围城或项目队列为空时不会推进建筑；模型本身不应为了“修复”这些状态而偷偷写回队列。
- `TownBoostCost`/`CastleBoostCost` 既参与每日扣储备，也参与剩余天数估算；只改其中一条逻辑会让 UI 预计时间和实际进度不一致。
- 模型访问依赖 `Campaign.Current.Models` 已完成装配。不要在 `OnSubModuleLoad` 这种 Campaign 尚未建立的阶段查询据点模型。
- 本页以 1.4.5 源码作为规则语义依据；1.3.15 的公开契约应以实际运行版本的实现和调用点复核，不能把默认常量当成跨版本保证。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultBuildingConstructionModel](../DefaultBuildingConstructionModel)
- [相关：BuildingScoreCalculationModel](../BuildingScoreCalculationModel) · [BuildingEffectModel](../BuildingEffectModel)
- [消费端：Town](../../campaign/Town) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
