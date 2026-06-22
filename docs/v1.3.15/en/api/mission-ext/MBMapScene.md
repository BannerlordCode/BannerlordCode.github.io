<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMapScene`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMapScene

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBMapScene` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)