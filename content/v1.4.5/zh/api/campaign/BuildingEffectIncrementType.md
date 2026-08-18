---
title: "BuildingEffectIncrementType"
description: "决定建筑效果数值随建筑等级叠加进总数时采用「绝对值累加（Add）」还是「乘性因子累加（AddFactor）」方式的枚举，与 BuildingEffectEnum 配合描述每种建筑产出的数值意义，被 Building.AddEffectOfBuilding 在聚合效果时读取以选择 ExplainedNumber 的累加分支。"
---

# BuildingEffectIncrementType

**命名空间：** TaleWorlds.CampaignSystem.Settlements.Buildings
**模块：** TaleWorlds.CampaignSystem
**类型：** public enum BuildingEffectIncrementType
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/BuildingEffectIncrementType.cs

## 概述

该枚举只有两个值 `Add` 与 `AddFactor`，用来标注某座建筑对某一类产出（`BuildingEffectEnum`）的数值“如何并入”最终的 `ExplainedNumber`：是作为固定绝对值叠加，还是作为乘性因子（百分比式）叠加。它和 `BuildingEffectEnum` 一起构成每座建筑类型在 `DefaultBuildingTypes` 中声明效果的三元组 `(BuildingEffectEnum, BuildingEffectIncrementType, float, float, float)` 的第二个分量；真正的数值由 `BuildingEffectModel.GetBuildingEffect` 算出后，再由 `Building.AddEffectOfBuilding` 依据本枚举决定走 `ExplainedNumber.Add` 还是 `ExplainedNumber.AddFactor`。

## 心智模型

`BuildingEffectIncrementType` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，属于 Campaign（Foundation）层的纯数据标签，本身不含任何逻辑，也从不参与存档序列化或被模型解析——它只是建筑类型声明里的一个“叠加方式”记号。整个体系中，`BuildingEffectEnum` 回答“这是哪种产出”（忠诚、税收、驻军容量……），而本枚举回答“这个产出按什么方式涨”（绝对值还是因子）。具体消费发生在 `Building.AddEffectOfBuilding(BuildingEffectEnum, ref ExplainedNumber)`：它先向 `BuildingEffectModel.GetBuildingEffect` 取该建筑在当前的净效果值，再用 `BuildingType.GetBuildingEffectType(effect)` 取出本枚举，按值选择累加分支。mod 开发者通常不需要“创建”这个枚举，而在自定义 `BuildingEffectModel`、做效果 tooltip、或校验/扩展建筑类型声明时需要“读懂”它；改世界状态（建筑等级、炉灶、总督）应走建造行为与定居点对象，而不是动这个标签。

## 何时使用 / 何时不要使用

- **使用**：在读取或自定义建筑效果时，需要判断某效果是按绝对值还是按因子叠加——例如编写自定义 `BuildingEffectModel` 时复现引擎聚合逻辑、在 UI tooltip 上区分“第 N 级 +X”与“第 N 级 +X%”、或校验某个 `BuildingType` 是否正确声明了效果的叠加方式时，读取 `BuildingType.GetBuildingEffectType(effect)` 的返回值。
- **不要使用**：不要把它当作独立的配置入口去“设置”建筑产出——它只是描述叠加方式的标签，真正的数值来自建筑类型声明与 `BuildingEffectModel` 计算。不要给 `Building` 或 `BuildingType` 新增效果却忽略 `IncrementType`，否则聚合时会被路由到错误分支（且找不到匹配效果会默认回退为 `Add`）。不要在 `Mission` / 战斗层访问它：它属于 Campaign 层，仅在战役模拟中存在。

## 依赖图

上游类型与系统：

- [BuildingType](../BuildingType) —— 建筑类型在初始化时声明效果三元组；`GetBuildingEffectType(BuildingEffectEnum)` 返回该效果对应的本枚举值（未匹配时回退 `Add`）。
- [BuildingEffectEnum](../BuildingEffectEnum) —— 与本枚举成对出现，回答“这是哪种产出”；二者共同定义一种建筑产出的数值意义。
- [BuildingEffectModel](../BuildingEffectModel) —— `GetBuildingEffect(Building, BuildingEffectEnum)` 算出本枚举要累加的净效果值（`ExplainedNumber`）。
- [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) —— 默认实现，提供基础值、炉灶缩放与总督专长加成，是 `AddEffectOfBuilding` 实际读取的来源。

下游与协同系统（消费方）：

- [Building](../Building) —— `AddEffectOfBuilding(BuildingEffectEnum, ref ExplainedNumber)` 是读取本枚举并据此切换 `Add` / `AddFactor` 分支的核心调用点。
- [ExplainedNumber](../ExplainedNumber) —— 累加的目标容器；`Add` 进绝对值、`AddFactor` 进乘性因子。
- [Town](../Town) —— `AddEffectOfBuildings` 聚合一座城镇所有建筑的效果，最终都经 `Building.AddEffectOfBuilding` 路由到本枚举。
- [Campaign](../Campaign) —— 持有 `Models` 集合，是获取 `BuildingEffectModel` 的入口。

## 风险

