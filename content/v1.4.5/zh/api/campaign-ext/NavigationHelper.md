---
title: "NavigationHelper"
description: "地图导航的静态工具箱：地形合法性判定、navmesh 最近点、上下船过渡数据、环状随机取点与「玩家能否走到某点」的统一入口。"
---

# NavigationHelper

**Namespace:** `Helpers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class NavigationHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 概述

这是战役地图上「**这个点能不能走、怎么走到最近的合法点、路上会不会掉进海里**」这一整套问题的答案所在。它是一个 325 行的纯静态类，外加一个嵌套的 `public class EmbarkDisembarkData` 值载体。**它自己不存任何状态**——每一次调用都是从 `Campaign.Current.MapSceneWrapper`（native 地图场景）与 `Campaign.Current.Models.PartyNavigationModel`（可替换的导航模型）现算。

八个公开方法可以分成四组。**地形合法性**组是 `IsPositionValidForNavigationType` 的两个重载（`CampaignVec2` 版与 `PathFaceRecord` 版）与 `CanPlayerNavigateToPosition`；**navmesh 定位**组是 `GetClosestNavMeshFaceCenterPositionForPosition`；**上下船过渡**组是 `GetEmbarkDisembarkDataForTick` 与 `GetEmbarkAndDisembarkDataForPlayer`，加上嵌套类 `EmbarkDisembarkData`；**随机取点**组是 `FindPointAroundPosition`、`FindReachablePointAroundPosition` 的两个重载、`FindPointInsideArea` 的两个重载，外加私有实现 `FindPointInCircle`。

最容易忽略的是最后两个细节。一是 **`FindPointAroundPosition` 与两个 `FindPointInsideArea` 都是「最多试 250 次」的拒绝采样**：找不到合法点就返回**入参本身**（而不是 `Invalid`）——`FindPointAroundPosition` 返回 `centerPosition`，无参版 `FindPointInsideArea` 返回 `CampaignVec2.Invalid`。返回值等于入参是「没找到」的信号。二是**带 `center` 参数的 `FindPointInsideArea` 有唯一的断言兜底**：250 次都没成功时 `Debug.FailedAssert("Point should not be invalid!")` 然后**递归调用无参版**——这是全类里唯一一处自我递归。

## 心智模型

把它当成「**一次性的地图查询层，输出都是值**」。所有方法都不持有状态，所以调用顺序上唯一的硬约束是 **`Campaign.Current` 与 `Campaign.Current.MapSceneWrapper` 必须已就绪**——也就是必须在一个已加载地图的战役里。非战役上下文（主菜单、编辑器）调用会 NRE。

三个必须先建立的判断。第一，**「合法」不等于「可达」**。`IsPositionValidForNavigationType(vec, navigationType)` 只判「这个 face 的地形类型允许这种导航方式吗」，由 `PartyNavigationModel.IsTerrainTypeValidForNavigationType(faceTerrainType, navigationType)` 回答；而 `FindPointAroundPosition` 里真正的可达性是另一条更贵的检查——`MapSceneWrapper.GetPathDistanceBetweenAIFaces(...)` 配上限 `maxDistance` 与一组「无效地形类型」。**前者便宜、后者昂贵且可能被距离上限否掉。**

第二，**随机取点默认要求有路径**。`FindPointAroundPosition(center, navigationCapability, maxDistance, minDistance = 0f, requirePath = true, useUniformDistribution = false)` 的 `requirePath` 默认 **true**。关掉它会快很多，但得到的点可能是「地形合法却没有路能过去」的孤岛。`FindReachablePointAroundPosition` 的两个重载则**永远要求路径**——它是按 `int[] excludedFaceIds` 或按 `NavigationType` 推出的无效地形列表做路径检查的，没有开关。

第三，**上下船过渡的方向是双向的，靠 `IsOnLand` 标志区分**。`GetEmbarkDisembarkDataForTick(position, direction)` 做的事是：把 `direction` 分别 `RotateCCW(0.05f)` 与 `RotateCCW(-0.05f)` 做两个略微偏转的射线，用 `MapSceneWrapper.GetLastPointOnNavigationMeshFromPositionToDestination` 求出「射线撞上 navmesh 边缘的位置」，再用两条射线的落点差向量的左右法线各推 `PartyNavigationModel.GetEmbarkDisembarkThresholdDistance()` 得到**过渡起点与过渡终点**。源码里有一处值得注意的分支：

```csharp
if (transitionStartPosition.Face.IsValid() && transitionEndPosition.Face.IsValid())
{
    transitionStartPosition = CampaignVec2.Invalid;
    transitionEndPosition = CampaignVec2.Invalid;
}
else
{
    transitionStartPosition = new CampaignVec2(vec5 + originalEdge, position.IsOnLand);
    transitionEndPosition  = new CampaignVec2(vec4 + originalEdge, !position.IsOnLand);
}
```

**起点与终点都合法时反而判定为「无过渡」**——因为两端都在同一片 navmesh 上，说明没跨介质。跨介质时终点的 `IsOnLand` 被显式取反。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `EmbarkDisembarkData`（嵌套类） | `public class EmbarkDisembarkData` | 上下船过渡的数据载体，六个 public 字段 + 一个全参构造。**不是 struct**，所以引用传递就是共享同一个对象——`GetEmbarkDisembarkDataForPlayer` 就是在 `GetEmbarkDisembarkDataForTick` 的返回值上反复改写字段后交出去的。 |
| `EmbarkDisembarkData.Invalid` | `public static readonly EmbarkDisembarkData Invalid` | 「无过渡」哨兵，用 `isValid: false` + 三个 `CampaignVec2.Invalid` 构造。**`readonly` 且是共享单例**——改它的字段会影响所有拿到同一引用的调用方。 |
| `EmbarkDisembarkData.IsValidTransition` | `public bool IsValidTransition` | 有没有真实的上下船过渡。这是使用这批数据前**唯一该先判的字段**。 |
| `EmbarkDisembarkData.NavMeshEdgePosition` / `TransitionStartPosition` / `TransitionEndPosition` | `public CampaignVec2 ...` | 分别是「navmesh 边缘落点」「过渡起点」「过渡终点」。三者都带 `IsOnLand` 标志，**读的时候别用 `Position` 判断介质，要用 `IsOnLand`**。 |
| `EmbarkDisembarkData.IsTargetingTheDeadZone` / `IsTargetingOwnSideOfTheDeadZone` | `public bool ...` | 只在 `GetEmbarkAndDisembarkDataForPlayer` 里被写：`IsTargetingTheDeadZone = 起点与终点的地形合法性不同`，`IsTargetingOwnSideOfTheDeadZone = IsTargetingTheDeadZone && 移动目标所在 face 的 FaceIndex == 过渡起点所在 face 的 FaceIndex`。第二个标志的含义是「想上船但目标就在船这一侧」——典型的人为卡死情况。 |
| `IsPositionValidForNavigationType`（坐标重载） | `public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)` | 便宜的地形合法性判定。`vec2.IsValid()` 为假直接返回 false；否则取 `vec2.Face` 走下一个重载。 |
| `IsPositionValidForNavigationType`（face 重载） | `public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)` | 真正干活的那个：`Campaign.Current.MapSceneWrapper.GetFaceTerrainType(face)` 取地形类型，再交给 `Campaign.Current.Models.PartyNavigationModel.IsTerrainTypeValidForNavigationType(faceTerrainType, navigationType)`。**结论完全由模型决定**——改模型就能改「哪里算合法」。 |
| `CanPlayerNavigateToPosition` | `public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)` | 「玩家当前能力能不能走到这里」，并顺带把建议的导航方式写进 `out`。直接转发 `PartyNavigationModel.CanPlayerNavigateToPosition`。`GetInteractionDataForMainParty` 是它唯一的内部调用方。 |
| `GetClosestNavMeshFaceCenterPositionForPosition` | `public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int[] excludedFaceIds)` | 找离给定坐标最近的 navmesh 面中心，`excludedFaceIds` 里的面会被跳过。薄封装 `MapSceneWrapper.GetNearestFaceCenterForPosition(in vec2, excludedFaceIds)`。**注意形参是 `in`**——调用方传 `in` 变量或普通变量都行。 |
| `GetEmbarkDisembarkDataForTick` | `public static EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)` | 单帧版上下船判定：沿 `direction` 打三条射线（正、±0.05 弧度偏转）找 navmesh 边缘，推出过渡起点/终点；`transitionEndPosition` 无效就返回 `EmbarkDisembarkData.Invalid`。**返回的是共享单例时不要改字段**。 |
| `GetEmbarkAndDisembarkDataForPlayer` | `public static EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)` | 玩家意图版：先跑一次 tick 版；若起止两侧地形合法性相同，说明玩家其实站在「能直接走过去」的那一侧，于是**改用移动目标所在 navmesh 面中心重新算一次方向**再跑一遍；最后按「到目标的距离 < 到过渡起点的距离」决定是否标记 `IsTargetingTheDeadZone`。是四个参数里唯一用到 `moveTargetPointOfTheParty` 的那个。 |
| `FindPointAroundPosition` | `public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)` | 以中心点为圆心做**最多 250 次**拒绝采样。先用 `MapSceneWrapper.GetMapBorders` 把半径夹进地图边界，再按 `minDistance`/`maxDistance` 与 `useUniformDistribution` 随机方向与半径；每个候选先判 face 有效，再（`requirePath` 为真时）跑 `GetPathDistanceBetweenAIFaces` 与地形合法性。**250 次都失败时返回 `centerPosition` 本身**——这是「没找到」的信号。 |
| `FindReachablePointAroundPosition`（NavigationType 重载） | `public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)` | 把 `NavigationType` 翻译成「无效地形类型数组」再转给下一个重载。**永远要求路径**，没有 `requirePath` 开关。 |
| `FindReachablePointAroundPosition`（excludedFaceIds 重载） | `public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int[] excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)` | 真正干活的版本。同样最多 250 次，`GetPathDistanceBetweenAIFaces` 成功即返回。**同样在失败时返回 `center`**。 |
| `FindPointInsideArea`（边框版） | `public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)` | 在矩形框里随机取点，**注意它只判地形合法性、不判路径**。最多 250 次，失败返回 `CampaignVec2.Invalid`（不是入参）。 |
| `FindPointInsideArea`（带中心版） | `public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)` | 以 `center` 为圆心取点，**同时要求落在边框内**。它会先把 `maxDistance` 夹到「center 到四个角的最远距离」（源码是四次 `center.Distance(角点)` 套 `MathF.Max`），再最多 250 次采样。**250 次全失败时会 `Debug.FailedAssert("Point should not be invalid!")` 并递归调用无参版 `FindPointInsideArea`**——全类唯一的递归点。 |
| `FindPointInCircle` | `private CampaignVec2 FindPointInCircle(CampaignVec2 center, float min, float max, bool useUniformDistribution)` | 私有实现：`Vec2.One.Normalized()` 随机转角，`useUniformDistribution` 为真时按 `MathF.Sqrt(MBRandom.RandomFloat)` 缩放（面积均匀），否则按 `MBRandom.RandomFloatRanged(min, max)` 缩放（半径均匀）。返回 `center + vec`，**不做任何合法性检查**。 |
| `IsPointInsideBorders` | `public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)` | 纯几何的点在框内判定，四个不等号全是**严格**的。零依赖、不碰 `Campaign.Current`，是全类唯一可以在主菜单里安全调用的方法。 |
| `GetInteractionDataForMainParty` | `public static void GetInteractionDataForMainParty(Settlement settlement, out bool canNavigate, out MobileParty.NavigationType bestNavigationType, out bool isTargetingPort)` | 「玩家点这个聚落会怎样」的三合一答案：在海上且聚落有港口 → 目标是 `PortPosition`、打上 `isTargetingPort = true`；否则目标是 `GatePosition`。最后调 `CanPlayerNavigateToPosition`。**只在聚落交互时被调用**。 |

## 真实示例

最基本的合法性判定——注意 `CampaignVec2` 版会先判 `IsValid()`：

```csharp
CampaignVec2 target = MobileParty.MainParty.Position;

