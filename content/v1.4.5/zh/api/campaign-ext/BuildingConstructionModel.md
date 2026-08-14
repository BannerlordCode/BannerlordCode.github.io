---
title: "BuildingConstructionModel"
description: "据点建筑每日施工点、储备加速成本与加速收益的可替换战役模型契约。"
---
# BuildingConstructionModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`  
**基类:** `MBGameModel<BuildingConstructionModel>`  
**源文件:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\BuildingConstructionModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingConstructionModel.cs`

## 一句话职责

它规定一个城镇或城堡每天应产生多少施工点，以及花费储备加速建筑时应使用的成本与收益；它只做计算，不直接修改 `Building.BuildingProgress` 或 `Town.BoostBuildingProcess`。地图 AI、经济面板和建筑完成估算都把这个结果当作共享规则，因此自定义实现影响的是所有读取者，而不是某一个 UI 数字。

## 心智模型

把它看成“建筑进度的公式提供者”，而不是建筑队列。`Town.Construction` 与 `Town.ConstructionExplanation` 从 `Campaign.Current.Models.BuildingConstructionModel` 读取它的结果；真正的每日推进由 `BuildingsCampaignBehavior.TickCurrentBuildingForTown` 把施工点加到当前 `Building.BuildingProgress`，并按据点类型扣减 `Town.BoostBuildingProcess`。`BuildingHelper.GetDaysToComplete` 也会读取模型来估算剩余天数。

计算链是：繁荣、忠诚、总督、当前建筑类型、市场产出和建筑效果等输入，先进入 `CalculateDailyConstructionPower`，再到 `Town.Construction` 暴露的整型结果，最后由 `BuildingsCampaignBehavior` 的每日 tick 写回 `Building.BuildingProgress` 并存档。

使用这个模型，是为了改变所有消费者看到的“计算结果”。如果目标是让建筑立刻完成、改队列顺序或扣金币，应使用 `BuildingHelper`、`BuildingScoreCalculationModel` 或对应的 Action，不要在模型的计算回调里写 `BuildingProgress`、`BoostBuildingProcess`、招募单位或转移资金——那会把一个只读查询变成每个 tick 都重复执行的副作用。`includeDescriptions` 只控制 `ExplainedNumber` 是否记录因素说明，不应改变数值。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例；默认实现是 `DefaultBuildingConstructionModel`，由战役系统通过 `GameModels` 在初始化时登记。自定义模型必须在 `CampaignGameStarter` 的模型注册阶段（通常在 `MBSubModuleBase.OnCampaignStart` 中通过 `starter.AddModel(...)`）完成登记，且要在任何据点每日 tick 之前。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 何时使用 / 何时不要使用

- 想调整每日施工速度、城镇/城堡加速价格、加速收益或解释面板因素时，继承它并在战役启动阶段注册自定义实现。
- 想显示当前施工点或预计完成时间时，从 `Campaign.Current.Models` 读取当前模型；不要 `new DefaultBuildingConstructionModel()` 绕过已注册的模型。
- 不要用它决定建筑队列顺序；队列选择由 `BuildingScoreCalculationModel` 与 `BuildingsCampaignBehavior` 负责。
- 不要在它的方法里直接改 `BuildingProgress`、`BoostBuildingProcess` 或建筑队列；这会让每日行为重复应用结果，甚至把状态写入错误的 tick 阶段。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表。 |
| [`Town`](../../campaign/Town) | 提供繁荣、忠诚、总督、当前建筑、储备与建筑进度；`Town.Construction` 暴露计算结果。 |
| [`Building`](../Building) | 提供当前建筑类型、等级与 `BuildingProgress`。 |
| [`GameModels`](../GameModels) | 战役启动后保存并暴露当前注册的模型实例。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | 每日把 `Town.Construction` 加到当前建筑，并按 `TownBoostCost`/`CastleBoostCost` 扣减储备；围城或没有项目时跳过推进。 |
| [`BuildingHelper`](../BuildingHelper) | 用无加速施工点与成本估算完成天数；`BoostBuildingProcessWithGold` 改储备余额。 |
| [`Town`](../../campaign/Town) | 暴露 `Construction`、`ConstructionExplanation` 供 UI 与行为消费。 |
| [`BuildingScoreCalculationModel`](../BuildingScoreCalculationModel) | 决定下一个建筑与每日项目；本模型不管队列。 |

### 相关与存档边界

- [`DefaultBuildingConstructionModel`](../DefaultBuildingConstructionModel) 提供 vanilla 公式：繁荣×0.01、储备加速、忠诚修正、市场产出、建筑效果与文化特征。
- [`BuildingEffectModel`](../BuildingEffectModel) 是相邻的建筑效果规则，本模型通过 `Town.AddEffectOfBuildings(ConstructionPerDay, ...)` 读取其效果。
- 模型结果本身没有存档字段，也不派发事件；建筑进度由 `Building.BuildingProgress` 与 `Town.BoostBuildingProcess` 经 `BuildingsCampaignBehavior` 的每日 tick 写回并存档。

## 成员契约

按主题分组：配置类常量（规则参数，注册或展示时读取）与计算类方法（每日 tick 或 UI 读取时调用）。

| 成员 | 用途、时机与副作用 |
| --- | --- |
| `TownBoostCost` | 非城堡据点每段加速储备的成本单位；vanilla 为 `500`。消费者用它扣减 `Town.BoostBuildingProcess`。它是规则常量，不是当前据点余额。 |
| `TownBoostBonus` | 非城堡据点每段加速储备提供的基础施工收益；vanilla 为 `50`。 |
| `CastleBoostCost` | 城堡加速储备的成本单位；vanilla 为 `250`。不可与 `TownBoostCost` 混用。 |
| `CastleBoostBonus` | 城堡每段加速储备提供的基础施工收益；vanilla 为 `20`。 |
| `CalculateDailyConstructionPower(Town, bool includeDescriptions = false)` | 返回含/不含解释文本的 `ExplainedNumber`；`ResultNumber` 即每日施工点。`includeDescriptions` 只影响解释因素，不改变数值。由 `Town.Construction`/`ConstructionExplanation` 在读取时调用。 |
| `CalculateDailyConstructionPowerWithoutBoost(Town)` | 返回不计入 `BoostBuildingProcess` 的每日施工点；`BuildingHelper.GetDaysToComplete` 用作除数估算基础产能。 |
| `GetBoostCost(Town)` | 按据点类型返回当前实现中的城镇或城堡加速成本（`TownBoostCost` 或 `CastleBoostCost`）。 |
| `GetBoostAmount(Town)` | 返回一段储备带来的加速施工量；vanilla 会按据点总督的 `Steward.Relocation`/`Trade.SpringOfGold` Perk 增加。 |

默认实现的可观察因素：繁荣×0.01 是基础产能；储备按 `BoostBuildingProcess / 成本` 比例注入加速；总督技能（`TownProjectBuildingBonus`、`Steward.ForcedLabor`、监狱劳力、`Engineering` 系列 Perk）与建筑类型相关 Perk（如壁垒/军营的 `Stonecutters`）继续修正；市场 `BonusToProduction` 产出按 0.25 倍加成；`Town.AddEffectOfBuildings(ConstructionPerDay, ...)` 加入建筑效果；忠诚 ≥75 加 0~0.2 因子，25~50 减因子，≤25 限制结果为 0；拥有 `BattanianConstructionFeat` 文化的据点额外加成；最终结果 `LimitMin(0)`。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，与 `Town.Construction` 和 `Town.ConstructionExplanation` 的读取路径一致：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Town town = Settlement.All
    .FirstOrDefault(s => s.IsTown && s.Town != null)
    ?.Town;

if (Campaign.Current != null && town != null)
{
    BuildingConstructionModel model = Campaign.Current.Models.BuildingConstructionModel;
    ExplainedNumber withDescriptions = model.CalculateDailyConstructionPower(town, includeDescriptions: true);
    int basePower = model.CalculateDailyConstructionPowerWithoutBoost(town);
    int boostCost = model.GetBoostCost(town);
    int boostAmount = model.GetBoostAmount(town);
}
```

