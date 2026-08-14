---
title: "DefaultPartyNavigationModel"
description: "战役地图默认导航策略：定义陆地地形合法性、无效地形数组、登离船阈值和玩家目标检查，但不执行移动。"
---

# DefaultPartyNavigationModel

**命名空间:** `TaleWorlds.CampaignSystem.GameComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class DefaultPartyNavigationModel : PartyNavigationModel`  
**基类:** [PartyNavigationModel](../PartyNavigationModel/)  
**源文件:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`  
**1.4.5 源文件:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyNavigationModel.cs`

## 一句话职责

它是 vanilla 的地图可行性策略：默认只接受陆地导航规则，向寻路器提供应排除的地形整数值，并检查玩家目标是否具备基本的陆地导航条件；它不移动队伍、不传送，也不创建船只。

## 心智模型

把这个类放在“能不能走”的一层，而不是“怎么走”的执行层。战役启动时，`GameModels` 把实例挂到 `Campaign.Current.Models.PartyNavigationModel`；地图辅助类和 AI 随后读取它的规则，再把结果交给导航网格和 `MobileParty`。模型本身不改位置，也不派发登船、进入据点或位置变更事件。

```text
Campaign.Current.Models.PartyNavigationModel
          |
          +--> 地形谓词 / 无效地形整数数组
          |          |
          |          +--> NavigationHelper / MobilePartyAi / 地图寻路
          |
          +--> 玩家目标前置检查
                     |
                     +--> MapCursor 的可导航反馈
```

默认实例在构造函数中遍历 `TerrainType`，把不属于 `Plain`、`Desert`、`Snow`、`Forest`、`Steppe`、`Swamp`、`Dune`、`Bridge`、`Fording`、`Beach` 的枚举值缓存到 `_invalidTerrainTypes`。这是一份规则快照，不是每次调用都重新计算的路径。`Default` 和 `All` 导航类型使用这份数组；其他导航类型返回空数组，但这不代表默认模型已经支持这些导航类型，因为地形谓词仍会返回 `false`。

## 何时使用，何时不要用

- 只想判断当前战役采用的目标规则时，从 `Campaign.Current.Models.PartyNavigationModel` 读取接口，不要自己 `new DefaultPartyNavigationModel()` 并把它当成当前生效模型。
- 要改变自定义地图导航规则时，在战役 starter 阶段注册一个一致的 `PartyNavigationModel` 实现，并同步考虑地形谓词、无效数组、玩家目标检查和 AI 寻路。
- 不要在模型中设置 `MobileParty.Position`、调用传送或登船流程，也不要修改地图面；这些是队伍/地图执行层的职责。
- 不要直接追加、排序或清空 `GetInvalidTerrainTypesForNavigationType` 返回的默认数组。`Default`/`All` 返回的是构造时缓存的共享数组。
- 不要只把 `HasNavalNavigationCapability` 改成 `true` 就宣称支持海上移动；船只、海上寻路、过渡、速度和安全返陆逻辑必须同时存在。

## 依赖

### 上游输入

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign/) / [`GameModels`](../GameModels/) | 在战役启动时注册并在运行期持有活动模型。 |
| [`MobileParty`](../../campaign/MobileParty/) | 提供玩家当前位置、导航面和队伍导航能力的上下文。 |
| `CampaignVec2` / `TerrainType` | 提供目标 Face、陆地状态和地形枚举。 |

### 下游消费者

| 类型 | 关系 |
| --- | --- |
| [`NavigationHelper`](../NavigationHelper/) | 将无效地形数组传给地图寻路，并使用登离船阈值计算过渡点。 |
| [`AIMoveToNearestLandBehavior`](../../campaign/AIMoveToNearestLandBehavior/) | 队伍需要从海上返回陆地时，用 `All` 的无效数组查询最近可达陆地。 |
| [`MobilePartyAi`](../MobilePartyAi/) | 在返陆和逃跑方向检查中读取无效地形和地形合法性。 |
| [`PartySpeedModel`](../PartySpeedModel/) | 计算合法路线上的速度；它不替代本模型的地形合法性判断。 |
| `MapCursor` | 通过地图辅助流程显示玩家目标是否可导航；其调用链经过 `NavigationHelper`。 |

模型没有存档字段。它的规则会被地图 AI 高频读取，所以应保持无副作用，并在 campaign 尚未创建或 `MobileParty.MainParty` 尚未初始化时避免调用依赖当前状态的检查。

## 成员契约

| 成员 | 默认行为 | 调用时机与副作用 |
| --- | --- | --- |
| `GetEmbarkDisembarkThresholdDistance()` | 返回 `0f`。 | `NavigationHelper` 用它在导航网格边缘计算登离船过渡点；它不启动登船，也不改变位置。 |
| `GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)` | `Default` 或 `All` 返回构造时缓存的 `_invalidTerrainTypes`；其他类型返回新的空 `int[]`。 | 地图寻路用这些整数值排除不可走面；调用方不能把返回数组当作可写配置。 |
| `IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)` | 仅当导航类型为 `Default`/`All` 且地形属于默认陆地集合时返回 `true`；默认对 `Naval` 返回 `false`。 | `MobilePartyAi` 等代码用它判断候选逃跑方向；它只回答规则，不执行移动。 |
| `HasNavalNavigationCapability(MobileParty mobileParty)` | 始终返回 `false`，默认实现不读取队伍参数。 | 这是模型层的能力报告，不等于队伍当前是否在海上，也不等于拥有船只。 |
| `CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)` | 先把输出设为 `Default`，再要求目标 Face 有效、主队当前位置在陆地、目标在陆地，并检查目标 Face 的 `FaceGroupIndex` 不在活动模型的无效数组中。 | `MapCursor` 可用它做目标前置检查；返回 `false` 时输出仍为 `Default`，且不改变任何世界状态。 |

