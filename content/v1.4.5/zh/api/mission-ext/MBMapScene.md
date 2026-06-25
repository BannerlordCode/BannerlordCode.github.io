---
title: "MBMapScene"
description: "MBMapScene 的自动生成类参考。"
---
# MBMapScene

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBMapScene`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMapScene.cs`

## 概述

`MBMapScene` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNearestFaceCenterForPosition
`public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int excludedFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 「nearest face center for position」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetNearestFaceCenterForPosition(mapScene, position, false, 0);
```

### GetNearestFaceCenterForPositionWithPath
`public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int excludedFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 「nearest face center for position with path」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetNearestFaceCenterForPositionWithPath(mapScene, pathFaceRecord, false, 0, 0);
```

### GetAccessiblePointNearPosition
`public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)`

**用途 / Purpose:** 读取并返回当前对象中 「accessible point near position」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetAccessiblePointNearPosition(mapScene, position, false, 0);
```

### RemoveZeroCornerBodies
`public static void RemoveZeroCornerBodies(Scene mapScene)`

**用途 / Purpose:** 从当前容器或状态中移除 「zero corner bodies」。

```csharp
// 静态调用，不需要实例
MBMapScene.RemoveZeroCornerBodies(mapScene);
```

### LoadAtmosphereData
`public static void LoadAtmosphereData(Scene mapScene)`

**用途 / Purpose:** 从持久化存储或流中读取 「atmosphere data」。

```csharp
// 静态调用，不需要实例
MBMapScene.LoadAtmosphereData(mapScene);
```

### TickStepSound
`public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「step sound」的状态。

```csharp
// 静态调用，不需要实例
MBMapScene.TickStepSound(mapScene, visuals, 0, soundType, 0);
```

### TickAmbientSounds
`public static void TickAmbientSounds(Scene mapScene, int terrainType)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「ambient sounds」的状态。

```csharp
// 静态调用，不需要实例
MBMapScene.TickAmbientSounds(mapScene, 0);
```

### GetMouseVisible
`public static bool GetMouseVisible()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse visible」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetMouseVisible();
```

### GetApplyRainColorGrade
`public static bool GetApplyRainColorGrade()`

**用途 / Purpose:** 读取并返回当前对象中 「apply rain color grade」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetApplyRainColorGrade();
```

### SendMouseKeyEvent
`public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBMapScene.SendMouseKeyEvent(0, false);
```

### SetMousePos
`public static void SetMousePos(int posX, int posY)`

**用途 / Purpose:** 为 「mouse pos」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBMapScene.SetMousePos(0, 0);
```

### TickVisuals
`public static void TickVisuals(Scene mapScene, float tod, Mesh tickedMapMeshes)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「visuals」的状态。

```csharp
// 静态调用，不需要实例
MBMapScene.TickVisuals(mapScene, 0, tickedMapMeshes);
```

### ValidateTerrainSoundIds
`public static void ValidateTerrainSoundIds()`

**用途 / Purpose:** 检查「terrain sound ids」是否满足约束条件，通常返回布尔值。

```csharp
// 静态调用，不需要实例
MBMapScene.ValidateTerrainSoundIds();
```

### GetGlobalIlluminationOfString
`public static void GetGlobalIlluminationOfString(Scene mapScene, string value)`

**用途 / Purpose:** 读取并返回当前对象中 「global illumination of string」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetGlobalIlluminationOfString(mapScene, "example");
```

### GetColorGradeGridData
`public static void GetColorGradeGridData(Scene mapScene, byte gridData, string textureName)`

**用途 / Purpose:** 读取并返回当前对象中 「color grade grid data」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetColorGradeGridData(mapScene, 0, "example");
```

### GetBattleSceneIndexMap
`public static void GetBattleSceneIndexMap(Scene mapScene, ref byte indexData, ref int width, ref int height)`

**用途 / Purpose:** 读取并返回当前对象中 「battle scene index map」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetBattleSceneIndexMap(mapScene, indexData, width, height);
```

### SetFrameForAtmosphere
`public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)`

**用途 / Purpose:** 为 「frame for atmosphere」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBMapScene.SetFrameForAtmosphere(mapScene, 0, 0, false);
```

### SetTerrainDynamicParams
`public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)`

**用途 / Purpose:** 为 「terrain dynamic params」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBMapScene.SetTerrainDynamicParams(mapScene, dynamic_params);
```

### SetSeasonTimeFactor
`public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)`

**用途 / Purpose:** 为 「season time factor」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBMapScene.SetSeasonTimeFactor(mapScene, 0);
```

### GetSeasonTimeFactor
`public static float GetSeasonTimeFactor(Scene mapScene)`

**用途 / Purpose:** 读取并返回当前对象中 「season time factor」 的结果。

```csharp
// 静态调用，不需要实例
MBMapScene.GetSeasonTimeFactor(mapScene);
```

## 使用示例

```csharp
MBMapScene.GetNearestFaceCenterForPosition(mapScene, position, false, 0);
```

## 参见

- [本区域目录](../)