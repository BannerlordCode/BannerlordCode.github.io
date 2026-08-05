---
title: "IMapScene"
description: "战役地图场景契约：地形查询、导航网格、边界、天气数据与地图场景生命周期。"
---
# IMapScene

**命名空间：** `TaleWorlds.CampaignSystem.Map`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public interface IMapScene`  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/IMapScene.cs`

## 一句话职责

定义战役层读取和加载世界地图场景的边界，同时隐藏 Sandbox 的具体场景实现；它统一承载地形、导航、天气、边界和场景校验查询，让上层系统不必直接操作原生 Scene。

## 概述

它把地图场景的原生资源、导航网格、地形与天气查询统一暴露给 Campaign 及其下游系统。调用者不需要知道场景由哪个模块创建，但必须遵守加载完成后读取、战役销毁后停止使用的生命周期。

## 心智模型

`IMapScene` 是由当前 [Campaign](../Campaign) 持有的长期运行时服务，不是存档数据对象，也不是 [PartyNavigationModel](../PartyNavigationModel) 的替代品。活动实例位于 `Campaign.MapSceneWrapper`。战役初始化时，注册的 [IMapSceneCreator](../IMapSceneCreator) 创建具体包装器；随后 `Campaign.LoadMapScene` 调用 `SetSceneLevels`、`Load`，读取边界，再调用 `AfterLoad`。地图 AI、导航辅助、天气、定居点视觉和距离缓存随后都通过这个接口查询。

需要查询地形、导航网格、边界、路径、天气或 CRC 时使用它。判断某种地形是否允许某支部队通行，应使用 `PartyNavigationModel`；只有确实需要 `Scene` 等 Sandbox 专属能力时才转到 `MapScene`。不要在战役 tick 中自行创建或销毁包装器，也不要跨战役销毁或存档会话替换缓存的包装器引用。

## 依赖图

- 生命周期上游：[Campaign](../Campaign) 持有 `MapSceneWrapper` 并调用 [IMapSceneCreator](../IMapSceneCreator)。
- 1.4.5 具体实现：[MapScene](../../campaign-ext/MapScene) 由 [MapSceneCreator](../../campaign-ext/MapSceneCreator) 创建。
- 规则依赖：[PartyNavigationModel](../PartyNavigationModel) 提供合法导航地形；具体场景在 `Load` 时使用它。
- 下游调用者：[MobileParty](../MobileParty)、[Settlement](../Settlement)、[NavigationHelper](../../system/NavigationHelper)、天气模型、地图视觉和导航缓存。
- 相邻运行时：[Mission](../../mission/Mission) 持有战斗场景；这里描述的是战役世界地图场景，不是 Mission 场景。

## 生命周期与所有权

| 成员 | 含义与时机 |
|---|---|
| `Load()` | 创建/加载原生地图场景，并初始化地形、导航、大气和缓存地图数据。战役加载时调用一次。 |
| `AfterLoad()` | 在 Campaign 读取边界并计算地图尺寸后完成包装器的后置阶段。属于引擎生命周期回调。 |
| `Destroy()` | 释放原生场景；调用后任何查询都无效。 |

## 地图与地形查询

| 成员 | 用途与边界 |
|---|---|
| `GetFaceIndex` | 将 `CampaignVec2` 转为导航网格面；使用结果前检查 `PathFaceRecord.IsValid()`。 |
| `GetTerrainTypeAtPosition` / `GetFaceTerrainType` | 读取位置或网格面的地形；它们不判断部队是否有通行权限。 |
| `GetEnvironmentTerrainTypes` / `GetEnvironmentTerrainTypesCount` | 采样周围地形；后者还返回原点地形，天气和场景模型会使用。 |
| `GetMapPatchAtPosition` | 返回位置对应的战斗场景地块和归一化坐标。 |
| `GetTerrainSize` | 返回已加载地图尺寸；`Load` 前没有意义。 |
| `GetMapBorders` | 返回最小位置、最大位置和最高点，Campaign 用它计算地图限制。 |
| `GetTerrainHeightAndNormal` / `GetHeightAtPoint` / `GetGroundNormal` | 从原生场景读取高度和表面方向。 |
| `GetFaceVertexZ` | 读取有效导航面的第一个顶点高度。 |
| `GetTerrainTypeName` | 把引擎地形枚举转换为地图地形名称。 |

