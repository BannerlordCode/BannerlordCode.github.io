---
title: "NavigationHelper"
description: "战役地图导航的静态门面：把 Campaign 的地形规则与地图网格查询组合成有效性判断、可达点采样、陆海过渡和主队交互结果。"
---
# NavigationHelper

**Namespace:** `Helpers`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class NavigationHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 一句话职责

它不移动队伍，也不保存导航状态；它把当前战役的 `PartyNavigationModel` 规则和 `MapSceneWrapper` 网格查询组合成“这个点能不能走”“附近哪里可达”“陆海切换如何计算”等结果。

## 心智模型

把 `NavigationHelper` 看成地图层的**查询与采样门面**，而不是可继承的导航服务。它没有实例、字段或生命周期，所有公开入口都是静态方法，并直接读取 `Campaign.Current`：

- `IsPositionValidForNavigationType` 和 `CanPlayerNavigateToPosition` 负责把 `CampaignVec2`/导航面交给当前 [`PartyNavigationModel`](../../campaign/PartyNavigationModel) 判断；前者是通用地形有效性，后者是主队能否以某种导航类型到达。
- `GetClosestNavMeshFaceCenterPositionForPosition`、`FindPointAroundPosition`、`FindReachablePointAroundPosition` 和 `FindPointInsideArea` 负责地图网格上的修复或随机采样。它们不会替调用者把队伍放到返回点。
- 两个过渡工厂返回 [`EmbarkDisembarkData`](../EmbarkDisembarkData)，把陆海边界的几何结果交给 [`MapState`](../../campaign/MapState) 和 [`MobileParty`](../../campaign/MobileParty) 的状态机。
- `GetInteractionDataForMainParty` 只选择港口或城门位置并返回导航能力；它不打开 settlement 菜单，也不执行进入 settlement 的 Action。

正确的调用时机是战役和地图场景已经初始化之后。错误的理解是把它当作“传送 API”或“保证一定返回可用点的随机数 API”：采样最多尝试 250 次，可能返回中心点或 `CampaignVec2.Invalid`，最终是否改变世界状态仍由调用方负责。

## 依赖关系与调用链

- **上游运行时：**所有需要地图的入口都访问 `Campaign.Current.MapSceneWrapper`；地形允许性、无效地形数组、玩家导航能力和陆海过渡阈值来自 `Campaign.Current.Models.PartyNavigationModel`。区域距离还使用 `Campaign.Current.Models.MapDistanceModel` 的陆海切换成本。
- **位置契约：**输入和输出主要是 [`CampaignVec2`](../../campaign/CampaignVec2)，它同时携带坐标、导航面和 `IsOnLand`；`PathFaceRecord` 重载只在导航面有效时查询地图地形。
- **直接下游：**[`MapState`](../../campaign/MapState) 用 `CanPlayerNavigateToPosition` 设置主队移动；[`MobileParty`](../../campaign/MobileParty) 在移动 tick、地图变化和陆海转换中调用有效性/采样入口；[`Army`](../../campaign/Army) 与 [`MapEvent`](../../campaign/MapEvent) 用可达点修复队伍位置。
- **导航扩展：**[`EmbarkDisembarkData`](../EmbarkDisembarkData) 是嵌套在 `NavigationHelper` 内的数据结果，不是另一套状态机；它的消费者决定何时开始、取消或完成转换。
- **存档边界：**Helper 本身没有可保存字段。返回点是当前地图网格和模型规则下的瞬时结果，若要改变 `MobileParty`、`MapEvent` 或 settlement 状态，应走对应对象/Action 的生命周期，而不是把 Helper 当作持久化层。

## 有效性与主队导航

### `IsPositionValidForNavigationType`

```csharp
public static bool IsPositionValidForNavigationType(
    CampaignVec2 vec2,
    MobileParty.NavigationType navigationType);

public static bool IsPositionValidForNavigationType(
    PathFaceRecord face,
    MobileParty.NavigationType navigationType);
```

