---
title: MBSceneUtilities
description: MBSceneUtilities - 场景边界与生成路径的静态几何工具集
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSceneUtilities`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSceneUtilities
**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** static class

## 概述
`MBSceneUtilities

` 是一组静态工具方法，用于从场景（

`Scene

`）中提取生成路径、软/硬边界、场景极限点，以及对边界多边形做凸包、径向排序、点包含测试等几何运算。这些方法服务于攻城/战斗场景的部署、AI 寻路边界判断、可走区域界定等底层逻辑?
边界信息通过场景中的 tagged entity 读取：`SoftBorderVertexTag

`?walk_area_vertex"）标记软边界顶点，`HardBorderVertexTag

`?walk_area_vertex_hard"）标记硬边界顶点。生成路径以 

`SpawnPathPrefix

`?spawn_path_"）前缀?entity 命名，最?

`MaxNumberOfSpawnPaths

`?2）条?
## 心智模型
把它视作"场景几何元数据的提取?+ 边界多边形工具箱"。两类核心数据：
- **生成路径**：场景中预放置的 

`Path

` entity，标记单位可从哪些位置生成进入场景，攻城战用它决定援军出现点?- **边界多边?*：由一系列 

`Vec2

` 顶点构成的闭合多边形，界定可走区域。软边界?建议不越?的区域，硬边界是"绝对不可越过"的区域，两者之间有 

`SceneToHardBoundaryMargin

`?00 单位）的缓冲带?
边界顶点从场?entity 提取后通常无序，需?

`FindConvexHull

` + 

`RadialSortBoundary

` 转为凸且径向排序的多边形，才能用 

`IsPointInsideBoundaries

` 做点包含测试。`GetAxisAlignedBoundaryRectangle

` 是退化版本，返回轴对齐包围盒?
## 常量
\| 常量 \| ?\| 说明 \|
\|------\|------\|------\|
\| 

`MaxNumberOfSpawnPaths

` \| 32 \| 单场景最多支持的生成路径?\|
\| 

`SpawnPathPrefix

` \| "spawn_path_" \| 生成路径 entity 名前缀 \|
\| 

`SoftBorderVertexTag

` \| "walk_area_vertex" \| 软边界顶?entity tag \|
\| 

`HardBorderVertexTag

` \| "walk_area_vertex_hard" \| 硬边界顶?entity tag \|
\| 

`SoftBoundaryName

` \| "walk_area" \| 软边界区域名 \|
\| 

`SceneBoundaryName

` \| "scene_boundary" \| 场景边界区域?\|
\| 

`SceneToHardBoundaryMargin

` \| 100f \| ?硬边界之间的缓冲距离 \|
\| 

`DefenderDeploymentReferencePositionTag

` \| "defender_infantry" \| 防守方部署参考点 tag \|
\| 

`AttackerDeploymentReferencePositionTag

` \| "attacker_infantry" \| 进攻方部署参考点 tag \|

## 主要方法
### GetAllSpawnPaths
`

`

`csharp
public static MBList&lt;Path&gt; GetAllSpawnPaths(Scene scene)
`

`

`
返回场景中所有以 

`SpawnPathPrefix

` 命名?

`Path

` entity，最?

`MaxNumberOfSpawnPaths

` 条?
### GetSoftBoundaryPoints / GetHardBoundaryPoints
`

`

`csharp
public static MBList&lt;Vec2&gt; GetSoftBoundaryPoints(Scene scene)
public static MBList&lt;Vec2&gt; GetHardBoundaryPoints(Scene scene)
`

`

`
分别返回场景中所有带 

`SoftBorderVertexTag

` / 

`HardBorderVertexTag

` ?entity 位置，作为软/硬边界顶点列表?
### GetSceneLimitPoints
`

`

`csharp
public static MBList&lt;Vec2&gt; GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)
`

`

`
返回场景的极限点列表，并通过 out 参数给出轴对齐包围盒的最?最大角点。用于确定场景可玩区域的几何边界?
### GetDeploymentBoundaries
`

`

`csharp
public static MBList&lt;ValueTuple&lt;string, MBList&lt;Vec2&gt;, bool&gt;&gt; GetDeploymentBoundaries(BattleSideEnum battleSide)
`

`

`
返回指定阵营的部署边界列表，每个元素?(边界? 顶点列表, 是否为硬边界) 三元组?
### FindConvexHull
`

`

`csharp
public static void FindConvexHull(ref MBList&lt;Vec2&gt; boundary)
`

`

`
对输入顶点集原地计算凸包，结果仍存在 

`boundary

` 中。后续可?

`RadialSortBoundary

` 做径向排序?
### RadialSortBoundary
`

`

`csharp
public static void RadialSortBoundary(ref MBList&lt;Vec2&gt; boundary)
public static void RadialSortBoundary(ref MBList&lt;Vec3&gt; boundary)
`

`

`
按质心径向排序边界顶点，使多边形顶点按顺时针/逆时针顺序排列，便于后续几何测试。提?

`Vec2

` ?

`Vec3

` 两个重载?
### IsConvexAndRadiallySorted
`

`

`csharp
public static bool IsConvexAndRadiallySorted(MBList&lt;Vec2&gt; boundary)
`

`

`
检查边界多边形是否同时满足"??已径向排?两个条件?
### IsPointInsideBoundaries
`

`

`csharp
public static bool IsPointInsideBoundaries(in Vec2 point, MBList&lt;Vec2&gt; boundaries, float acceptanceThreshold = 0.05f)
`

`

`
判断点是否在边界多边形内部，

`acceptanceThreshold

` 是允许的边界容差?
### FindClosestPointToBoundaries / FindClosestPointToBoundariesReturnDistanceSquared
`

`

`csharp
public static float FindClosestPointToBoundaries(in Vec2 position, MBList&lt;Vec2&gt; boundaries, out Vec2 closestPoint)
public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList&lt;Vec2&gt; boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)
`

`

`
找到位置到边界多边形的最近点。前者返回距离，后者返回距离平方并同时报告位置是否在边界内?
### GetAxisAlignedBoundaryRectangle
`

`

`csharp
public static void GetAxisAlignedBoundaryRectangle(List&lt;Vec2&gt; boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)
`

`

`
计算边界点的轴对齐包围盒，返回最?最大角点?
## 使用示例
### 示例: 提取场景边界并测试某点是否在可走区域?**场景**: 自定义战斗模组需要判断玩家位置是否越出场景边界，越界时拉回?

`

`

`csharp
Scene scene = Mission.Current.Scene;
MBList&lt;Vec2&gt; softBoundary = MBSceneUtilities.GetSoftBoundaryPoints(scene);
MBSceneUtilities.FindConvexHull(ref softBoundary);
MBSceneUtilities.RadialSortBoundary(ref softBoundary);

Vec2 playerPos = (Vec2)Mission.Current.MainAgent.Position.AsVec2;
bool inside = MBSceneUtilities.IsPointInsideBoundaries(playerPos, softBoundary, 0.5f);
if (!inside)
{
    // 拉回到最近边界点
    MBSceneUtilities.FindClosestPointToBoundaries(playerPos, softBoundary, out Vec2 closest);
    TeleportAgentTo(closest);
}
`

`

`
**要点**: 从场景提取的边界顶点通常无序，必须先 

`FindConvexHull

` ?

`RadialSortBoundary

` 才能用于 

`IsPointInsideBoundaries

`。硬边界比软边界更严格，模组通常对软边界?警告/减?，对硬边界做"硬拉?。生成路径用于决定援?部署点，?32 条按命名匹配?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
