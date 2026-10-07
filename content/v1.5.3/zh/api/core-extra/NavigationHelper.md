---
title: "NavigationHelper"
description: "战役地图导航的静态适配器：把「这个坐标/这个面允许用哪种导航方式走、从哪上岸下海、周围哪里有可达点」收敛成固定问法，真正的判定委托给 PartyNavigationModel 与 MapSceneWrapper。"
---

# NavigationHelper

**命名空间：** `Helpers`
**Type:** `public static class NavigationHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 概述

NavigationHelper 是战役地图上「导航合法性判定 + 上岸下海过渡 + 周围取点」这三件事的统一入口。它本身不发明路径算法、也不判定地形，而是把查询转给 `Campaign.Current.Models.PartyNavigationModel`（地形对导航类型是否合法、玩家能否导航）与 `Campaign.Current.MapSceneWrapper`（导航网格面、面心、地图边界、路径距离），再用统一的 `MobileParty.NavigationType` 枚举把「陆路 / 海路 / 两者都行」表达给调用方。它解决的核心问题是：地图上大量 AI 与 UI 代码都要问同样几个问题——这个点能不能站、这里能不能上船、往这个方向走会不会出海、附近哪里可以落脚——如果没有这层适配器，每一处调用点都得自己去拼 navmesh 查询与模型调用。

## 心智模型

把 NavigationHelper 想成地图的「导航前台」：真正决定能不能走的是可替换的 `PartyNavigationModel`，真正提供几何与地形的是引擎层的 `MapSceneWrapper`，本类只是把两者的能力打包成几个稳定问法，并把结果翻译成 `CampaignVec2` 与 `EmbarkDisembarkData` 这类调用方好用的结构。它有三个心智分层：① **判定层**——`IsPositionValidForNavigationType` 与 `CanPlayerNavigateToPosition` 回答「能不能」；② **取点层**——`FindPointAroundPosition` / `FindReachablePointAroundPosition` / `FindPointInsideArea` 回答「哪里可以」，且它们都用「最多 250 次随机采样 + 路径校验」的试探式算法，找不到就退回传入的中心点；③ **过渡层**——`GetEmbarkDisembarkDataForTick` 与 `GetEmbarkAndDisembarkDataForPlayer` 描述「陆海交界处这条边在哪、两端各属于哪一侧、是不是正对着 dead zone」。理解这三层，就知道本类里没有任何一个方法会「移动部队」——它只产出坐标与布尔值，移动永远是调用方的事。

## 怎么用

### 什么时候调它

- 你要给部队挑一个「附近可站的点」：调 `FindPointAroundPosition`（默认要求两点间真有路径）或 `FindReachablePointAroundPosition`。
- 你要判断「玩家点地图上这个位置，主部队能不能过去」：调 `CanPlayerNavigateToPosition`，它顺便用 `out` 告诉你该用哪种导航方式。
- 你要算/画上船下船的过渡：调 `GetEmbarkDisembarkDataForTick`（单次查询）或 `GetEmbarkAndDisembarkDataForPlayer`（面向玩家、带目标点，会处理 dead zone 那一侧的细节）。
- 你手里只有一个 `PathFaceRecord` 而没有坐标：用面记录重载 `IsPositionValidForNavigationType(face, ...)`。
- 你要给主部队和某个聚落之间算交互数据（瞄准港口还是城门、能不能导航）：调 `GetInteractionDataForMainParty`。

### 调之前要准备什么

- `Campaign.Current` 必须已初始化，且 `Campaign.Current.Models.PartyNavigationModel` 与 `Campaign.Current.MapSceneWrapper` 可用——本类所有方法都会直接解引用它们，没有空值兜底。
- 传入的 `CampaignVec2` 应当由合法 `Vec2` 与合法 `Face` 组成；`CampaignVec2.Invalid` 会在第一道门 `vec2.IsValid()` 处就被挡下。
- 取点方法需要给出一个正数 `maxDistance`，否则它们直接返回中心点、不做任何采样。

### 调之后会发生什么

- 取点方法最多尝试 250 次随机采样；全部失败时返回**传入的中心点本身**（不是 `Invalid`），调用方要靠「返回点是否等于中心点」或再校验一次来判断失败。
- `FindPointInsideArea` 的带中心重载在彻底失败时会 `Debug.FailedAssert`，并退回无中心版本，所以它几乎不会把 `Invalid` 交回调用方。
- `GetEmbarkDisembarkDataForTick` 在过渡无效时返回共享的 `EmbarkDisembarkData.Invalid`（`IsValidTransition == false`）；调用方必须先看这个标志，再读其它字段。
- `CanPlayerNavigateToPosition` 与 `GetInteractionDataForMainParty` 是**纯查询**，不会改变任何战役状态。

### 最容易踩的坑

- 两个重载同名 `IsPositionValidForNavigationType`：坐标版只多做一次 `IsValid()`，真正的地形裁决在面记录版里，它读 `MapSceneWrapper.GetFaceTerrainType(face)` 再问模型。所以「坐标有效」并不等于「地形允许该导航类型」。
- `MobileParty.NavigationType` 是 `[Flags]` 枚举，`Default` 表示陆路、`Naval` 表示海路；传错会让「可以上岸」被误判成「不能」。
- `EmbarkDisembarkData.Invalid` 是共享的 `static readonly` 实例，不要试图改写它的字段。
- 取点方法是**随机试探**而非确定性求解：同样的输入可能给出不同的点，甚至偶尔给出中心点（表示这次没试出来）。

## 关键成员

- **IsPositionValidForNavigationType**（`NavigationHelper.cs:15`）— 坐标重载：先 `vec2.IsValid()`，再委托给面记录重载，回答「这个坐标允许用该导航类型吗」。
- **IsPositionValidForNavigationType**（`NavigationHelper.cs:21`）— 面记录重载，本类判定层的地基：面有效时取该面的 `TerrainType`，交给 `PartyNavigationModel.IsTerrainTypeValidForNavigationType` 裁决。
- **CanPlayerNavigateToPosition**（`NavigationHelper.cs:33`）— 纯转发：问 `PartyNavigationModel` 玩家能否导航到该坐标，并用 `out` 回填推荐的导航类型。
- **GetClosestNavMeshFaceCenterPositionForPosition**（`NavigationHelper.cs:39`）— 把任意坐标吸附到最近的导航网格面中心，可传 `excludedFaceIds` 排除若干面。
- **GetEmbarkDisembarkDataForTick**（`NavigationHelper.cs:45`）— 按位置与方向算一次上/下船过渡；无效时返回 `EmbarkDisembarkData.Invalid`。
- **GetEmbarkAndDisembarkDataForPlayer**（`NavigationHelper.cs:61`）— 面向玩家的上/下船数据：先取 tick 版，再结合移动目标点判断是否正对着 dead zone、以及是否站在自己那一侧。
- **FindPointAroundPosition**（`NavigationHelper.cs:138`）— 在中心点周围按半径找点，可选是否要求存在路径、是否用均匀分布，最多 250 次采样。
- **FindReachablePointAroundPosition**（`NavigationHelper.cs:175`）— 可达版取点，直接接收要排除的面 id 数组，并按两点间的路径距离做校验。
- **FindReachablePointAroundPosition**（`NavigationHelper.cs:201`）— 导航类型重载：把 `NavigationType` 翻成「无效地形类型数组」再转发给上一个重载。
- **FindPointInsideArea**（`NavigationHelper.cs:208`）— 在矩形边界内随机找一点，只要求该位置对导航类型有效，不做路径校验。
- **IsPointInsideBorders**（`NavigationHelper.cs:233`）— 纯几何助手：点是否严格落在 `minBorders` 与 `maxBorders` 之间。
- **FindPointInsideArea**（`NavigationHelper.cs:239`）— 带中心的区域取点：距离上限被夹到「中心到矩形四个角点的最远距离」内，可选要求从中心存在路径；失败时断言并退回无中心版。
- **GetInteractionDataForMainParty**（`NavigationHelper.cs:305`）— 主部队交互数据：在海上且聚落有港口就瞄准港口位，否则瞄准城门位，再用 `CanPlayerNavigateToPosition` 回填能否导航与最佳导航类型。
- **EmbarkDisembarkData**（`NavigationHelper.cs:322`）— 嵌套类，承载过渡结果：`IsValidTransition`、`NavMeshEdgePosition`、`TransitionStartPosition`、`TransitionEndPosition`、`IsTargetingTheDeadZone`、`IsTargetingOwnSideOfTheDeadZone`。
- **EmbarkDisembarkData.Invalid**（`NavigationHelper.cs:336`）— 共享的无效实例（`static readonly`），用于表示「这次没有过渡」。

## 真实示例

下面是本类判定层的原文——两个同名重载的关系一目了然：坐标版只是多一道 `IsValid()`，地形裁决全部落在面记录版里。

```csharp
// NavigationHelper.cs:15 起的判定层
public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)
{
    return vec2.IsValid() && NavigationHelper.IsPositionValidForNavigationType(vec2.Face, navigationType);
}