`CampaignVec2` 重载先检查 `vec2.IsValid()`，再转到 `Face` 重载；导航面重载读取地图上的 `TerrainType`，最后交给 `PartyNavigationModel.IsTerrainTypeValidForNavigationType`。因此它只回答“此位置在指定导航类型下是否有效”，不会检查目标距离、路径是否存在或主队当前是否能开始移动。

这是队伍修复流程的基础查询：`MobilePartyHelper`、`Army`、`MapEvent` 和角色创建代码都先用它判断旧位置，再用 `GetClosestNavMeshFaceCenterPositionForPosition` 或 `FindReachablePointAroundPosition` 找替代点。传入 `CampaignVec2.Invalid` 会稳定返回 `false`；传入无效 `PathFaceRecord` 也不会访问地图地形。

### `CanPlayerNavigateToPosition`

```csharp
public static bool CanPlayerNavigateToPosition(
    CampaignVec2 vec2,
    out MobileParty.NavigationType navigationType);
```

这是对 `Campaign.Current.Models.PartyNavigationModel.CanPlayerNavigateToPosition` 的薄封装，返回规则模型的结果并通过 `out` 给出导航类型。它不写 `MobileParty.MainParty` 的移动目标；[`MapState.ProcessTravel`](../../campaign/MapState) 的实际顺序是先调用它，再把成功的目标交给 `MainParty.SetMoveGoToPoint`。

### `GetClosestNavMeshFaceCenterPositionForPosition`

```csharp
public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(
    CampaignVec2 vec2,
    int[] excludedFaceIds);
```

它把位置和排除面数组传给 `MapSceneWrapper.GetNearestFaceCenterForPosition`，返回最近导航面中心。`excludedFaceIds` 通常来自 `PartyNavigationModel.GetInvalidTerrainTypesForNavigationType`，不是单个 face ID；调用方要根据自己的导航类型先取得这组排除值。这个方法只找几何中心，不保证它适合主队、能走到目标或能跨越陆海边界。

## 陆海过渡

### `GetEmbarkDisembarkDataForTick`

```csharp
public static EmbarkDisembarkData GetEmbarkDisembarkDataForTick(
    CampaignVec2 position,
    Vec2 direction);
```

内部沿方向寻找导航网格边缘，再用 `PartyNavigationModel.GetEmbarkDisembarkThresholdDistance()` 构造过渡起止点。结束点无效时返回 `EmbarkDisembarkData.Invalid`；起点无效但结束点有效时，结果会把传入的当前位置作为起点。这个版本用于普通移动队的 tick 计算，返回的 dead-zone 标记保持为 `false`。

### `GetEmbarkAndDisembarkDataForPlayer`

```csharp
public static EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(
    CampaignVec2 position,
    Vec2 direction,
    CampaignVec2 moveTargetPointOfTheParty,
    bool isMoveTargetOnLand);
```

它先调用 tick 版本。如果过渡两侧最初被判为同一种可导航地形，就从玩家目标导航面中心重新计算；随后比较目标到网格边缘的距离与过渡阈值，设置 `IsTargetingTheDeadZone` 和 `IsTargetingOwnSideOfTheDeadZone`。主队的 `MapState.ProcessTravel` 用这两个标记把模糊点击目标改成明确的起点或终点；不要把返回对象的布尔字段改成“强制登船”开关。

这两个方法的返回类型是本类的嵌套 [`EmbarkDisembarkData`](../EmbarkDisembarkData)。应先检查 `IsValidTransition`，再读取位置字段；无效哨兵中的 `CampaignVec2` 不能继续交给导航面查询。

## 随机点与可达路径

### `FindPointAroundPosition`

```csharp
public static CampaignVec2 FindPointAroundPosition(
    CampaignVec2 centerPosition,
    MobileParty.NavigationType navigationCapability,
    float maxDistance,
    float minDistance = 0f,
    bool requirePath = true,
    bool useUniformDistribution = false);
```

它在以中心为圆心的范围内最多尝试 250 个随机点。搜索半径先按地图边界裁剪；候选必须有有效导航面，并在 `requirePath` 为 `true` 时通过 `MapSceneWrapper.GetPathDistanceBetweenAIFaces` 的路径检查，最后还要通过 `IsPositionValidForNavigationType`。`useUniformDistribution` 决定圆内半径的随机方式。