这段结果适合调试或 UI 预览；普通逻辑应直接读取 `town.Construction` 与 `town.ConstructionExplanation`，不要自己把模型结果再乘一遍。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让四个成员成对委托：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModBuildingConstructionModel : BuildingConstructionModel
{
    private readonly BuildingConstructionModel _vanilla;

    public ModBuildingConstructionModel(BuildingConstructionModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int TownBoostCost => _vanilla.TownBoostCost;
    public override int TownBoostBonus => _vanilla.TownBoostBonus;
    public override int CastleBoostCost => _vanilla.CastleBoostCost;
    public override int CastleBoostBonus => _vanilla.CastleBoostBonus;

    public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateDailyConstructionPower(town, includeDescriptions);
        result.AddFactor(0.05f, new TextObject("{=mod}Mod: better tools"));
        return result;
    }

    public override int CalculateDailyConstructionPowerWithoutBoost(Town town)
    {
        return _vanilla.CalculateDailyConstructionPowerWithoutBoost(town);
    }

    public override int GetBoostCost(Town town) => _vanilla.GetBoostCost(town);
    public override int GetBoostAmount(Town town) => _vanilla.GetBoostAmount(town);
}
```

注册（在 SubModule 的战役启动钩子里，不要在每个每日 tick 中替换）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public override void OnCampaignStart(Game game, object starterObject)
{
    base.OnCampaignStart(game, starterObject);
    if (starterObject is CampaignGameStarter starter)
    {
        BuildingConstructionModel vanilla = Campaign.Current.Models.BuildingConstructionModel;
        starter.AddModel(new ModBuildingConstructionModel(vanilla));
    }
}
```

