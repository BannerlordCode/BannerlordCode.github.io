---
title: "BuildingType"
description: "城镇与城堡中可建造建筑的静态定义/原型：描述每种建筑的名字、说明、建造成本曲线、以及每个等级提供的 BuildingEffect 效果列表，由模块数据注册进 MBObjectManager 后被各定居点的建筑实例引用。"
---

# BuildingType

**命名空间：** TaleWorlds.CampaignSystem.Settlements.Buildings
**模块：** TaleWorlds.CampaignSystem
**类型：** `public sealed class BuildingType : MBObjectBase`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/BuildingType.cs

## 概述

`BuildingType` 是“某一种可建造建筑”的静态定义（prototype），而非某座城镇里正在施工的那栋楼：它封存了建筑的名字、说明文本、随等级递增的建造成本，以及它在 1/2/3 级分别提供哪些 `BuildingEffectEnum` 效果（并区分是加法 `Add` 还是系数 `AddFactor`）。游戏启动时，内建建筑类型由 `DefaultBuildingTypes` 逐个 `RegisterPresumedObject` 进 `MBObjectManager` 并按字符串 id 索引；每个定居点的实际建筑则是 `Building` 实例，它内部持有一个 `BuildingType` 引用并叠加自己的等级与进度。要查询“这个建筑类型花多少钱、加哪些效果、是否军事/每日项目”，就读 `BuildingType`；要改的是某座城正在建造的那栋楼，请走 `Building` / `Town`。

## 心智模型

把 `BuildingType` 理解成一张“建筑蓝图”，而不是工地：它是 `MBObjectBase` 的派生对象，在战役初始化阶段由 `DefaultBuildingTypes.RegisterAll` 调用 `MBObjectManager.Instance.RegisterPresumedObject(new BuildingType(stringId))` 注册进对象管理器，随后通过 `Initialize` / `InitializeDailyProject` 填充名字、成本与效果数组——一旦注册完成，它就是全战役共享、只读的静态原型，所有城镇共用同一份。之后 `Town` 在反序列化 XML 时，用 `MBObjectManager.Instance.GetObject<BuildingType>(id)` 按字符串取回对应蓝图，再 `new Building(buildingType, this, ...)` 生成该城镇自己的建筑实例。`BuildingType` 属于 Foundation/Campaign 的定居点数据层（不是 Mission 层，也没有逐 tick 状态）：你需要在“枚举所有建筑种类”或“已知某座城某栋楼想知道它的成本/效果”时使用它；不要在它身上保存任何每城镇状态（那属于 `Building`），也不要试图继承它——它被声明为 `sealed`，新增建筑类型只能走模块数据注册，而非派生子类。

## 何时使用 / 何时不要使用

- **使用**：需要枚举全部建筑种类（`BuildingType.All`）、获取某个内建蓝图（`DefaultBuildingTypes.SettlementBarracks` 等静态属性）、查询某建筑类型在某等级的成本（`GetProductionCost`）、或判断并读取它在某等级提供的效果（`HasEffect` / `GetBaseBuildingEffectAmount` / `GetBuildingEffectType` / `GetExplanationAtLevel`）时。
- **不要使用**：不要把它当“某座城正在建造的那栋楼”来读写等级或进度——那在 `Building.CurrentLevel` / `Building.BuildingProgress` 上；不要继承它来扩展（它是 `sealed`）；不要在 `Mission`/战斗层或战役未启动时访问 `BuildingType.All`（背后是 `Campaign.Current.AllBuildingTypes`）；新增自定义建筑应通过模块 XML 或 `MBObjectManager.RegisterPresumedObject` 注册新 id，而非修改现有内建类型。

## 依赖图

上游类型与系统：

- [MBObjectBase](../../core/MBObjectBase) —— `BuildingType` 的直接基类，提供 `StringId`、`IsReady` 与序列化基础设施（存档时按字符串 id 引用而非深拷贝）。
- [DefaultBuildingTypes](../DefaultBuildingTypes) —— 持有并初始化全部内建 `BuildingType` 单例（`RegisterAll` 中 `RegisterPresumedObject` + `Initialize`/`InitializeDailyProject`），是这些蓝图的注册方。

下游与协同系统：