bool canWalk = NavigationHelper.IsPositionValidForNavigationType(
    target, MobileParty.NavigationType.Default);

bool canSail = NavigationHelper.IsPositionValidForNavigationType(
    target, MobileParty.NavigationType.Naval);

Debug.Print("walkable=" + canWalk + " sailable=" + canSail, 0);
```

同一个问题换个问法——「玩家以当前能力能不能过去」，并拿到建议的导航方式：

```csharp
Settlement home = MobileParty.MainParty.HomeSettlement;
CampaignVec2 gate = home.GatePosition;

bool reachable = NavigationHelper.CanPlayerNavigateToPosition(gate, out MobileParty.NavigationType best);

Debug.Print("reachable=" + reachable + " via " + best, 0);
```

找一个「离中心 X 距离内、导航能力可达、且有路」的随机落脚点。**记得判返回值等于入参这种失败情形**：

```csharp
public static CampaignVec2 Scatter(MobileParty party, float radius)
{
    CampaignVec2 center = party.Position;
    CampaignVec2 found = NavigationHelper.FindPointAroundPosition(
        center,
        party.NavigationCapability,
        radius,
        minDistance: 0f,
        requirePath: true);

    if (found == center)
    {
        // 250 次采样全失败，方法把入参原样返回了
        Debug.Print("no scatter point found around " + center, 0);
    }

    return found;
}
```

矩形框内取点——注意这个重载**只判地形不判路径**，失败返回 `Invalid`：

```csharp
Vec2 minBorder = new Vec2(0f, 0f);
Vec2 maxBorder = new Vec2(200f, 200f);

