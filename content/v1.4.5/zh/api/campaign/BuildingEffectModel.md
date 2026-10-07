---
title: "BuildingEffectModel"
description: "集中计算单座建筑（Building）对某一类产出（如忠诚、安全、繁荣、食物、税收、驻军容量、巡逻队强度）的净效果值（ExplainedNumber）的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.BuildingEffectModel 解析，被 Building.AddEffectOfBuilding 与各定居点规则模型在结算时调用。"
---

# BuildingEffectModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingEffectModel.cs

## 概述

该模型把“某座已建造建筑对某种 `BuildingEffectEnum`（忠诚、安全、繁荣、食物、税收、驻军容量、巡逻队强度……）贡献多少”这一计算集中起来：先取建筑在对应等级的基础值，再叠加总督专长加成，并对按附属村庄炉灶数结算的收入类建筑做缩放。它本身是无状态纯计算，真正的建筑等级与状态保存在 [Building](../Building) / [Town](../Town) 上，由各定居点规则模型在每日结算时经 `Town.AddEffectOfBuildings` 聚合读取。

## 心智模型

BuildingEffectModel 是一个纯计算的规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultBuildingEffectModel`）并持有，运行时统一用 `Campaign.Current.Models.BuildingEffectModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。各定居点规则模型（如 `DefaultSettlementLoyaltyModel`、`DefaultSettlementSecurityModel`、`DefaultSettlementMilitiaModel`、`DefaultSettlementProsperityModel`、`DefaultSettlementTaxModel`、`DefaultSettlementFoodModel`）在结算 `Town` 的 `Loyalty` / `Security` / `Militia` / `Prosperity` / `Tax` 等属性时，调用 `Town.AddEffectOfBuildings(effect, ref result)` → 逐建筑 `Building.AddEffectOfBuilding` → 最终落到 `BuildingEffectModel.GetBuildingEffect`，把每个建筑的效果并入一个 `ExplainedNumber`；而 `DefaultSettlementPatrolModel` 则直接读取 `PatrolPartyStrength` 决定巡逻队模板等级。要改“建筑产出多少”就继承并注册一个替换实现；要读结果走模型，绝不要把模型当成写世界的入口或直接改建筑字段。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某座建筑对某种产出的贡献值”时，读取 `Campaign.Current.Models.BuildingEffectModel.GetBuildingEffect(building, effect)` 的返回值，或提供一个新的派生类覆盖 `GetBuildingEffect` 并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“改”建筑产出——它只返回数值，真实的世界状态（建筑等级、炉灶数、总督）在 [Building](../Building) / [Town](../Town) / [Settlement](../Settlement) 上。要改变建筑等级应走建造行为或对应的 `*Action`，而不是指望覆盖模型来影响存档；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。在 `Mission` 或战斗逻辑里取 `Campaign.Current.Models` 是错误的访问层。

## 怎么用

何时该读这一页、何时不该读、该改哪个模型，见上文「何时使用 / 何时不要使用」。本节只讲怎么从源码拿到它、以及它在 v1.4.5 里被谁真的调用。

### 怎么拿到它

抽象声明在 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingEffectModel.cs:6`，`public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>`。默认实现是 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingEffectModel.cs:9`。

安装链是 `GameModels`：属性在 `GameModels.cs:151`，赋值在 `GameModels.cs:332` 的 `BuildingEffectModel = GetGameModel<BuildingEffectModel>()`。所以 mod 替换它的方式与其它 `MBGameModel` 一样——派发器注册一个同类型实现，由 `GameModels` 在战役初始化时解析。

它在整棵树里只有 4 个文件引用，而**真实调用点只有两处**，都在逐条 grep 的结果里：`Building.cs:170` 是 `AddEffectOfBuilding` 内部取单座建筑的数值；`DefaultSettlementPatrolModel.cs:50` 是巡逻队强度那条独立链路，取 `PatrolPartyStrength` 后直接 `(int)` 截断。

第二个调用点值得单独记：`DefaultSettlementPatrolModel.cs:50` 不经过 `Building.AddEffectOfBuilding`，也不经过 `Town.AddEffectOfBuildings`，它自己直连模型。也就是说**「建筑对某个枚举成员的贡献」有两条互不相干的取法**，一条汇进 `ExplainedNumber`，另一条直接取 `ResultNumber` 再截断。