- [Town](../Town) —— 反序列化建筑 XML 时用 `MBObjectManager.Instance.GetObject<BuildingType>(id)` 取回蓝图（`Town.Deserialize` 第 711 行），并持有 `Buildings` 列表；`GetWallLevel`、`AfterLoad` 都按 `BuildingType` 比对 fortifications。
- [Settlement](../Settlement) —— 城镇/城堡定居点是建筑集合的载体，其 `Town.Buildings` 间接依赖 `BuildingType`。
- [Building](../Building) —— 每个 `Building` 内部持有一个 `BuildingType` 引用（`BuildingType` 属性），并调用 `GetProductionCost`、`HasEffect`、`GetBuildingEffectType`、`GetExplanationAtLevel` 来计算建造成本、加成类型与说明文本。
- [BuildingModel](../BuildingModel) —— `CanAddBuildingTypeToTown(BuildingType, Town)` 以 `BuildingType` 为参数，决定某城镇能否新增该建筑。
- [BuildingEffectModel](../BuildingEffectModel) —— `GetBuildingEffect(Building, BuildingEffectEnum)` 内部调用 `building.BuildingType.GetBaseBuildingEffectAmount(effect, level)` 取得基准数值再叠加专长加成。
- [BuildingEffectEnum](../BuildingEffectEnum) —— 所有效果查询的参数与返回依据（`HasEffect` / `GetBaseBuildingEffectAmount` 等都以它为键）。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 每日推进建筑进度、触发升级，间接消费 `BuildingType` 的成本与效果定义。
- [BuildingConstructionModel](../BuildingConstructionModel) —— 计算城镇每日建造力与加速消耗，配合 `GetProductionCost` 估算工期。

## 风险

- **`MBObjectManager` 未注册 / 取回为 null**：`MBObjectManager.Instance.GetObject<BuildingType>("building_settlement_barracks")` 在 id 拼写错误或对应模块尚未注册时会返回 `null`，随后访问 `.StartLevel` 直接空引用。优先用 `DefaultBuildingTypes.X` 静态属性或先遍历 `BuildingType.All` 校验存在。
- **加载顺序与战役未启动**：`BuildingType.All` 实际是 `Campaign.Current.AllBuildingTypes`，只有战役运行时才有值；`MainMenu`、子模块加载极早期或编辑器上下文里访问会空引用。内建类型虽在战役初始化即注册，但早于 `Town` 反序列化，别在更靠前的阶段假设某个 `Town.Buildings` 已就绪。
- **字符串 id 大小写与版本重命名**：id 区分大小写且必须逐字匹配（如 `"building_settlement_fortifications"`）。v1.3.0 重命名过一批旧 id，`Building.UpdateBuildingTypeForOldSaves` 内置了旧→新映射；若你的旧存档引用了已被改名的 id，引擎会在读档时替换为新 `BuildingType`，自定义建筑要避免与这些旧 id 撞名。
- **`sealed`，不能派生替换**：`BuildingType` 是 `sealed class`，无法通过继承它来“覆盖默认建筑规则”。要新增建筑种类，只能提供新的字符串 id 并通过模块 XML 或 `MBObjectManager.RegisterPresumedObject(new BuildingType(id))` 注册；若 id 与现有内建类型冲突，会直接覆盖其定义，导致所有城镇共享到被篡改的蓝图。
- **存档引用按 id 解析**：`Building` 序列化时只保存 `BuildingType` 的 `StringId`，读档时再经 `MBObjectManager` 取回。若你新增了自定义建筑类型却让旧存档引用了一个已不存在的 id，`Town.AfterLoad` 会检测到 `BuildingType == null || !BuildingType.IsReady` 并移除该 `Building`、清空建造队列——表现为旧存档加载后某些建筑“消失”。
- **共享原型被误当可变状态**：`BuildingType` 是全战役共享的只读蓝图；在运行时调用 `Initialize`/`InitializeDailyProject` 会重置其名字/成本/效果数组并影响所有引用它的城镇，极易引发全局规则漂移。这些初始化方法只应由 `DefaultBuildingTypes` 在启动期调用一次，mod 不应再触碰。
- **`GetProductionCost` 的边界语义**：该方法的参数是“当前等级”，返回的是升到下一等级的成本；当 `level >= 3`（满级）或 `level < StartLevel` 时返回 `0`。误把“满级成本 0”当成免费、或把 `StartLevel` 当成 0 处理，会算错工期与花费。

