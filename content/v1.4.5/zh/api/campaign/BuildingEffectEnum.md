---
title: "BuildingEffectEnum"
description: "城镇建筑效果的类别枚举：作为 BuildingType 每条配方的标签，决定一条建筑效果会影响哪一类城镇指标（驻军上限/繁荣/忠诚/食物/税收/攻城器械等），并被 Town 与 BuildingEffectModel 按枚举路由到具体数值。"
---

# BuildingEffectEnum

**命名空间：** TaleWorlds.CampaignSystem.Settlements.Buildings
**模块：** TaleWorlds.CampaignSystem
**类型：** public enum BuildingEffectEnum
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/BuildingEffectEnum.cs

## 概述

`BuildingEffectEnum` 是城镇建筑体系的“效果种类标签”：每一个建筑配方（`BuildingType`）在初始化时都携带一组 `(BuildingEffectEnum, BuildingEffectIncrementType, 数值)` 三元组，枚举值指明这条效果作用于哪一类城镇指标（如驻军上限、繁荣度、忠诚度、食物、税收、攻城器械）。真正决定数值的是 `BuildingEffectModel.GetBuildingEffect`，而真正把各类效果累加进定居点状态的是 `Town` 与各定居点属性——枚举本身只是路由键，不持有任何数值或逻辑。

## 心智模型

把 `BuildingEffectEnum` 当作建筑效果系统的“类别路由键”来理解，而不是一个可实例化的对象。数据链路是：`DefaultBuildingTypes` 在初始化每个 `BuildingType` 时，把一组 `EffectInfo`（含枚举值 + 增量类型 + 1~3 级数值）写进 `_effects`；运行期 `Building.AddEffectOfBuilding(enum, ref result)` 先调用 `BuildingType.HasEffect(enum)` 判断该建筑是否带此效果，再用 `BuildingType.GetBuildingEffectType(enum)` 取出 `Add`/`AddFactor`，并向 `BuildingEffectModel.GetBuildingEffect` 取数值后累加到 `ExplainedNumber`。`Town.AddEffectOfBuildings(enum, ref result)` 则遍历城镇全部建筑，按同一个枚举把同类效果汇总。它属于 Campaign/Settlement 层，是编译期常量——适合在写建筑配方、判断某建筑是否具备某种效果、或按效果种类聚合数值时使用；不要把它当成可改的世界状态，新增枚举值若不在 `DefaultBuildingTypes`/`BuildingEffectModel` 中映射则绝不会产生任何实际效果。

## 何时使用 / 何时不要使用

- **使用**：在自定义/读取建筑配方时，用枚举值标识“这条效果影响什么指标”；用 `BuildingType.HasEffect(enum)` 判断某建筑是否提供该效果；用 `Town.AddEffectOfBuildings(enum, ref result)` 把同一类效果从全城建筑汇总；在派生 `BuildingEffectModel` 时按 `switch (enum)` 给特定效果追加专长或政策加成。
- **不要使用**：不要用枚举值去“直接改”任何定居点数值（它只是键，数值来自 `BuildingEffectModel` 与 `BuildingType` 的配方）。不要把它当可变状态持久化或缓存。不要与 `BuildingEffectIncrementType` 混淆——后者决定该枚举值是“加量”(`Add`) 还是“乘系数”(`AddFactor`)，二者必须配对理解。新增枚举值后若未在 `DefaultBuildingTypes` 配方与 `BuildingEffectModel` 中同时接好线，该值将没有任何效果。

## 依赖图

数据来源与消费方（每条均为已存在页面）：

