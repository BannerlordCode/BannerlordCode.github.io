---
title: "MBMapScene"
description: "Auto-generated class reference for MBMapScene."
---
# MBMapScene

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBMapScene`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMapScene.cs`

## Overview

`MBMapScene` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNearestFaceCenterForPosition
`public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int excludedFaceIds)`

**Purpose:** Reads and returns the nearest face center for position value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetNearestFaceCenterForPosition(mapScene, position, false, 0);
```

### GetNearestFaceCenterForPositionWithPath
`public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int excludedFaceIds)`

**Purpose:** Reads and returns the nearest face center for position with path value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetNearestFaceCenterForPositionWithPath(mapScene, pathFaceRecord, false, 0, 0);
```

### GetAccessiblePointNearPosition
`public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)`

**Purpose:** Reads and returns the accessible point near position value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetAccessiblePointNearPosition(mapScene, position, false, 0);
```

### RemoveZeroCornerBodies
`public static void RemoveZeroCornerBodies(Scene mapScene)`

**Purpose:** Removes zero corner bodies from the current collection or state.

```csharp
// Static call; no instance required
MBMapScene.RemoveZeroCornerBodies(mapScene);
```

### LoadAtmosphereData
`public static void LoadAtmosphereData(Scene mapScene)`

**Purpose:** Reads atmosphere data from persistent storage or a stream.

```csharp
// Static call; no instance required
MBMapScene.LoadAtmosphereData(mapScene);
```

### TickStepSound
`public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)`

**Purpose:** Advances the step sound state each frame or update cycle.

```csharp
// Static call; no instance required
MBMapScene.TickStepSound(mapScene, visuals, 0, soundType, 0);
```

### TickAmbientSounds
`public static void TickAmbientSounds(Scene mapScene, int terrainType)`

**Purpose:** Advances the ambient sounds state each frame or update cycle.

```csharp
// Static call; no instance required
MBMapScene.TickAmbientSounds(mapScene, 0);
```

### GetMouseVisible
`public static bool GetMouseVisible()`

**Purpose:** Reads and returns the mouse visible value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetMouseVisible();
```

### GetApplyRainColorGrade
`public static bool GetApplyRainColorGrade()`

**Purpose:** Reads and returns the apply rain color grade value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetApplyRainColorGrade();
```

### SendMouseKeyEvent
`public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)`

**Purpose:** Executes the SendMouseKeyEvent logic.

```csharp
// Static call; no instance required
MBMapScene.SendMouseKeyEvent(0, false);
```

### SetMousePos
`public static void SetMousePos(int posX, int posY)`

**Purpose:** Assigns a new value to mouse pos and updates the object's internal state.

```csharp
// Static call; no instance required
MBMapScene.SetMousePos(0, 0);
```

### TickVisuals
`public static void TickVisuals(Scene mapScene, float tod, Mesh tickedMapMeshes)`

**Purpose:** Advances the visuals state each frame or update cycle.

```csharp
// Static call; no instance required
MBMapScene.TickVisuals(mapScene, 0, tickedMapMeshes);
```

### ValidateTerrainSoundIds
`public static void ValidateTerrainSoundIds()`

**Purpose:** Checks whether terrain sound ids satisfies the required constraints, usually returning a boolean.

```csharp
// Static call; no instance required
MBMapScene.ValidateTerrainSoundIds();
```

### GetGlobalIlluminationOfString
`public static void GetGlobalIlluminationOfString(Scene mapScene, string value)`

**Purpose:** Reads and returns the global illumination of string value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetGlobalIlluminationOfString(mapScene, "example");
```

### GetColorGradeGridData
`public static void GetColorGradeGridData(Scene mapScene, byte gridData, string textureName)`

**Purpose:** Reads and returns the color grade grid data value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetColorGradeGridData(mapScene, 0, "example");
```

### GetBattleSceneIndexMap
`public static void GetBattleSceneIndexMap(Scene mapScene, ref byte indexData, ref int width, ref int height)`

**Purpose:** Reads and returns the battle scene index map value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetBattleSceneIndexMap(mapScene, indexData, width, height);
```

### SetFrameForAtmosphere
`public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)`

**Purpose:** Assigns a new value to frame for atmosphere and updates the object's internal state.

```csharp
// Static call; no instance required
MBMapScene.SetFrameForAtmosphere(mapScene, 0, 0, false);
```

### SetTerrainDynamicParams
`public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)`

**Purpose:** Assigns a new value to terrain dynamic params and updates the object's internal state.

```csharp
// Static call; no instance required
MBMapScene.SetTerrainDynamicParams(mapScene, dynamic_params);
```

### SetSeasonTimeFactor
`public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)`

**Purpose:** Assigns a new value to season time factor and updates the object's internal state.

```csharp
// Static call; no instance required
MBMapScene.SetSeasonTimeFactor(mapScene, 0);
```

### GetSeasonTimeFactor
`public static float GetSeasonTimeFactor(Scene mapScene)`

**Purpose:** Reads and returns the season time factor value held by the this instance.

```csharp
// Static call; no instance required
MBMapScene.GetSeasonTimeFactor(mapScene);
```

## Usage Example

```csharp
MBMapScene.GetNearestFaceCenterForPosition(mapScene, position, false, 0);
```

## See Also

- [Area Index](../)