---
title: "MapScene"
description: "1.4.5 Sandbox 的 IMapScene 实现：带原生后端的战役世界地图场景、地形、导航、大气、天气与缓存数据。"
---
# MapScene

**命名空间：** `SandBox`  
**模块：** `SandBox`  
**类型：** `public class MapScene : IMapScene`  
**基类：** [IMapScene](../../campaign/IMapScene)  
**源码：** `Modules.SandBox/SandBox/Sandbox/MapScene.cs`

## 一句话职责

持有已加载的 Sandbox 世界地图 `Scene`，并把原生地形/导航数据适配给 Campaign 的 `IMapScene` 契约；同时维护天气纹理、地图边界、导航面索引和原生资源的生命周期。

## 概述

这是 1.4.5 Sandbox 地图系统的原生资源适配层：它在正确阶段建立地图场景和缓存，把导航、地形、大气、天气及地图实体查询交给 Campaign 使用，并在战役结束时释放原生对象。

## 心智模型

`MapScene` 是 `Campaign.Current.MapSceneWrapper` 背后的具体运行时对象。构造函数只创建托管缓存和读写锁。`Load` 创建原生 `Scene`、Agent 渲染控制器、地图资源、地形尺寸、大气/天气数据和导航面索引。`Campaign.LoadMapScene` 随后读取边界并调用 `AfterLoad`；战役结束时 `Destroy` 释放原生资源。

大多数 mod 应使用接口，因为 Campaign 和导航辅助能提供正确活动实现。只有要访问 `Scene`、`SetSnowAndRainDataWithDimension`、`ValidateAgentVisualsReseted` 或 `SetupWaterWake` 等 Sandbox 专属成员时才转成 `MapScene`。它是运行时资源，不是存档对象；移动规则仍应由 [PartyNavigationModel](../../campaign/PartyNavigationModel) 决定。

## 依赖图

- 提供者：[MapSceneCreator](../MapSceneCreator) 通过 [IMapSceneCreator](../../campaign/IMapSceneCreator) 返回它。
- 持有者：[Campaign](../../campaign/Campaign) 以 `IMapScene MapSceneWrapper` 保存它。
- 加载输入：[PartyNavigationModel](../../campaign/PartyNavigationModel)、活动模块场景资源、[Campaign](../../campaign/Campaign) 和原生 `MBMapScene` 函数。
- 消费者：[NavigationHelper](../../system/NavigationHelper)、地图天气/视觉管理器、[MobileParty](../../campaign/MobileParty)、[Settlement](../../campaign/Settlement) 和导航缓存。
- 契约：[IMapScene](../../campaign/IMapScene) 列出 Campaign 使用的生命周期与查询。

## 生命周期与原生状态

| 成员 | 用途与时机 |
|---|---|
| `Scene` | 地图视觉和实体实例化使用的原生场景；仅在 `Load` 后、`Destroy` 前有效。 |
| `MapScene()` | 初始化 `_sceneLevels`、缓存与 `ReaderWriterLockSlim`，不会加载场景。 |
| `Load()` | 创建 `Scene` 和 Agent 渲染状态，读取 `Main_map`，通过 `MapSceneHelper` 设置导航区域，加载大气/地形索引，并初始化 Campaign 的晚期 AI 状态；只应由 Campaign 启动调用。 |
| `AfterLoad()` | Campaign 计算地图边界与距离限制后调用的后置钩子。 |
| `Destroy()` | 销毁 Agent 渲染控制器并释放场景资源；之后原生数据全部无效。 |
| `SetSceneLevels(List<string>)` | 在 `Load` 前预置升级级别名；`GetSceneLevel` 会惰性解析原生掩码。 |
| `SetSnowAndRainDataWithDimension(Texture, int)` | 复制天气纹理数据并设置动态雪纹理；由 Sandbox 天气系统在场景加载后调用。 |
| `ValidateAgentVisualsReseted()` | 地图屏幕切换时校验 Agent 视觉与当前场景控制器。 |
| `DisableUnwalkableNavigationMeshes()` | 把活动导航模型的无效地形 id 应用到原生场景，是加载准备阶段的一部分。 |
| `SetupWaterWake(float, float)` | 配置原生水面尾流；只可在场景和渲染器存活时调用。 |

## 地形、大气与地图数据