- [BuildingType](../BuildingType) —— 每个建筑配方持有一组 `EffectInfo`，枚举值作为其中的 `BuildingEffect` 字段，是枚举最主要的生产方。
- [BuildingEffectModel](../BuildingEffectModel) —— `GetBuildingEffect(Building, BuildingEffectEnum)` 按枚举把配方基础值经专长/政策换算成 `ExplainedNumber`，是枚举的核心消费路由。
- [BuildingEffectIncrementType](../BuildingEffectIncrementType) —— 与枚举成对出现，决定该效果是 `Add`（加量）还是 `AddFactor`（乘系数）。
- [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) —— 默认实现，内含针对 `DenarByBoundVillageHeartPerDay`、`FoodStock` 等枚举值的特例换算。
- [DefaultBuildingTypes](../DefaultBuildingTypes) —— 全部建筑配方在此初始化，明确每个枚举值绑定到哪座建筑、哪一级数值。
- [Town](../Town) —— `AddEffectOfBuildings(BuildingEffectEnum, ref ExplainedNumber)` 按枚举把全城建筑效果汇总（如 `FoodStock`）。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 每日项目处理时用 `BuildingType.HasEffect(BuildingEffectEnum.GarrisonCapacity/PrisonCapacity)` 判断建筑能力。
- [Building](../Building) —— `AddEffectOfBuilding(enum, ref result)` 把单个建筑按枚举路由到 `BuildingEffectModel` 并累加。
- [BuildingModel](../BuildingModel) —— 建筑升级/进度相关模型，与效果枚举同处建筑子系统。

## 风险

- **把枚举当作数值来源**：枚举本身不含任何数值，所有数字都在 `BuildingType` 的 `EffectInfo` 与 `BuildingEffectModel` 中。只读枚举、不查 `BuildingType.GetBaseBuildingEffectAmount` / `GetBuildingEffect` 会得到 `0f` 或毫无意义的结果。
- **与 `BuildingEffectIncrementType` 混淆**：同一枚举值在不同建筑上可能是 `Add`（绝对加量）也可能是 `AddFactor`（相对系数）。例如 `GarrisonWageReduction` 是 `AddFactor`（`-0.05` 表示减税 5%），而 `Militia` 是 `Add`。误把系数当绝对值或反之，会严重高估/低估效果。
- **在 XML/文本里拼错枚举名**：`BuildingType.GetExplanationAtLevel` 用 `Enum.GetName(typeof(BuildingEffectEnum), …)` 去查本地化 `str_building_effect_explanation` 文本；若配方里写错枚举名（大小写或拼写），效果说明文本会缺失或查不到，且编译期不会报错。
- **声明了枚举值却没接配方/模型**：`MilitiaReduction`、`SecurityPerDay`、`ShipProduction`、`MaximumShipCount` 等枚举值已在类型中定义，但默认 `DefaultBuildingTypes` 配方并未使用它们。直接引用这些“保留值”不会触发任何建筑效果，容易让 mod 作者误以为已生效。
- **新增枚举值缺少双端映射**：在 mod 中扩展枚举后，必须同时在新的 `BuildingType` 配方里填入该值、并在（派生的）`BuildingEffectModel` 中处理它，否则既不会产生数值、也不会被 `Town` 汇总识别。

## 成员说明

下列为关键枚举值及其真实含义（数值取自 `DefaultBuildingTypes` 默认配方，1~3 级范围；增量类型见括号）：

### 驻军与军事

- **`GarrisonCapacity`** —— 驻军上限。由城镇/城堡堡垒与各类兵营提供（`Add`，如城镇堡垒 60/90/120、城堡兵营 20/40/80）。影响 `Town.GarrisonMax`。
- **`GarrisonWageReduction`** —— 驻军工资削减系数（`AddFactor`，如兵营 -0.05/-0.1/-0.15、城堡松弛驻军 -0.05）。值为负表示按比例降薪。
- **`GarrisonAutoRecruitment`** —— 驻军自动招募量（`Add`，城堡官员 1/2/3、各征兵项目）。
- **`PrisonCapacity`** —— 监狱容量（`Add`，堡垒/警卫室/城堡警卫室等累加）。
- **`Militia`** —— 民兵招募量（`Add`，城堡警卫室 1/2/3、训练民兵与征兵每日项目）。
- **`MilitiaReduction`** —— 民兵削减（枚举已定义，**默认配方未使用**，属保留值）。
- **`MilitiaVeterancyChance`** —— 民兵老兵化概率（`Add`，0.1/0.15/0.2，训练场）。
- **`PatrolPartyStrength`** —— 巡逻队强度（`Add`，警卫室 1/2/3），提升城镇安全。
- **`SecurityPerDay`** —— 每日安全度（枚举已定义，**默认配方未使用**，属保留值）。

### 经济与治理