CampaignVec2 spot = NavigationHelper.FindPointInsideArea(
    minBorder, maxBorder, MobileParty.NavigationType.Default);

if (spot.ToVec2() == Vec2.Invalid)
{
    Debug.Print("no legal spot inside the box", 0);
}
```

判断目标点是否落在框内——全类唯一不依赖 `Campaign.Current` 的方法：

```csharp
Vec2 probe = new Vec2(50f, 50f);

Debug.Print("inside = " + NavigationHelper.IsPointInsideBorders(probe, minBorder, maxBorder), 0);
```

聚落交互——三个 `out` 一次拿全（源码里 `MobileParty.MainParty.IsCurrentlyAtSea && settlement.HasPort` 才走港口）：

```csharp
Settlement settlement = MobileParty.MainParty.HomeSettlement;

NavigationHelper.GetInteractionDataForMainParty(
    settlement,
    out bool canNavigate,
    out MobileParty.NavigationType bestType,
    out bool targetingPort);

Debug.Print("gate=" + settlement.GatePosition
    + " port=" + settlement.PortPosition
    + " nav=" + canNavigate + "/" + bestType + " port=" + targetingPort, 0);
```

上下船过渡判定——**先判 `IsValidTransition`，再读位置**，而且不要改 `Invalid` 单例的字段：

```csharp
CampaignVec2 here = MobileParty.MainParty.Position;
Vec2 heading = here.ToVec2();