### `CanPlayerNavigateToPosition` 的特殊边界

这个默认实现不是调用 `IsTerrainTypeValidForNavigationType` 来检查目标，而是把目标的 `FaceGroupIndex` 与 `Campaign.Current.Models.PartyNavigationModel.GetInvalidTerrainTypesForNavigationType(Default)` 的结果比较。因此替换模型时，只改地形谓词而不改无效数组，可能让玩家光标、AI 路径和实际寻路产生分歧。自定义实现应明确保持这些入口的一致性。

## 真实读取路径

### 检查玩家目标

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public bool CanPlayerSelect(CampaignVec2 target, out MobileParty.NavigationType navigationType)
{
    navigationType = MobileParty.NavigationType.Default;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
    return model.CanPlayerNavigateToPosition(target, out navigationType);
}
```

这段代码只做查询。目标通过检查后，仍需由玩家地图控制器和队伍 AI 处理真正的移动。

### 给返陆寻路提供排除集合

`AIMoveToNearestLandBehavior` 在海上队伍需要回到陆地时，按下面的真实路径读取 `All` 规则并传给地图场景包装器：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

MobileParty party = MobileParty.MainParty;
PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
int[] invalidTerrainTypes = model.GetInvalidTerrainTypesForNavigationType(
    MobileParty.NavigationType.All);
CampaignVec2 landTarget = Campaign.Current.MapSceneWrapper
    .GetNearestFaceCenterForPositionWithPath(
        party.CurrentNavigationFace,
        true,
        Campaign.MapDiagonal / 2f,
        invalidTerrainTypes);
```

`landTarget` 是寻路结果；`invalidTerrainTypes` 只是过滤参数，不是位置、速度倍率或可供 Mod 永久保存的配置。

## 替换默认模型

模型应在 `MBSubModuleBase` 的 starter 钩子内注册。下面的示例只改变过渡阈值，仍保留默认模型的陆地规则；实际项目还必须测试海陆交界和返陆路径。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MyPartyNavigationModel : DefaultPartyNavigationModel
{
    public override float GetEmbarkDisembarkThresholdDistance()
    {
        return 0.25f;
    }
}

public sealed class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddModel(new MyPartyNavigationModel());
        }
    }
}
```

注册后，运行期仍从 `Campaign.Current.Models.PartyNavigationModel` 获取活动实例。注册必须早于地图场景创建 `SandBoxNavigationCache`；否则缓存可能继续持有旧的排除面数组和海陆切换成本。不要在模型里把 `Campaign.Current.Models.PartyNavigationModel` 当作自己的基类再次调用，否则容易形成递归或读取错误的替换层。

## 风险与版本边界

1. `CanPlayerNavigateToPosition` 依赖 `Campaign.Current` 和 `MobileParty.MainParty.Position`。标题界面、模块静态初始化或战役对象尚未建立时调用，可能空引用或得到无效状态。
2. 只改 `IsTerrainTypeValidForNavigationType`、只改无效数组、或只改 `CanPlayerNavigateToPosition`，会造成“光标允许但 AI 不走”或“AI 认为可行但地图寻路失败”。
3. 默认 `Default`/`All` 数组是实例缓存。修改它会污染同一模型的后续寻路查询；需要自定义集合时应返回自己的副本或重新实现完整契约。
4. 默认 `HasNavalNavigationCapability` 为 `false`，不能通过单独返回 `true` 创建船只、海上速度、登船过渡或存档状态。海上 Mod 必须和目标版本的船只、MapDistance、速度及返陆行为一起验证。
5. `GetEmbarkDisembarkThresholdDistance` 参与过渡点计算；随意增大可能把过渡点推到无效面，导致路径失败。它不是传送距离设置。
6. 模型替换必须早于 `SandBoxNavigationCache` 初始化；该缓存会保存排除面和海陆区域切换成本，晚注册不会自动重建旧缓存。
7. v1.3.15 与 v1.4.5 的五个公开成员、默认陆地集合、`0f` 阈值和默认无海军能力保持一致；1.4.5 的源码位于 `Bannerlord.Source/bin`，周边海上系统更完整，不能把只在旧版本验证过的海上实现直接复制过去。

## 导航

- [父级：campaign-ext](../)
- [契约：PartyNavigationModel](../PartyNavigationModel/)
- [模型家族](../models/)
- [同级：DefaultPartySpeedCalculatingModel](../DefaultPartySpeedCalculatingModel/) · [PartySpeedModel](../PartySpeedModel/)
- [相关读取：MobileParty](../../campaign/MobileParty/) · [MobilePartyAi](../MobilePartyAi/)
- [地图调用：NavigationHelper](../NavigationHelper/) · [AIMoveToNearestLandBehavior](../../campaign/AIMoveToNearestLandBehavior/)
- [注册入口：CampaignGameStarter](../CampaignGameStarter/)