- **`Prosperity`** —— 繁荣度（`Add`，每日住房项目 2/2/2）。
- **`Loyalty`** —— 每日忠诚度（`Add`，法院 0.3/0.6/1、节日与游戏 3/3/3）。
- **`Influence`** —— 每日影响力（`Add`，法院 0.2/0.5/1）。
- **`TaxPerDay`** —— 每日税收系数（`AddFactor`，税务局 0.05/0.1/0.15）。
- **`TariffIncome`** —— 关税收入系数（`AddFactor`，市场 0.1/0.2/0.3）。
- **`CaravanAccessibility`** —— 商队可达性系数（`AddFactor`，市场 1.02/1.04/1.06）。
- **`DenarByBoundVillageHeartPerDay`** —— 按附属村庄炉灶数计的每日收入（`Add`，城堡工匠区 0.2/0.4/0.6）；`DefaultBuildingEffectModel` 会乘以 `Town` 下所有村庄的炉灶总和。
- **`WorkshopProduction`** —— 工坊产量系数（`AddFactor`，仓库 0.05/0.1/0.15）。

### 食物

- **`FoodProduction`** —— 每日食物产出（`Add`，城堡农地 6/12/18）。
- **`FoodStock`** —— 食物储量上限（`Add`，仓库 100/300/500、城堡粮仓 100/200/300）；`DefaultBuildingEffectModel` 对仓库/粮仓额外加 `Engineering.Battlements` 专长。
- **`FoodConsumption`** —— 食物消耗系数（`AddFactor`，水渠 -0.05/-0.1/-0.15，负值即降低消耗）。

### 建造与维修

- **`ConstructionPerDay`** —— 每日砌砖数（`Add`，城镇石匠 3/6/9、城堡石匠 2/4/6），影响建筑速度。
- **`WallRepairSpeed`** —— 城墙修复速度系数（`AddFactor`，石匠 0.1/0.2/0.3）。

### 村庄

- **`VillageProduction`** —— 村庄产出系数（`AddFactor`，道路 0.05/0.1/0.15）。
- **`VillageHeartsPerDay`** —— 村庄炉灶每日增长（`Add`，道路 0.1/0.2/0.3、灌溉项目 1/1/1；城堡灌溉为 `AddFactor` 0.5）。

### 攻城与船只

- **`SiegeEngineSpeed`** —— 攻城器械建造速度系数（`AddFactor`，城镇/城堡攻城工坊）。
- **`BallistaOnSiegeStart`** —— 攻城开始时部署的弩炮数（`Add`，攻城工坊）。
- **`CatapultOnSiegeStart`** —— 攻城开始时部署的投石机数（`Add`，攻城工坊）。
- **`ExperiencePerDay`** —— 驻军每日经验（`Add`，训练场/操练项目，城堡训练场 3/4/5、操练 8/8/8）。
- **`ShipProduction`** —— 船只产量（枚举已定义，**默认配方未使用**，属保留值）。
- **`MaximumShipCount`** —— 最大船只数（枚举已定义，**默认配方未使用**，属保留值）。

## 示例

判断某建筑是否提供“驻军上限”效果并读取其当前等级的基础数值：

```csharp
if (building.BuildingType.HasEffect(BuildingEffectEnum.GarrisonCapacity))
{
    float capacityAtLevel = building.BuildingType
        .GetBaseBuildingEffectAmount(BuildingEffectEnum.GarrisonCapacity, building.CurrentLevel);
}
```

按枚举把整座城镇对“食物储量”的效果汇总（内部遍历每座建筑并路由到 `BuildingEffectModel`）：

```csharp
ExplainedNumber foodStock = new ExplainedNumber(0f);
Town town = building.Town;
town.AddEffectOfBuildings(BuildingEffectEnum.FoodStock, ref foodStock);
float totalFoodStockBonus = foodStock.ResultNumber;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[BuildingType](../BuildingType) · [BuildingEffectModel](../BuildingEffectModel) · [BuildingEffectIncrementType](../BuildingEffectIncrementType) · [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) · [DefaultBuildingTypes](../DefaultBuildingTypes) · [Town](../Town) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [Building](../Building) · [BuildingModel](../BuildingModel)