EmbarkDisembarkData transition = NavigationHelper.GetEmbarkDisembarkDataForTick(here, heading);

if (transition == EmbarkDisembarkData.Invalid)
{
    Debug.Print("no embark transition on this tick", 0);
    return;
}

Debug.Print("navmesh edge=" + transition.NavMeshEdgePosition
    + " start=" + transition.TransitionStartPosition
    + " end=" + transition.TransitionEndPosition
    + " onLand=" + transition.TransitionStartPosition.IsOnLand, 0);
```

## 风险与边界

- **全部依赖 `Campaign.Current`。** `MapSceneWrapper` 与 `Models.PartyNavigationModel` 都是战役态对象。唯一例外是 `IsPointInsideBorders`（纯几何）。
- **`EmbarkDisembarkData.Invalid` 是共享单例。** 它 `readonly`，但**字段可写**。拿到它又改字段会让其它所有持有同一引用的代码看到脏数据。
- **`EmbarkDisembarkData` 是 class 不是 struct。** 引用语义意味着「返回后再改」会改动原对象——`GetEmbarkAndDisembarkDataForPlayer` 正是这么用的。
- **随机取点都是「最多 250 次」的拒绝采样，失败时返回值不是异常。** `FindPointAroundPosition` 与两个 `FindReachablePointAroundPosition` 返回**入参本身**；无参版 `FindPointInsideArea` 返回 `CampaignVec2.Invalid`；带中心版会**断言 + 递归回无参版**。四种失败语义各不相同，判法不能混用。
- **`FindPointAroundPosition` 的 `maxDistance` 会被地图边界夹一次。** 源码先算 `MathF.Max/Min` 得到实际可用半径，再 `maxDistance = MathF.Min(vec2.x - vec.x, vec2.y - vec.y) * 0.5f`——**入参不是你最终拿到的搜索半径**。
- **`FindPointInsideArea` 的边框版不判路径。** 它只判 `IsPositionValidForNavigationType`，所以返回的点可能是个走不过去的孤岛。
- **`GetPathDistanceBetweenAIFaces` 带距离上限。** 路径检查的 `maxDistance` 参数就是外层的 `maxDistance`，超过就算失败——近处能过的点放到远处可能就「不可达」了。
- **`useUniformDistribution` 改的是分布不是合法性。** 为真按 `sqrt(random)` 缩放（面均匀），为假按 `RandomFloatRanged`（半径均匀）。两者都只影响采样位置。
- **`GetEmbarkDisembarkDataForTick` 每帧跑就每帧算三次射线。** 它是 tick 级调用，不要在 UI 里每帧多次调。
- **`GetEmbarkAndDisembarkDataForPlayer` 内部会跑两次 tick 版。** 第一次的返回值会被复用并改写，不是两次独立结果。
- **`static class` 无法继承也无法实例化。** 换行为只能换 `PartyNavigationModel` / `MapDistanceModel` 这两个被它依赖的模型。
- **`CampaignVec2` 的介质标志是独立字段。** 判断「在陆地还是海上」必须读 `IsOnLand`，读 `Position` / `DistanceSquared` 拿不到介质信息。
- **不参与存档。** 全部是现算的临时查询。

## 依赖关系

- 导航模型：[PartyNavigationModel](../../campaign/PartyNavigationModel) 回答「这个地形允许这种导航方式吗」「哪些地形对该方式是无效的」「上下船阈值距离多远」「玩家能否导航到某点」——**四个问题的答案全部由模型决定，本类只是转发**
- 地图场景：`Campaign.Current.MapSceneWrapper`（`IMapScene`）提供 `GetFaceTerrainType` / `GetNearestFaceCenterForPosition` / `GetLastPointOnNavigationMeshFromPositionToDestination` / `GetLastPositionOnNavMeshFaceForPointAndDirection` / `GetNavigationMeshCenterPosition` / `GetPathDistanceBetweenAIFaces` / `GetMapBorders` 七组 native 查询
- 距离模型：`Campaign.Current.Models.MapDistanceModel` 的 `RegionSwitchCostFromLandToSea` / `RegionSwitchCostFromSeaToLand` 被两条路径检查逻辑当作跨介质代价传入
- 几何类型：[CampaignVec2](../../campaign/CampaignVec2)（`Face` / `IsValid()` / `IsOnLand` / `DistanceSquared`）与 `PathFaceRecord`（`IsValid()` / `FaceIndex`）是全部坐标参数的载体；`Vec2`（`RotateCCW` / `LeftVec` / `RightVec` / `DistanceSquared` / `One`）是射线几何的原语
- 队伍上下文：[MobileParty](../../campaign/MobileParty) 的 `NavigationCapability` / `Position` / `IsCurrentlyAtSea` 与 `MobileParty.NavigationType` 枚举是「用什么能力问」的来源
- 聚落上下文：[Settlement](../../campaign/Settlement) 的 `GatePosition` / `PortPosition` / `HasPort` 是 `GetInteractionDataForMainParty` 的三分支依据
- 嵌套数据类：`EmbarkDisembarkData` 与 `EmbarkDisembarkData.Invalid` 都在本文件内定义，跨版本时它们与外层方法会一起变
- 同桶兄弟：`Helpers` 这个顶层命名空间下还有 `BoardGameHelper`（棋盘难度/状态枚举），两者无依赖但常被一并读到
- 桶首页：[campaign-ext API 分区](../)