### 典型用法

上面「示例」两段是「查集市建筑的食物贡献」和「查巡逻队营房的强度等级」，都是单建筑单效果。缺的一步是**一次遍历把某座建筑提供的全部效果列出来**——排查「这座建筑到底加了什么」时这是唯一可用的问法，因为 `BuildingType` 侧只有 `HasEffect` 与逐个查询：

```csharp
public static void DumpAllEffects(Building b)
{
    if (b == null || Campaign.Current == null)
    {
        return;
    }
    BuildingEffectModel model = Campaign.Current.Models.BuildingEffectModel;
    foreach (BuildingEffectEnum effect in Enum.GetValues(typeof(BuildingEffectEnum)))
    {
        if (!b.BuildingType.HasEffect(effect))
        {
            continue;   // HasEffect 在 BuildingType.cs:148，是 HasEffect 判定本身
        }
        ExplainedNumber value = model.GetBuildingEffect(b, effect);
        Debug.Print(effect + " -> " + value.ResultNumber, 0);
    }
}
```

`Enum.GetValues` 在这个枚举上是安全的：它的每个成员都有一个真实消费方（`DefaultClanFinanceModel.cs:456` 取 `TariffIncome`、`DefaultClanPoliticsModel.cs:68` 取 `Influence`、`DefaultBuildingConstructionModel.cs:139` 取 `ConstructionPerDay`、`Town.cs:467` 取 `FoodStock`），而 `HasEffect` 会把当前建筑不提供的成员先滤掉。

`DefaultBuildingEffectModel.cs:15` 只对 `DenarByBoundVillageHeartPerDay` 做了特判，其余成员走基类公式。所以自定义实现时要清楚哪些成员本来就有专属逻辑，不要把它们当「基类已覆盖」。

### 什么时候不要用它

不要把 `Campaign.Current.Models.BuildingEffectModel` 缓存进静态字段或长生命周期对象。每次新战役与读档都会由 `GameModels` 重新解析，缓存住的实例会在重载后指向旧战役的对象。

不要在 Mission 或战斗层取它。那是战役层的模型，`Campaign.Current` 在那种上下文里不可用。

### 最容易踩的坑