实际注册时应先保存 vanilla delegate 再 `AddModel`；不要在模型已经替换后再次通过 `Campaign.Current.Models.BuildingConstructionModel` 查找自己，否则会递归。若要让替换覆盖忠诚、文化和新版本 Perk 规则，优先委托当前版本的 vanilla model，再加自己的有界因素，并保持 `LimitMin(0)` 下限。

## 风险与版本边界

- `CalculateDailyConstructionPower` 返回的是“本日施工点”，不是新的 `BuildingProgress`；自行把返回值再加到 `BuildingProgress` 会使建筑加速两次。
- `CalculateDailyConstructionPowerWithoutBoost` 被 `BuildingHelper.GetDaysToComplete` 用作除数；自定义实现不应在有产能的据点返回零，除非同步处理所有调用者的除零路径。
- `BuildingsCampaignBehavior` 在据点被围城或项目队列为空时不会推进；模型本身不应为了“修复”这些状态而偷偷写回队列。
- `TownBoostCost`/`CastleBoostCost` 同时参与每日扣储备与剩余天数估算；只改其中一条逻辑会让 UI 预计时间与 `town.Construction` 实际推进不一致。
- 模型访问依赖 `Campaign.Current.Models` 已装配；不要在 `OnSubModuleLoad` 这种 Campaign 尚未建立的阶段查询据点模型。
- 本页以 1.4.5 源码作为规则语义依据；1.3.15 的公开契约一致，但默认常量与 Perk 边界应以实际运行版本的实现与调用点复核，不能把默认常量当成跨版本保证。

## 导航

- [↑ 父级：Campaign 扩展 API](../)
- [↔ 同级：建筑模型家族](../models/)
- [↔ BuildingEffectModel](../BuildingEffectModel)
- [↔ BuildingScoreCalculationModel](../BuildingScoreCalculationModel)
- [↔ BuildingHelper](../BuildingHelper)
- [↔ BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
- [默认实现：DefaultBuildingConstructionModel](../DefaultBuildingConstructionModel)
- [相关：Town](../../campaign/Town) · [Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [Building](../Building)
- [战役系统指南](../../../guide/campaign-system)
