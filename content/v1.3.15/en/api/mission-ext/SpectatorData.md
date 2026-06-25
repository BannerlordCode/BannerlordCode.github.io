---
title: "SpectatorData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpectatorData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpectatorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpectatorData`
**Area:** mission-ext

## Overview

`SpectatorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SpectatorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `Current` | `public static Mission Current { get; }` |
| `SceneName` | `public string SceneName { get; }` |
| `SceneLevels` | `public string SceneLevels { get; }` |
| `DamageToPlayerMultiplier` | `public float DamageToPlayerMultiplier { get; }` |
| `DamageToFriendsMultiplier` | `public float DamageToFriendsMultiplier { get; }` |
| `DamageFromPlayerToFriendsMultiplier` | `public float DamageFromPlayerToFriendsMultiplier { get; }` |
| `HasValidTerrainType` | `public bool HasValidTerrainType { get; }` |
| `TerrainType` | `public TerrainType TerrainType { get; }` |
| `Scene` | `public Scene Scene { get; }` |
| `CustomCameraTargetLocalOffset` | `public Vec3 CustomCameraTargetLocalOffset { get; }` |
| `CustomCameraLocalOffset` | `public Vec3 CustomCameraLocalOffset { get; }` |
| `CustomCameraLocalOffset2` | `public Vec3 CustomCameraLocalOffset2 { get; }` |
| `CustomCameraGlobalOffset` | `public Vec3 CustomCameraGlobalOffset { get; }` |
| `CustomCameraLocalRotationalOffset` | `public Vec3 CustomCameraLocalRotationalOffset { get; }` |
| `CustomCameraIgnoreCollision` | `public bool CustomCameraIgnoreCollision { get; }` |
| `CustomCameraFovMultiplier` | `public float CustomCameraFovMultiplier { get; }` |
| `CustomCameraFixedDistance` | `public float CustomCameraFixedDistance { get; }` |
| `ListenerAndAttenuationPosBlendFactor` | `public float ListenerAndAttenuationPosBlendFactor { get; }` |
| `IgnoredEntityForCamera` | `public GameEntity IgnoredEntityForCamera { get; }` |

## Key Methods

### AddActiveMissionObject
`public void AddActiveMissionObject(MissionObject missionObject)`

**Purpose:** Adds `active mission object` to the current collection or state.

### ActivateMissionObject
`public void ActivateMissionObject(MissionObject missionObject)`

**Purpose:** Handles logic related to `activate mission object`.

### DeactivateMissionObject
`public void DeactivateMissionObject(MissionObject missionObject)`

**Purpose:** Handles logic related to `deactivate mission object`.

### SetMissionCombatType
`public void SetMissionCombatType(Mission.MissionCombatType missionCombatType)`

**Purpose:** Sets the value or state of `mission combat type`.

### ConversationCharacterChanged
`public void ConversationCharacterChanged()`

**Purpose:** Handles logic related to `conversation character changed`.

### SetMissionMode
`public void SetMissionMode(MissionMode newMode, bool atStart)`

**Purpose:** Sets the value or state of `mission mode`.

### GetAverageFps
`public float GetAverageFps()`

**Purpose:** Gets the current value of `average fps`.

### GetFallAvoidSystemActive
`public bool GetFallAvoidSystemActive()`

**Purpose:** Gets the current value of `fall avoid system active`.

### SetFallAvoidSystemActive
`public void SetFallAvoidSystemActive(bool fallAvoidActive)`

**Purpose:** Sets the value or state of `fall avoid system active`.

### IsPositionInsideBoundaries
`public bool IsPositionInsideBoundaries(Vec2 position)`

**Purpose:** Handles logic related to `is position inside boundaries`.

### IsPositionInsideHardBoundaries
`public bool IsPositionInsideHardBoundaries(Vec2 position)`

**Purpose:** Handles logic related to `is position inside hard boundaries`.

### IsPositionInsideAnyBlockerNavMeshFace2D
`public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)`

**Purpose:** Handles logic related to `is position inside any blocker nav mesh face2 d`.

### IsPositionOnAnyBlockerNavMeshFace
`public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)`

**Purpose:** Handles logic related to `is position on any blocker nav mesh face`.

### RayCastForClosestAgent
`public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)`

**Purpose:** Handles logic related to `ray cast for closest agent`.

### RayCastForClosestAgentsLimbs
`public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**Purpose:** Handles logic related to `ray cast for closest agents limbs`.

### RayCastForGivenAgentsLimbs
`public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**Purpose:** Handles logic related to `ray cast for given agents limbs`.

### GetBiggestAgentCollisionPadding
`public float GetBiggestAgentCollisionPadding()`

**Purpose:** Gets the current value of `biggest agent collision padding`.

### SetMissionCorpseFadeOutTimeInSeconds
`public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)`

**Purpose:** Sets the value or state of `mission corpse fade out time in seconds`.

### SetOverrideCorpseCount
`public void SetOverrideCorpseCount(int overrideCorpseCount)`

**Purpose:** Sets the value or state of `override corpse count`.

### SetReportStuckAgentsMode
`public void SetReportStuckAgentsMode(bool value)`

**Purpose:** Sets the value or state of `report stuck agents mode`.

## Usage Example

```csharp
var value = new SpectatorData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