## 成员说明

### 身份与分类

- **`Name`**（属性，`TextObject`，只读）
  - 用途：建筑类型的本地化显示名（如“Barracks”）。来自 `Initialize`/`InitializeDailyProject` 传入的 `TextObject`。
  - 副作用：无，纯数据。
  - 调用时机：UI 与 `Building.Name` 转发读取；`GetName()` 直接返回它。

- **`Explanation`**（属性，`TextObject`，只读）
  - 用途：建筑类型的本地化描述文本，解释它提供什么好处。
  - 副作用：无。
  - 调用时机：城镇管理界面的建筑 tooltip 与 `Building.Explanation` 转发读取。

- **`IsMilitaryProject`**（字段，`bool`）
  - 用途：标记该建筑是否为军事项目（影响税收/忠诚等每日结算口径，军事建筑通常不产税收）。
  - 副作用：无。
  - 调用时机：`DefaultBuildingTypes.Initialize` 时按 `isMilitaryProject` 设定；由经济/安全模型在每日结算时读取。

- **`IsDailyProject`**（字段，`bool`）
  - 用途：标记该建筑是否为“每日项目”（日常工程，如 Housing / Train Militia / Festival and Games），这类项目由玩家每日指派、不在常规建造队列中。
  - 副作用：无。
  - 调用时机：`BuildingHelper.ChangeCurrentBuildingQueue` 用它排除日常项目入队；`Building.AddEffectOfBuilding` 要求日常项目必须是当前默认建筑才生效。

- **`StartLevel`**（字段，`int`）
  - 用途：建筑类型的初始等级（多数普通建筑为 0，部分如 Fortifications 为 1，日常项目为 1）。`Building.LevelDown` 不会低于此值。
  - 副作用：无。
  - 调用时机：`Town.Deserialize` 取回蓝图后用它作为建筑初始 `currentLevel`；`GetProductionCost` 用它判断成本下限。

- **`MaxLevel`**（常量，`int = 3`）
  - 用途：建筑类型的最高等级上限。`Building.LevelUp` 在 `CurrentLevel < 3` 时才升级。
  - 副作用：无。
  - 调用时机：升级逻辑与成本/效果查询的边界判断。

### 全部类型枚举

- **`All`**（静态属性，`MBReadOnlyList<BuildingType>`）
  - 用途：返回战役中已注册的全部建筑类型（`Campaign.Current.AllBuildingTypes` 的封装），用于遍历所有蓝图。
  - 副作用：无；但访问它依赖 `Campaign.Current` 非 null。
  - 调用时机：需要枚举所有建筑种类时（如自定义 UI、校验 id 是否存在）。

### 初始化（引擎调用，mod 一般不必调用）

- **`Initialize(TextObject name, TextObject explanation, int[] productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float>[] effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)`**
  - 用途：以普通建筑方式初始化蓝图——填充名字、说明、三级成本数组 `_productionCosts`、效果数组 `_effects`（由 `Tuple` 转换为 `EffectInfo`），并设 `IsDailyProject = false`、`IsMilitaryProject`、`VarianceChance`、`StartLevel`，最后触发 `AfterInitialized`。
  - 副作用：会覆盖该实例的 Name/成本/效果字段；若被运行时重复调用会改写所有引用它的城镇的数据。
  - 调用时机：仅由 `DefaultBuildingTypes.InitializeAll` 在战役初始化时对每个内建普通建筑调用一次。

- **`InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float>[] effects)`**
  - 用途：以每日项目方式初始化蓝图——设 `IsDailyProject = true`、`IsMilitaryProject = false`、`VarianceChance = 0`、`StartLevel = 1`、成本数组清空为全 0。
  - 副作用：同上，会重置实例字段。
  - 调用时机：仅由 `DefaultBuildingTypes.InitializeAll` 对每个内建日常项目（Housing / Train Militia / Festival and Games / Irrigation 等）调用一次。

- **`GetName()`**（重写 `MBObjectBase.GetName`）
  - 用途：返回 `Name`，供对象系统/UI 取显示名。
  - 副作用：无。
  - 调用时机：对象管理器与列表显示时调用；`Building.Name` 也经此链路。

