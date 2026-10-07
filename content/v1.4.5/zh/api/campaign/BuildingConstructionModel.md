---
title: "BuildingConstructionModel"
description: "决定城镇/城堡每日建筑施工产出、一次性加速（Boost）的储备成本与增量，以及剔除加速后稳定基础产出的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.BuildingConstructionModel 解析，被 Town 的属性、建筑 tick 行为与城镇管理界面调用。"
---

# BuildingConstructionModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingConstructionModel.cs

## 概述

该模型集中推导每个城镇（`Town`）与城堡每日可用于建筑进度的施工产出（construction power）、一次性加速（boost）要消耗多少储备点、能额外注入多少产出，以及剔除加速后稳定的基础产出。它只做纯数值计算，不持有任何会被写进存档的世界状态——真正的建筑进度累加由 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 与 [Building](../Building) 对象完成。

## 心智模型

BuildingConstructionModel 是一个纯计算的规则扩展点：战役（[Campaign](../Campaign)）在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultBuildingConstructionModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.BuildingConstructionModel` 取得；它不参与存档序列化，也不会在每个 tick 被重新构造。领地行为 `BuildingsCampaignBehavior` 在其 `TickCurrentBuildingForTown` 里把 `Town.Construction`（即 `CalculateDailyConstructionPower` 的结果）加到队首在建建筑的 `BuildingProgress` 上，并依据模型暴露的加速成本属性（`GetBoostCost`，即 `TownBoostCost` / `CastleBoostCost`）去扣减加速储备 `town.BoostBuildingProcess`；而 [Town](../Town) 的 `Construction` / `ConstructionExplanation` 属性与城镇管理界面（VM）则在每日结算或界面刷新时读取当日产出。`DefaultBuildingConstructionModel` 内部会逐项累加：繁荣度、加速储备贡献、总督技能/专长、市集生产类售出、在建建筑类型相关的军事/市集加成、`BuildingEffectModel` 的每日建设效应，以及忠诚度区间修正与巴丹文化特性。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要直接改模型字段或亲自累加 `Building.BuildingProgress`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“城镇每天能修多少建筑进度”“加速一次要花多少储备、加多少产出”时，读取 `Campaign.Current.Models.BuildingConstructionModel` 的返回值，或提供一个新的派生类覆盖各抽象成员（含 4 个 boost 常量属性）并通过子模块注册替换默认实现。
- **不要使用**：不要自己给 `Building.BuildingProgress` 累加来“让建筑快点建好”——真正累加进度的是 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 配合 `Town.Construction`，模型是无状态纯函数。要改变世界状态应走领地行为或对应的 `*Action`，而不是篡改模型字段；也不要把模型的当日产出当作持久世界状态来读。

## 怎么用

何时该读这一页、何时不该读、该改哪个模型，见上文「何时使用 / 何时不要使用」。本节只讲怎么从源码拿到它、以及它在 v1.4.5 里被谁真的调用。

### 怎么拿到它

抽象声明在 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingConstructionModel.cs:6`，`public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`。默认实现是 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingConstructionModel.cs:13`。

安装链走 `GameModels`：属性在 `GameModels.cs:149`，赋值在 `GameModels.cs:331` 的 `BuildingConstructionModel = GetGameModel<BuildingConstructionModel>()`。所以替换方式是派发器注册一个同类型实现。

它在整棵树里被 7 个文件引用，而**消费点分布在三个互不相干的层**，逐条 grep 得到：

模型层与领域层共四处——`TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Town.cs:152` 的 `public float Construction => ...CalculateDailyConstructionPower(this).ResultNumber`、`:154` 的 `ConstructionExplanation`、`TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs:75` 与 `:94`（后者取 `CalculateDailyConstructionPowerWithoutBoost`）、以及 `BuildingsCampaignBehavior.cs:110`。

UI 层三处——`TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/TownManagementVM.cs:663`，以及 `TownManagementReserveControlVM.cs:200` 的 `GetBoostAmount` 与 `:201` 的 `GetBoostCost`。

这三层用的是**不同的成员**：`Town` 要每日总产出，`BuildingHelper` 要不含加速的基准，VM 要加速的费用与增量。而 `GetBoostCost` 与 `GetBoostAmount` 语义不同一个是扣减、一个是注入，见下文坑。

### 典型用法

上面那一节讲的是「该不该用这个模型」，不是「怎么调」。缺的一步是**把「含加速」与「不含加速」两条数值并排取出来**——因为 `BuildingsCampaignBehavior.cs:110` 每日实际累加的是含加速那条，而 `BuildingHelper.cs:94` 读的是不含加速那条，两者不一致时城镇进度会与预测对不上：

```csharp
public static void ExplainConstruction(Town town)
{
    if (town == null || Campaign.Current == null)
    {
        return;
    }
    BuildingConstructionModel model = Campaign.Current.Models.BuildingConstructionModel;

    // 不含加速：BuildingHelper.cs:94 用的就是这一条
    float basePower = model.CalculateDailyConstructionPowerWithoutBoost(town);
    // 含加速：Town.cs:152 用的就是这一条
    float boostedPower = model.CalculateDailyConstructionPower(town).ResultNumber;

    Debug.Print(town.Name + " base=" + basePower + " boosted=" + boostedPower, 0);

    // 两个 boost 常量只影响加速本身：一个是费用，一个是注入的额外产出
    float cost = model.GetBoostCost(town);
    float amount = model.GetBoostAmount(town);
    if (cost > 0f)
    {
        Debug.Print("boost cost=" + cost + " amount=" + amount, 0);
    }
}
```

`Town.cs:152` 那条是**表达式体属性**，也就是说每次读 `town.Construction` 都会重新走一遍完整计算，没有缓存。所以不要在循环里反复读它。

`GetBoostCost` 与 `GetBoostAmount` 不要对调：`BuildingHelper.cs:75` 拿前者去扣减储备点，VM 的 `TownManagementReserveControlVM.cs:200` / `:201` 分别把两者填进提示文本的 `BOOST` 与 `COST` 变量，而这两个变量名本身就与语义相反，别按名字推。

这个模型是无状态纯函数，上面这段可以随时重复调用；但它属于 Campaign 层，在 Mission 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。

### 什么时候不要用它

不要自己给 `Building.BuildingProgress` 累加来让建筑快点建好。真正累加进度的是 `BuildingsCampaignBehavior` 配合 `Town.Construction`，模型只是被问的一方。

不要把派生类里的可变字段期望随存档恢复。本模型不含 `[SaveableField]`，加了也不会被序列化。

### 最容易踩的坑

跨战役重载缓存实例：缓存的实例在重载后指向旧战役的对象。附带一条同源风险是混淆 `GetBoostCost` 与 `GetBoostAmount` 的语义——前者是「本次加速要从储备点扣多少」，后者是「本次加速注入多少额外产出」。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingConstructionModel>()` 解析并缓存实例。
- [DefaultBuildingConstructionModel](../DefaultBuildingConstructionModel) —— 本抽象模型的默认实现，所有具体计算逻辑在其 `CalculateDailyConstructionPowerInternal` 中。