public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)
{
    bool flag = false;
    if (face.IsValid())
    {
        TerrainType faceTerrainType = Campaign.Current.MapSceneWrapper.GetFaceTerrainType(face);
        flag = Campaign.Current.Models.PartyNavigationModel.IsTerrainTypeValidForNavigationType(faceTerrainType, navigationType);
    }
    return flag;
}
```

组合使用：先问「主部队能不能去这个聚落」，再在它周围挑一个可站的落脚点。

```csharp
Settlement settlement = Settlement.CurrentSettlement;
bool canNavigate;
MobileParty.NavigationType bestNavigationType;
bool isTargetingPort;
NavigationHelper.GetInteractionDataForMainParty(
    settlement, out canNavigate, out bestNavigationType, out isTargetingPort);

// 在城门/港口位周围找一个「真有路径可达」的点（maxDistance=3，minDistance=0.5）
CampaignVec2 candidate = NavigationHelper.FindPointAroundPosition(
    settlement.GatePosition, bestNavigationType, 3f, 0.5f, true, false);
bool foundSomething = candidate != settlement.GatePosition;
```

## 参见

- ↔ [AiHelper](../AiHelper) —— AI 决策在挑路、上船、找落脚点时用本类判定导航合法性与取点
- ↔ [DistanceHelper](../DistanceHelper) —— 同样以 `MobileParty.NavigationType` 为问法，但答的是「多远」；本类答的是「能不能、在哪」
- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models.PartyNavigationModel` 与 `MapSceneWrapper` 是本类的两个依赖
- ↔ [GameModels](../../campaign/GameModels) —— `PartyNavigationModel` 从这里取，导航规则本身是可替换的模型

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