跨战役重载缓存实例：把实例缓存起来后，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingEffectModel>()` 解析并缓存实例。
- [Building](../Building) —— 被计算对象；`AddEffectOfBuilding` 是调用本模型的实际入口（依据 [BuildingEffectIncrementType](../BuildingEffectIncrementType) 决定累加还是乘因子）。
- [BuildingType](../BuildingType) —— `GetBuildingEffect` 内部用 `GetBaseBuildingEffectAmount(effect, building.CurrentLevel)` 取该建筑类型在对应等级的基础值。
- [BuildingEffectEnum](../BuildingEffectEnum) —— `GetBuildingEffect` 的第二个参数，路由到具体效果种类的枚举键。
- [BuildingEffectIncrementType](../BuildingEffectIncrementType) —— 决定 `AddEffectOfBuilding` 把本模型结果按绝对值（`Add`）还是乘性因子（`AddFactor`）并入 `ExplainedNumber`。
- [Town](../Town) —— `AddEffectOfBuildings` 聚合所有建筑的效果；`DefaultBuildingEffectModel` 读取 `building.Town.Villages` 与总督专长。
- [Settlement](../Settlement) —— 建筑所属定居点，作为规则结算的上下文。

下游与协同系统（调用方）：

- [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) —— 默认实现，定义基础值、绑定村庄炉灶缩放与总督专长加成。
- [BuildingModel](../BuildingModel) —— 建筑升级/进度相关模型，与效果计算同处建筑子系统，常被一起派生替换。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 每日处理建筑项目、推进建筑等级，是真实世界状态的写入方。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— `DefaultSettlementLoyaltyModel` 调用 `AddEffectOfBuildings(BuildingEffectEnum.Loyalty, …)`。
- [SettlementSecurityModel](../SettlementSecurityModel) —— `DefaultSettlementSecurityModel` 调用 `AddEffectOfBuildings(BuildingEffectEnum.SecurityPerDay, …)`。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— `DefaultSettlementMilitiaModel` 调用 `AddEffectOfBuildings(BuildingEffectEnum.Militia / MilitiaReduction / MilitiaVeterancyChance, …)`。
- [SettlementPatrolModel](../SettlementPatrolModel) —— `DefaultSettlementPatrolModel.GetPartyTemplateForPatrolParty` 直接读取 `BuildingEffectEnum.PatrolPartyStrength` 选择巡逻队模板等级。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 各定居点规则模型与巡逻模型均继承自它，是实际驱动读取的一方。
- [ExplainedNumber](../ExplainedNumber) —— `GetBuildingEffect` 的返回类型，用于携带带说明项的效果数值。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingEffectModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了效果公式，但建筑等级、炉灶、总督这些真实状态仍由 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 与定居点对象维护。只替换模型、却让调用方按旧假设处理各项产出，会出现界面数值与预测不一致。
- **`BuildingEffectIncrementType` 路由依赖 `BuildingType.HasEffect`**：`Building.AddEffectOfBuilding` 只有当 `BuildingType.HasEffect(effect)` 为真、且等级在 `[StartLevel, 3]` 区间、且（非每日工程或该建筑是 `Town.CurrentDefaultBuilding`）时才调用本模型。覆盖 `GetBuildingEffect` 却没让建筑类型声明对应效果，或不参与每日工程选择，计算会完全被跳过。
- **`DenarByBoundVillageHeartPerDay` 的炉灶缩放**：该效果的基础值会被 `building.Town.Villages` 的炉灶总数重新乘算，而非简单叠加。覆盖默认实现时若沿用基础值却忽略炉灶项，会严重低估该类收入建筑的实际产出。

## 成员说明

### 建筑效果计算（唯一抽象成员）

- **`GetBuildingEffect(Building building, BuildingEffectEnum effect)`**
  - 用途：返回指定建筑对指定 `BuildingEffectEnum` 的净效果值（`ExplainedNumber`）。默认实现 `DefaultBuildingEffectModel` 的流程是：先取 `building.BuildingType.GetBaseBuildingEffectAmount(effect, building.CurrentLevel)` 作为基准；若效果是 `DenarByBoundVillageHeartPerDay`，则把基准乘以该城镇所有附属村庄炉灶数之和；若效果是 `FoodStock` 且建筑为城堡粮仓或聚落仓库，叠加工程专长 `Battlements` 加成；始终叠加管家专长 `Contractors`；若是每日工程类建筑，叠加管家 `MasterOfPlanning`；若建筑是集市或每日节庆竞技场，叠加魅力专长 `PublicSpeaker`。
  - 副作用：无，纯计算；仅读取 `Building` / `Town` / 总督专长，不改任何世界状态。
  - 调用时机：由 `Building.AddEffectOfBuilding` 在聚合路径中调用（结果经 [BuildingEffectIncrementType](../BuildingEffectIncrementType) 走 `Add` 累加或 `AddFactor` 乘因子并入结果）；由 `DefaultSettlementPatrolModel.GetPartyTemplateForPatrolParty` 直接调用读取 `PatrolPartyStrength`。

## 示例

读取某城镇集市建筑对食物储备的每日贡献（含专长加成分解）：

```csharp
Building marketplace = town.Buildings.FirstOrDefault(
    b => b.BuildingType == DefaultBuildingTypes.SettlementMarketplace);
if (marketplace != null)
{
    ExplainedNumber foodStock = Campaign.Current.Models.BuildingEffectModel
        .GetBuildingEffect(marketplace, BuildingEffectEnum.FoodStock);
    float foodStockPerDay = foodStock.ResultNumber;
}
```

直接读取巡逻队营房对巡逻队强度的等级，供巡逻队模型选择模板：

```csharp
float strength = Campaign.Current.Models.BuildingEffectModel
    .GetBuildingEffect(guardHouse, BuildingEffectEnum.PatrolPartyStrength).ResultNumber;
int tier = (int)strength;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Building](../Building) · [BuildingType](../BuildingType) · [BuildingEffectEnum](../BuildingEffectEnum) · [BuildingEffectIncrementType](../BuildingEffectIncrementType) · [BuildingModel](../BuildingModel) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [Town](../Town) · [Settlement](../Settlement) · [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementPatrolModel](../SettlementPatrolModel) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [ExplainedNumber](../ExplainedNumber)