下游与协同系统：

- [Town](../Town) —— 调用方，`Construction` / `ConstructionExplanation` 属性在 `Town.cs` 第 152/154 行直接调用 `CalculateDailyConstructionPower`，界面与管理界面均读取之。
- [Settlement](../Settlement) —— `Town` 隶属 `Settlement`；建筑 tick 以 `Settlement` 为入口（`DailyTickSettlement`），是模型结果的消费场景。
- [Building](../Building) —— `town.BuildingsInProgress` 队列中持有 `Building`；模型读取其 `BuildingType` 判断军事/市集/防御加成，且进度累加落到 `BuildingProgress`。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— `TickCurrentBuildingForTown` 实际把 `Construction` 累加到队首 `BuildingProgress` 并扣减加速储备，是模型结果的主要消费者。
- [BuildingEffectModel](../BuildingEffectModel) —— `DefaultBuildingConstructionModel` 在 `ConstructionPerDay` 效应项上调用 `town.AddEffectOfBuildings(BuildingEffectEnum.ConstructionPerDay, ref result)`。
- [BuildingScoreCalculationModel](../BuildingScoreCalculationModel) —— 通过 `GetNextBuilding` / `GetNextDailyBuilding` 决定队列里下一个建筑是什么，与施工产出共同决定完成速度。
- [BuildingModel](../BuildingModel) —— 决定某建筑类型能否加入城镇（`CanAddBuildingTypeToTown`），是建筑存在的前提。
- [BuildingType](../BuildingType) —— 模型依据 `building.BuildingType.IsMilitaryProject`、`DefaultBuildingTypes.SettlementMarketplace` 等做分支加成。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `BuildingsCampaignBehavior` 的基类，是实际驱动建筑 tick 的调用者。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateDailyConstructionPower` 的返回类型，用于携带带说明项的数值，便于 tooltip 分解。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— `DefaultBuildingConstructionModel` 最关键的修正项来自 `town.Loyalty`：高忠诚（75~100）给施工产出加成、低/极低忠诚（≤50 / ≤25）施加惩罚甚至把当日产出钳到 0。建筑产出与城镇忠诚相互牵动，二者常被一起派生替换或一起调参。
- [SettlementSecurityModel](../SettlementSecurityModel) —— 同属城镇/定居点规则模型簇，常与本项目一起被派生替换，以统一调校城镇运转效率。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingConstructionModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了产出公式，但真正把 `Construction` 加到 `BuildingProgress` 的是 `BuildingsCampaignBehavior.TickCurrentBuildingForTown`。只替换模型、却让行为按旧假设处理建筑进度或加速储备，会出现数值与预测不一致。
- **混淆 GetBoostCost 与 GetBoostAmount 的语义**：`GetBoostCost` 返回的是“本次加速要从 `BoostBuildingProcess` 扣减的储备点”（城镇 500 / 城堡 250），`GetBoostAmount` 返回的是“本次加速注入的额外产出”（城镇 50 / 城堡 20，并按总督专长放大）。二者不是同一概念，消费方只拿前者去扣减储备，逻辑上不要对调。
- **忠诚度钳制改变产出符号**：`DefaultBuildingConstructionModel` 在 `Loyalty <= 25` 时调用 `result.LimitMax(0f)` 把当日产出钳到 0，并在最后 `LimitMin(0f)` 兜底。覆盖产出逻辑时若依赖负值产出项，可能被这些钳制悄然归零，导致“算出来有值却没进度”。

## 成员说明

### 每日施工产出

- **`CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`**
  - 用途：返回该城镇当日可用于建筑进度的总施工产出（`ExplainedNumber`），逐项累加：繁荣度（`Prosperity * 0.01`）、加速储备贡献（`BoostBuildingProcess > 0` 时按“剩余储备 / 总成本”比例注入 `GetBoostAmount`）、总督技能/专长（如 `TownProjectBuildingBonus`、`Steward.ForcedLabor` 含囚犯苦力、`Engineering.Clockwork/Carpenters/Stonecutters/MilitaryPlanner`、`TwoHanded.Confidence`、`Trade.SelfMadeMan`）、市集售出生产类物品的 `0.25` 倍、在建建筑类型相关的军事/市集加成、[BuildingEffectModel](../BuildingEffectModel) 的每日建设效应，以及忠诚度区间修正（高忠诚 75~100 加成、低忠诚 25~50 惩罚、极低忠诚 ≤25 钳到 0）、巴丹文化特性 `BattanianConstructionFeat`，最后下限钳制为 0 并返回 `(int)ResultNumber`。
  - 副作用：无，纯计算。
  - 调用时机：[Town](../Town) 的 `Construction` / `ConstructionExplanation` 属性在每日结算与界面刷新时读取（见 `Town.cs:152/154`）；`TownManagementVM` 用其 `ResultNumber` 显示每日产出；`BuildingsCampaignBehavior` 累加进度时取 `town.Construction`（即本方法结果）。传入 `includeDescriptions: true` 可得到带说明项的分解用于 tooltip。

### 基础产出（不含加速）

- **`CalculateDailyConstructionPowerWithoutBoost(Town town)`**
  - 用途：返回忽略加速储备贡献的每日基础施工产出（整型），供估算“按稳定速度还要几天完工”时用，避免把一次性加速算进长期平均速度。
  - 副作用：无，纯计算。
  - 调用时机：由 `BuildingHelper.GetDaysToComplete` 调用，计算剩余完工天数（注：`BuildingHelper` 无独立文档页，此处仅作代码引用，不链接）。

### 加速（Boost）参数

- **`GetBoostCost(Town town)`**
  - 用途：返回本次加速要从城镇储备（`BoostBuildingProcess`）中扣减的成本：城堡 `CastleBoostCost`（250）、城镇 `TownBoostCost`（500）。
  - 副作用：无，纯计算；但调用方 `BuildingsCampaignBehavior.TickCurrentBuildingForTown` 会用其返回值扣减 `town.BoostBuildingProcess`。
  - 调用时机：由行为在每次 tick 累加进度后调用，按城镇/城堡区分扣除加速储备；`BuildingHelper.GetDaysToComplete` 也用它判断储备是否足以覆盖一次加速。

- **`GetBoostAmount(Town town)`**
  - 用途：返回本次加速向每日产出额外注入的产出量：城镇 `TownBoostBonus`（50）、城堡 `CastleBoostBonus`（20），并叠加总督 `Steward.Relocation`、`Trade.SpringOfGold` 专长的比例加成（`num + (int)(num * bonus)`）。
  - 副作用：无，纯计算。
  - 调用时机：`CalculateDailyConstructionPowerInternal` 在计算加速贡献项时调用，把该值乘以“剩余储备 / 总成本”的比例后加入当日产出。

### 静态阈值属性

- **`TownBoostCost` / `TownBoostBonus` / `CastleBoostCost` / `CastleBoostBonus`（int 属性）**
  - 用途：默认实现的常量阈值——城镇加速成本 500、加速产出 50；城堡加速成本 250、加速产出 20。派生类可覆盖以改变整表加速规则。
  - 副作用：无。
  - 调用时机：`GetBoostCost` 与 `GetBoostAmount`（以及 `CalculateDailyConstructionPowerInternal` 的加速比例计算）在每次计算时读取这些属性。

## 示例

读取某城镇当日的施工产出（界面显示与进度累加都走这条路径）：

```csharp
Town town = Settlement.All.GetRandomElement().Town;
ExplainedNumber construction = Campaign.Current.Models.BuildingConstructionModel
    .CalculateDailyConstructionPower(town, includeDescriptions: false);
float dailyConstructionPower = construction.ResultNumber;
```

读取加速的成本与增量（储备管理界面 `TownManagementReserveControlVM` 即如此使用）：

```csharp
int boostCost = Campaign.Current.Models.BuildingConstructionModel.GetBoostCost(town);
int boostAmount = Campaign.Current.Models.BuildingConstructionModel.GetBoostAmount(town);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [DefaultBuildingConstructionModel](../DefaultBuildingConstructionModel) · [Town](../Town) · [Settlement](../Settlement) · [Building](../Building) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [BuildingEffectModel](../BuildingEffectModel) · [BuildingScoreCalculationModel](../BuildingScoreCalculationModel) · [BuildingModel](../BuildingModel) · [BuildingType](../BuildingType) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [ExplainedNumber](../ExplainedNumber)