### 效果查询

- **`HasEffect(BuildingEffectEnum effect)`**
  - 用途：判断该蓝图是否在任意等级提供指定效果（遍历 `_effects` 看是否有匹配的 `BuildingEffectEnum`）。
  - 副作用：无，纯查询。
  - 调用时机：`Building.AddEffectOfBuilding` 在累加效果前先调用它做守卫；检查某建筑是否带某种加成时读取。

- **`GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)`**
  - 用途：返回指定效果在 `level` 级的基准数值（经 `EffectInfo.GetEffectValue(level)` 取出；找不到该效果返回 `0f`）。这是所有建筑加成的“原始值”，后续再由 `BuildingEffectModel` 叠加专长等修正。
  - 副作用：无，纯查询。
  - 调用时机：`DefaultBuildingEffectModel.GetBuildingEffect` 内部调用它取基准值；想预测某级建筑产出时读取。

- **`GetBuildingEffectType(BuildingEffectEnum effect)`**
  - 用途：返回该效果在当前蓝图上的增量方式——`BuildingEffectIncrementType.Add`（加算）或 `AddFactor`（乘算系数）。找不到时默认 `Add`。
  - 副作用：无。
  - 调用时机：`Building.AddEffectOfBuilding` 用它决定把效果值 `Add` 还是 `AddFactor` 进 `ExplainedNumber`。

- **`GetExplanationAtLevel(int level)`**
  - 用途：返回该建筑在 `level` 级的本地化效果说明文本（拼装 `str_building_effect_explanation` 与数值变量；`level == 0` 或 `> 3` 返回空文本）。
  - 副作用：无，纯查询；会按效果数量动态组装 `TextObject`。
  - 调用时机：`Building.GetBonusExplanations` 在生成建筑 tooltip 时按等级调用。

### 建造成本

- **`GetProductionCost(int level)`**
  - 用途：返回从 `level` 升到下一等级所需的建造成本（`_productionCosts[level]`）。当 `level < StartLevel` 或 `level >= 3` 时返回 `0`。
  - 副作用：无，纯查询。
  - 调用时机：`Building.GetConstructionCost` 用它算实际花费（再叠加 CastleCharters 等政策系数）；`BuildingHelper.GetDaysToComplete` / `CheckIfBuildingIsComplete` 也依赖它估算工期与进度。

- **`VarianceChance`**（字段，`float`）
  - 用途：每日项目奖励的随机波动概率（普通建筑为 `0f`，由 `Initialize` 设定；日常项目在 `InitializeDailyProject` 中固定为 `0f`）。
  - 副作用：无。
  - 调用时机：每日项目结算时用于决定奖励是否发生波动。

## 示例

按字符串 id 取回一个内建建筑蓝图，并读取它在满级（3 级）对驻军容量的基准加成：

```csharp
BuildingType barracks = MBObjectManager.Instance.GetObject<BuildingType>("building_settlement_barracks");
if (barracks != null && barracks.HasEffect(BuildingEffectEnum.GarrisonCapacity))
{
    // GetBaseBuildingEffectAmount 的 level 取建筑当前等级；这里演示取满级值
    float capacityAtMax = barracks.GetBaseBuildingEffectAmount(BuildingEffectEnum.GarrisonCapacity, 3);
    BuildingEffectIncrementType increment = barracks.GetBuildingEffectType(BuildingEffectEnum.GarrisonCapacity);
}
```

遍历某定居点城镇的全部建筑，经由 `Building.BuildingType` 访问蓝图并读取各等级成本与说明：

```csharp
Town town = Settlement.CurrentSettlement.Town;
foreach (Building building in town.Buildings)
{
    BuildingType type = building.BuildingType;
    int costToNextLevel = type.GetProductionCost(building.CurrentLevel);
    TextObject bonusText = type.GetExplanationAtLevel(building.CurrentLevel);
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[MBObjectBase](../../core/MBObjectBase) · [DefaultBuildingTypes](../DefaultBuildingTypes) · [Town](../Town) · [Settlement](../Settlement) · [Building](../Building) · [BuildingModel](../BuildingModel) · [BuildingEffectModel](../BuildingEffectModel) · [BuildingEffectEnum](../BuildingEffectEnum) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [BuildingConstructionModel](../BuildingConstructionModel)