返回值有明确的失败语义：`maxDistance <= 0` 或 250 次都没有候选时，方法保留并返回原 `centerPosition`。所以调用者不能把“返回值非 Invalid”当作“刚刚找到新位置”，也不要假设 `requirePath = false` 已验证两点之间存在路径。

### `FindReachablePointAroundPosition`

有两个入口：

```csharp
public static CampaignVec2 FindReachablePointAroundPosition(
    CampaignVec2 center,
    int[] excludedFaceIds,
    float maxDistance,
    float minDistance = 0f,
    bool useUniformDistribution = false);

public static CampaignVec2 FindReachablePointAroundPosition(
    CampaignVec2 center,
    MobileParty.NavigationType navigationCapability,
    float maxDistance,
    float minDistance = 0f,
    bool useUniformDistribution = false);
```

导航类型重载先从 `PartyNavigationModel` 取得无效地形数组，再转到数组重载。数组重载要求候选导航面有效，并通过 `GetPathDistanceBetweenAIFaces` 的可达性检查；失败或 `maxDistance <= 0` 时返回原中心。它是游戏在队伍生成、地图改变、地图事件传送和军队重组时寻找附近合法位置的常用入口。

### `FindPointInsideArea`

简单重载在矩形内最多随机 250 次：

```csharp
public static CampaignVec2 FindPointInsideArea(
    Vec2 minBorder,
    Vec2 maxBorder,
    MobileParty.NavigationType navigationCapability);
```

源码用 `MBRandom.RandomFloatRanged` 生成矩形点，并以 `isOnLand: true` 创建 `CampaignVec2`，再检查导航类型。因此它适合陆地矩形采样；不能因为参数接受 `NavigationType.Naval` 就假定它会生成海上位置。找不到有效点时返回 `CampaignVec2.Invalid`。

带中心的重载还可以约束距离和路径：

```csharp
public static CampaignVec2 FindPointInsideArea(
    Vec2 minBorders,
    Vec2 maxBorders,
    CampaignVec2 center,
    MobileParty.NavigationType navigationCapability,
    float maxDistance,
    float minDistance = 0f,
    bool requirePathFromCenter = false);
```

它先把边界的每个轴规范化，按矩形最远角限制 `maxDistance`，再在中心周围采样；候选必须同时满足导航有效性与严格边界检查。`requirePathFromCenter` 为 `true` 时还会使用当前导航类型和陆海切换成本验证路径。如果 250 次仍未找到结果，源码触发 `Debug.FailedAssert`，然后退回简单矩形重载；调用方必须仍检查返回点是否有效。

### `IsPointInsideBorders`

```csharp
public static bool IsPointInsideBorders(
    Vec2 point,
    Vec2 minBorders,
    Vec2 maxBorders);
```

四个比较都是严格不等式：点在 `min` 或 `max` 的边界线上会返回 `false`。它只检查二维矩形，不检查导航面、地形、路径或地图全局边界，适合和 `FindPointInsideArea` 的导航检查组合使用。

## 主队与 settlement 交互

### `GetInteractionDataForMainParty`

```csharp
public static void GetInteractionDataForMainParty(
    Settlement settlement,
    out bool canNavigate,
    out MobileParty.NavigationType bestNavigationType,
    out bool isTargetingPort);
```

当主队在海上且 settlement 有港口时，方法选择 `settlement.PortPosition` 并将 `isTargetingPort` 设为 `true`；其他情况选择 `settlement.GatePosition` 并将标记设为 `false`。最后统一调用 `CanPlayerNavigateToPosition` 得到 `canNavigate` 和 `bestNavigationType`。它不检查 settlement 是否为空，也不进入 settlement；调用方必须保证 settlement 来自当前 Campaign 且已经初始化。

## 真实使用示例：检查主队目标

下面使用游戏真实持有的 `Campaign.Current`、`MobileParty.MainParty` 和 `MoveTargetPoint`，只查询能否导航；它不会绕过 `MapState.ProcessTravel` 去写移动状态。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Helpers;
using TaleWorlds.CampaignSystem.Party;