- **与 `BuildingEffectEnum` 混淆**：前者回答“哪种产出”，本枚举回答“产出如何叠加进总数”。在 XML / 代码里只改其中一个而漏改另一个，会造成“效果类别对、叠加方式错”的语义错乱。
- **三元组里拼写错枚举**：建筑效果以 `Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float>` 声明。若把 `AddFactor` 误写成 `Add`（或反之），原本的乘算加成会被当成绝对值小幅叠加，数值几乎失效；反之把 `Add` 当 `AddFactor`，会让本应固定的 `+60` 驻军容量变成 `+60` 倍，产出爆炸。
- **递增方式误判导致数值爆炸**：在自定义 `BuildingEffectModel` 或 UI 估算时，若把 `AddFactor` 的 `0.15` 当 `Add` 直接加到总数上，看似无害；但若反过来把 `Add` 的较大绝对值当因子乘入，产出会膨胀数十倍。始终用 `Building.AddEffectOfBuilding` 的同一套分支，不要自行“猜测”叠加方式。
- **默认回退为 `Add`**：`BuildingType.GetBuildingEffectType` 在效果未在该建筑类型中声明时返回 `Add`。若你的效果未被建筑类型登记却被聚合路径请求，会按绝对值处理，可能与预期（本应是因子）不符。
- **因子叠加是非线性的**：多个 `AddFactor` 效果是相乘而非相加。例如两个 `+0.1` 因子实际是 `×1.21` 而非 `+0.2`；估算总加成时必须用乘积，不能简单求和，否则会低估/高估最终产出。

## 成员说明

### 枚举值

- **`Add`**
  - 语义：绝对值累加。效果值（来自建筑类型在对应等级的基础值，经 `BuildingEffectModel.GetBuildingEffect` 计算）作为固定增量直接并入 `ExplainedNumber` 的绝对值部分。例如城镇 `Fortifications` 的 `GarrisonCapacity` 在 1/2/3 级分别 `+60 / +90 / +120` 名驻军容量；`Barracks` 的 `Loyalty`/`Influence`、`Courthouse` 的 `Loyalty`、`Granary` 的 `FoodStock` 也都用此方式——适用于“越多越好、可线性叠加、与基数无关”的产出。
  - 副作用：无；它只是被消费的标签。
  - 调用时机：由 `Building.AddEffectOfBuilding` 在 `switch` 命中 `Add` 时调用 `result.Add(resultNumber, Name)`。

- **`AddFactor`**
  - 语义：乘性因子累加。效果值作为因子并入 `ExplainedNumber` 的乘算部分（相当于百分比式加成），与现有基数相乘而非直接相加。例如 `TaxOffice` 的 `TaxPerDay` 在 1/2/3 级为 `+0.05 / +0.1 / +0.15`，即税收按 `+5% / +10% / +15%` 的因子增长；`Waterworks` 的 `FoodConsumption` 为 `-0.05 / -0.1 / -0.15`，表示食物消耗按 `-5% / -10% / -15%` 的因子下降；`Marketplace` 的 `TariffIncome`/`CaravanAccessibility` 同理。因子可为负，且多个因子之间相乘叠加。
  - 副作用：无。
  - 调用时机：由 `Building.AddEffectOfBuilding` 在 `switch` 命中 `AddFactor` 时调用 `result.AddFactor(resultNumber, Name)`。

## 示例

复现引擎聚合逻辑：读取某建筑对某一产出的效果值，并依据其 `BuildingEffectIncrementType` 选择 `ExplainedNumber` 的累加分支（与 `Building.AddEffectOfBuilding` 内部完全一致）：

```csharp
BuildingEffectIncrementType type =
    building.BuildingType.GetBuildingEffectType(BuildingEffectEnum.GarrisonCapacity);
float amount = Campaign.Current.Models.BuildingEffectModel
    .GetBuildingEffect(building, BuildingEffectEnum.GarrisonCapacity).ResultNumber;

ExplainedNumber result = new ExplainedNumber(0f);
switch (type)
{
    case BuildingEffectIncrementType.Add:
        result.Add(amount, building.Name);
        break;
    case BuildingEffectIncrementType.AddFactor:
        result.AddFactor(amount, building.Name);
        break;
}
```

区分同一座建筑类型下不同效果的叠加方式，避免把因子误当绝对值显示：

```csharp
// 法院（Courthouse）的忠诚是绝对值累加，税务局（Tax Office）的税收是按因子乘算
BuildingEffectIncrementType loyaltyType = DefaultBuildingTypes.SettlementCourthouse
    .GetBuildingEffectType(BuildingEffectEnum.Loyalty);
BuildingEffectIncrementType taxType = DefaultBuildingTypes.SettlementTaxOffice
    .GetBuildingEffectType(BuildingEffectEnum.TaxPerDay);
bool loyaltyIsAbsolute = loyaltyType == BuildingEffectIncrementType.Add;
bool taxIsFactor = taxType == BuildingEffectIncrementType.AddFactor;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[BuildingType](../BuildingType) · [BuildingEffectEnum](../BuildingEffectEnum) · [Building](../Building) · [BuildingEffectModel](../BuildingEffectModel) · [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) · [ExplainedNumber](../ExplainedNumber) · [Town](../Town) · [Campaign](../Campaign)