| 成员 | 提供的内容 |
|---|---|
| `GetTerrainSize`、`GetMapBorders` | 已加载地图尺寸与 Campaign 边界；后者用于计算地图对角线和路径代价上限。 |
| `GetAtmosphereStates`、`SetAtmosphereColorgrade` | 大气探针数据和地形色调入口；1.4.5 默认色调方法为空。 |
| `GetTerrainTypeAtPosition`、`GetFaceTerrainType`、`GetTerrainTypeName` | 按位置/面读取地形及其名称；查询前要确认面有效。 |
| `GetTerrainHeightAndNormal`、`GetHeightAtPoint`、`GetGroundNormal`、`GetFaceVertexZ` | 读取视觉和地图放置需要的高度/法线。 |
| `GetEnvironmentTerrainTypes`、`GetEnvironmentTerrainTypesCount` | 为场景/天气模型采样周围地形。 |
| `GetMapPatchAtPosition` | 将位置映射为战斗地块与归一化坐标。 |
| `AddNewEntityToMapScene` | 在地图位置把活动模块实体实例化到场景。 |
| `GetSiegeCampFrames` | 查找要塞实体下带 `map_camp_area_1` 或 `map_camp_area_2` 标签的框架。 |
| `GetWinterTimeFactor`、`GetSnowAmountAtPosition`、`GetRainAmountAtPosition`、`GetWindAtPosition` | 读取季节与纹理天气数据；天气数组必须先初始化。 |
| `GetSceneXmlCrc`、`GetSceneNavigationMeshCrc` | 为导航缓存校验当前地图资源身份。 |

## 导航网格操作

`GetFaceIndex`、`GetFaceAtIndex`、`GetNumberOfNavigationMeshFaces` 暴露当前网格面集合；`GetNavigationMeshCenterPosition` 按面或索引读取中心。`GetNearestFaceCenterForPosition`、`GetNearestFaceCenterForPositionWithPath`、`GetAccessiblePointNearPosition` 查找可用位置。`GetPathBetweenAIFaces` 填写 `NavigationPath`；`GetPathDistanceBetweenAIFaces` 计算有上限的距离；`IsLineToPointClear` 检查直线。`GetLastPointOnNavigationMeshFromPositionToDestination` 从起始导航面向目标点移动时返回最后可达位置；`GetLastPositionOnNavMeshFaceForPointAndDirection` 则在指定导航面内沿方向返回最后位置。路径调用会把排除面组及陆海区域切换代价传入原生场景。

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.MapSceneWrapper != null && MobileParty.MainParty != null)
{
    IMapScene mapScene = campaign.MapSceneWrapper;
    CampaignVec2 from = MobileParty.MainParty.Position;
    PathFaceRecord start = mapScene.GetFaceIndex(in from);
    if (start.IsValid())
    {
        CampaignVec2 target = mapScene.GetAccessiblePointNearPosition(in from, 10f);
        PathFaceRecord end = mapScene.GetFaceIndex(in target);
        NavigationPath path = new NavigationPath();
        bool found = end.IsValid() && mapScene.GetPathBetweenAIFaces(
            start, end, from.ToVec2(), target.ToVec2(), 0.3f, path, null, 1f, 0, 0);
    }
}
```

上例使用的是接口读取路径。只有 Sandbox 专属调用者在确认 `Campaign.MapSceneWrapper is MapScene` 后才应取得 `Scene`，且不能把原生句柄带出当前地图屏幕生命周期。

## 崩溃与存档风险

- `Scene`、`_snowAndRainData`、`_windFlowMapData` 和地形索引分阶段初始化；过早调用天气、地形、路径或实体方法可能触发空引用/原生失败。
- 无效 `PathFaceRecord` 会让 `GetFaceTerrainType` 断言；场景或导航网格变化后面记录和索引都会过期。
- `GetSceneLevel` 依赖 `_scene`，并在锁中缓存原生掩码；级别应在加载前设置，销毁后不能调用。
- `AddNewEntityToMapScene` 要求活动模块有正确实体 id；它创建原生对象，不是可存档的战役实体替代品。
- `SetSnowAndRainDataWithDimension` 假定纹理与尺寸有效；重复或销毁后调用会破坏视觉状态。
- 原生 `Scene` 与渲染器句柄不能序列化；加载后重新获取 `Campaign.Current.MapSceneWrapper`，让 Campaign 重建包装器。
- 这个类不是移动规则。只改场景区域而不匹配 `PartyNavigationModel`，会使地图 AI、寻路和存档加载位置不一致。

## 导航

### ↑ 父级

- [Campaign 扩展索引](../)
- [IMapScene](../../campaign/IMapScene)

### ↔ 同级与相关类型

- [MapSceneCreator](../MapSceneCreator)
- [IMapSceneCreator](../../campaign/IMapSceneCreator)
- [Campaign](../../campaign/Campaign)
- [PartyNavigationModel](../../campaign/PartyNavigationModel)
- [NavigationHelper](../../system/NavigationHelper)
- [Mission](../../mission/Mission)