## 导航查询

| 成员 | 用途与边界 |
|---|---|
| `GetNearestFaceCenterForPosition` | 查找附近的面中心，可排除地形面组。 |
| `GetNearestFaceCenterForPositionWithPath` | 从已有面出发，在最大距离内查找可达中心。 |
| `GetAccessiblePointNearPosition` | 查找位置附近的可达点。 |
| `GetPathBetweenAIFaces` | 在两个有效面之间填写 `NavigationPath`，并处理陆海区域切换代价。 |
| `GetPathDistanceBetweenAIFaces` | 在 `distanceLimit` 限制下测试路径并返回距离。 |
| `IsLineToPointClear` | 测试从有效面到二维目标的直线清晰度/路径阻挡。 |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | 将移动射线截到仍在导航网格上的最后一点。 |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | 沿方向读取某个面上的最后位置。 |
| `GetNavigationMeshCenterPosition(PathFaceRecord)` / `GetNavigationMeshCenterPosition(int)` | 按面记录或索引读取中心点。 |
| `GetFaceAtIndex` / `GetNumberOfNavigationMeshFaces` | 供导航缓存遍历当前面集合；换场景或 CRC 后索引即失效。 |

## 天气、大气与定居点支持

- `GetWinterTimeFactor` 读取原生场景的冬季系数。
- `GetAtmosphereStates` 和 `SetAtmosphereColorgrade` 提供大气探针与地形色调入口。
- `GetSnowAmountAtPosition`、`GetRainAmountAtPosition` 读取具体场景初始化的纹理天气值。
- `GetSceneLevel`、`SetSceneLevels` 管理地图实体升级级别掩码；级别列表要在 `Load` 前提供。
- `AddNewEntityToMapScene` 在地图位置实例化实体；实体 id 必须来自活动模块。
- `GetSiegeCampFrames` 读取要塞定居点的攻城营地框架。
- `GetSceneXmlCrc`、`GetSceneNavigationMeshCrc` 为当前场景提供导航缓存校验身份。

## 真实获取示例

通常的 mod 读取路径是 Campaign 已经加载好的包装器，应在地图初始化完成后的地图相关回调中使用：

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.MapSceneWrapper != null && MobileParty.MainParty != null)
{
    IMapScene mapScene = campaign.MapSceneWrapper;
    CampaignVec2 position = MobileParty.MainParty.Position;
    PathFaceRecord face = mapScene.GetFaceIndex(in position);
    if (face.IsValid())
    {
        TerrainType terrain = mapScene.GetFaceTerrainType(face);
        Vec2 mapSize = mapScene.GetTerrainSize();
    }
}
```

## 崩溃与生命周期风险

- `Campaign.LoadMapScene` 完成前调用查询，可能访问尚未初始化的原生 `Scene`、天气数组或导航数据。
- `PathFaceRecord` 和导航缓存条目只属于当前场景及其 CRC；换场景、替换地图或换存档会话后不能复用。
- `Destroy` 会释放原生资源；战役结束后不得继续使用缓存的 `IMapScene`、`Scene`、`NavigationPath` 或地图实体。
- `AddNewEntityToMapScene` 要求活动模块中存在可加载的实体 id；无效 id 或错误阶段调用可能触发原生失败。
- 高度、路径、中心和地形面方法要求有效面/索引；调用前检查 `PathFaceRecord` 和边界。
- 此接口没有存档字段。不要把原生句柄、面索引、CRC 或 `Scene` 引用写进 Behavior 存档；加载后重新查询。

## 导航

### ↑ 父级

- [Campaign API 索引](../)
- [Campaign](../Campaign)

### ↔ 同级与相关类型

- [IMapSceneCreator](../IMapSceneCreator)
- [MapScene](../../campaign-ext/MapScene)
- [MapSceneCreator](../../campaign-ext/MapSceneCreator)
- [PartyNavigationModel](../PartyNavigationModel)
- [NavigationHelper](../../system/NavigationHelper)
- [Mission](../../mission/Mission)
