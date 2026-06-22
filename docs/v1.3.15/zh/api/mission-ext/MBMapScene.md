<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMapScene`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMapScene

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBMapScene` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetNearestFaceCenterForPosition

```csharp
public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int excludedFaceIds)
```

### GetNearestFaceCenterForPositionWithPath

```csharp
public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int excludedFaceIds)
```

### GetAccessiblePointNearPosition

```csharp
public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)
```

### RemoveZeroCornerBodies

```csharp
public static void RemoveZeroCornerBodies(Scene mapScene)
```

### LoadAtmosphereData

```csharp
public static void LoadAtmosphereData(Scene mapScene)
```

### TickStepSound

```csharp
public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)
```

### TickAmbientSounds

```csharp
public static void TickAmbientSounds(Scene mapScene, int terrainType)
```

### GetMouseVisible

```csharp
public static bool GetMouseVisible()
```

### GetApplyRainColorGrade

```csharp
public static bool GetApplyRainColorGrade()
```

### SendMouseKeyEvent

```csharp
public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)
```

### SetMousePos

```csharp
public static void SetMousePos(int posX, int posY)
```

### TickVisuals

```csharp
public static void TickVisuals(Scene mapScene, float tod, Mesh tickedMapMeshes)
```

### ValidateTerrainSoundIds

```csharp
public static void ValidateTerrainSoundIds()
```

### GetGlobalIlluminationOfString

```csharp
public static void GetGlobalIlluminationOfString(Scene mapScene, string value)
```

### GetColorGradeGridData

```csharp
public static void GetColorGradeGridData(Scene mapScene, byte gridData, string textureName)
```

### GetBattleSceneIndexMap

```csharp
public static void GetBattleSceneIndexMap(Scene mapScene, ref byte indexData, ref int width, ref int height)
```

### SetFrameForAtmosphere

```csharp
public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)
```

### SetTerrainDynamicParams

```csharp
public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)
```

### SetSeasonTimeFactor

```csharp
public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)
```

### GetSeasonTimeFactor

```csharp
public static float GetSeasonTimeFactor(Scene mapScene)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)