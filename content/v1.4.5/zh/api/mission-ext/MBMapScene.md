---
title: "MBMapScene"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMapScene`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBMapScene

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBMapScene`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMapScene.cs`

## 概述

`MBMapScene` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNearestFaceCenterForPosition
`public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int excludedFaceIds)`

**用途 / Purpose:** 获取 `nearest face center for position` 的当前值。

### GetNearestFaceCenterForPositionWithPath
`public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int excludedFaceIds)`

**用途 / Purpose:** 获取 `nearest face center for position with path` 的当前值。

### GetAccessiblePointNearPosition
`public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)`

**用途 / Purpose:** 获取 `accessible point near position` 的当前值。

### RemoveZeroCornerBodies
`public static void RemoveZeroCornerBodies(Scene mapScene)`

**用途 / Purpose:** 从当前集合/状态中移除 `zero corner bodies`。

### LoadAtmosphereData
`public static void LoadAtmosphereData(Scene mapScene)`

**用途 / Purpose:** 加载 `atmosphere data` 数据。

### TickStepSound
`public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)`

**用途 / Purpose:** 处理 `tick step sound` 相关逻辑。

### TickAmbientSounds
`public static void TickAmbientSounds(Scene mapScene, int terrainType)`

**用途 / Purpose:** 处理 `tick ambient sounds` 相关逻辑。

### GetMouseVisible
`public static bool GetMouseVisible()`

**用途 / Purpose:** 获取 `mouse visible` 的当前值。

### GetApplyRainColorGrade
`public static bool GetApplyRainColorGrade()`

**用途 / Purpose:** 获取 `apply rain color grade` 的当前值。

### SendMouseKeyEvent
`public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)`

**用途 / Purpose:** 处理 `send mouse key event` 相关逻辑。

### SetMousePos
`public static void SetMousePos(int posX, int posY)`

**用途 / Purpose:** 设置 `mouse pos` 的值或状态。

### TickVisuals
`public static void TickVisuals(Scene mapScene, float tod, Mesh tickedMapMeshes)`

**用途 / Purpose:** 处理 `tick visuals` 相关逻辑。

### ValidateTerrainSoundIds
`public static void ValidateTerrainSoundIds()`

**用途 / Purpose:** 处理 `validate terrain sound ids` 相关逻辑。

### GetGlobalIlluminationOfString
`public static void GetGlobalIlluminationOfString(Scene mapScene, string value)`

**用途 / Purpose:** 获取 `global illumination of string` 的当前值。

### GetColorGradeGridData
`public static void GetColorGradeGridData(Scene mapScene, byte gridData, string textureName)`

**用途 / Purpose:** 获取 `color grade grid data` 的当前值。

### GetBattleSceneIndexMap
`public static void GetBattleSceneIndexMap(Scene mapScene, ref byte indexData, ref int width, ref int height)`

**用途 / Purpose:** 获取 `battle scene index map` 的当前值。

### SetFrameForAtmosphere
`public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)`

**用途 / Purpose:** 设置 `frame for atmosphere` 的值或状态。

### SetTerrainDynamicParams
`public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)`

**用途 / Purpose:** 设置 `terrain dynamic params` 的值或状态。

### SetSeasonTimeFactor
`public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)`

**用途 / Purpose:** 设置 `season time factor` 的值或状态。

### GetSeasonTimeFactor
`public static float GetSeasonTimeFactor(Scene mapScene)`

**用途 / Purpose:** 获取 `season time factor` 的当前值。

## 使用示例

```csharp
MBMapScene.GetNearestFaceCenterForPosition(mapScene, position, false, 0);
```

## 参见

- [完整类目录](../catalog)