Campaign campaign = Campaign.Current;
MobileParty party = MobileParty.MainParty;
CampaignVec2 target = party.MoveTargetPoint;

if (campaign != null && target.IsValid() &&
    NavigationHelper.CanPlayerNavigateToPosition(
        target, out MobileParty.NavigationType navigationType))
{
    MobileParty.NavigationType selectedType = navigationType;
    CampaignVec2 inspectedTarget = target;
}
```

若目的是让玩家移动，应把目标交给 [`MapState.ProcessTravel`](../../campaign/MapState)，而不是在 Helper 查询成功后自行改写 `MoveTargetPoint`。

## 真实使用示例：为当前队伍找附近可达点

游戏中的生成、地图变化和事件修复都从现有 `MobileParty.Position` 或 settlement 门口开始，再让 Helper 采样；返回点仍需由调用方决定如何使用。

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Helpers;

MobileParty party = MobileParty.MainParty;
CampaignVec2 candidate = NavigationHelper.FindReachablePointAroundPosition(
    party.Position,
    party.NavigationCapability,
    8f,
    1f);

if (candidate.IsValid())
{
    float distanceFromParty = candidate.Distance(party.Position);
}
```

这个示例没有直接把 `candidate` 写回 `party.Position`，因为传送、地图事件重定位和队伍初始化各自有生命周期约束；应沿用相应调用方已经使用的流程。

## 不要这样使用

- 不要在 `Campaign.Current`、`MapSceneWrapper` 或 `PartyNavigationModel` 尚未建立的模块加载阶段调用这些方法；静态门面不会替你等待地图初始化。
- 不要把 `IsPositionValidForNavigationType` 当作路径查询，也不要把 `CanPlayerNavigateToPosition` 当作设置移动目标的方法。
- 不要忽略 `CampaignVec2.Invalid`、中心点回退或 250 次采样上限；每个随机入口都允许“没有找到新点”。
- 不要把简单 `FindPointInsideArea` 当作海上采样器；源码创建候选时固定使用陆地侧标志。
- 不要把采样结果跨存档、跨地图场景或跨模型替换缓存。结果依赖当前网格、地形规则、随机源和陆海路径成本。
- 不要把 `GetInteractionDataForMainParty` 当作进入 settlement 的入口；它只选择港口/城门位置并计算导航能力，进入流程必须由对应的 settlement 状态与 Action 完成。

## 风险与版本边界

`NavigationHelper` 的危险面主要来自“查询结果被误当成状态变更”：无效位置继续进入 `Face`/路径查询可能造成异常，采样失败被当成有效坐标可能把队伍或地图事件写到非法位置，直接写队伍位置则可能跳过事件、队伍附属关系或海陆转换状态。读取结果后始终先做 `IsValid()` 或对应布尔检查，并让拥有生命周期的对象负责最终写入。

所有公开入口都依赖 v1.4.5 的 `Campaign.Current`、地图场景和模型实现。替换 `PartyNavigationModel` 会改变地形允许性、玩家导航类型、无效地形数组和陆海阈值；替换 `MapDistanceModel` 会改变路径采样中的区域切换成本。本文解释的是 v1.4.5 `NavigationHelper.cs` 的行为，不承诺不同版本或不同模型实现具有相同的随机结果和边界距离。

## ↑ 父级导航

- [系统 API 索引](../)
- [EmbarkDisembarkData](../EmbarkDisembarkData)：本类陆海过渡工厂返回的数据契约。

## ↔ 同级与相关类型

- [MobilePartyHelper](../MobilePartyHelper)：队伍辅助流程中使用位置有效性与可达点。
- [CampaignVec2](../../campaign/CampaignVec2)：导航位置、导航面和陆海侧。
- [PartyNavigationModel](../../campaign/PartyNavigationModel)：地形、导航能力和过渡阈值规则。
- [MobileParty](../../campaign/MobileParty)：移动、转换、生成和位置状态。
- [MapState](../../campaign/MapState)：玩家地图目标的最终移动入口。
- [Campaign](../../campaign/Campaign)：提供当前地图场景与模型集合。
- 中文/English：[NavigationHelper](../../../../en/api/system/NavigationHelper)
