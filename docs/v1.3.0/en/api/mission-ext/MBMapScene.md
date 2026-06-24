<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMapScene`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBMapScene

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBMapScene`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBMapScene.cs`

## Overview

`MBMapScene` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNearestFaceCenterForPosition
`public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int excludedFaceIds)`

**Purpose:** Gets the current value of `nearest face center for position`.

### GetNearestFaceCenterForPositionWithPath
`public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int excludedFaceIds)`

**Purpose:** Gets the current value of `nearest face center for position with path`.

### GetAccessiblePointNearPosition
`public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)`

**Purpose:** Gets the current value of `accessible point near position`.

### RemoveZeroCornerBodies
`public static void RemoveZeroCornerBodies(Scene mapScene)`

**Purpose:** Removes `zero corner bodies` from the current collection or state.

### LoadAtmosphereData
`public static void LoadAtmosphereData(Scene mapScene)`

**Purpose:** Loads `atmosphere data` data.

### TickStepSound
`public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)`

**Purpose:** Handles logic related to `tick step sound`.

### TickAmbientSounds
`public static void TickAmbientSounds(Scene mapScene, int terrainType)`

**Purpose:** Handles logic related to `tick ambient sounds`.

### GetMouseVisible
`public static bool GetMouseVisible()`

**Purpose:** Gets the current value of `mouse visible`.

### GetApplyRainColorGrade
`public static bool GetApplyRainColorGrade()`

**Purpose:** Gets the current value of `apply rain color grade`.

### SendMouseKeyEvent
`public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)`

**Purpose:** Handles logic related to `send mouse key event`.

### SetMousePos
`public static void SetMousePos(int posX, int posY)`

**Purpose:** Sets the value or state of `mouse pos`.

### TickVisuals
`public static void TickVisuals(Scene mapScene, float tod, Mesh tickedMapMeshes)`

**Purpose:** Handles logic related to `tick visuals`.

### ValidateTerrainSoundIds
`public static void ValidateTerrainSoundIds()`

**Purpose:** Handles logic related to `validate terrain sound ids`.

### GetGlobalIlluminationOfString
`public static void GetGlobalIlluminationOfString(Scene mapScene, string value)`

**Purpose:** Gets the current value of `global illumination of string`.

### GetColorGradeGridData
`public static void GetColorGradeGridData(Scene mapScene, byte gridData, string textureName)`

**Purpose:** Gets the current value of `color grade grid data`.

### GetBattleSceneIndexMap
`public static void GetBattleSceneIndexMap(Scene mapScene, ref byte indexData, ref int width, ref int height)`

**Purpose:** Gets the current value of `battle scene index map`.

### SetFrameForAtmosphere
`public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)`

**Purpose:** Sets the value or state of `frame for atmosphere`.

### SetTerrainDynamicParams
`public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)`

**Purpose:** Sets the value or state of `terrain dynamic params`.

### SetSeasonTimeFactor
`public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)`

**Purpose:** Sets the value or state of `season time factor`.

### GetSeasonTimeFactor
`public static float GetSeasonTimeFactor(Scene mapScene)`

**Purpose:** Gets the current value of `season time factor`.

## Usage Example

```csharp
MBMapScene.GetNearestFaceCenterForPosition(mapScene, position, false, 0);
```

## See Also

- [Complete Class Catalog](../catalog)