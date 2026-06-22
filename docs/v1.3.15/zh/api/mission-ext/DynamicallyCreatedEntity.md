<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DynamicallyCreatedEntity`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DynamicallyCreatedEntity

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DynamicallyCreatedEntity` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

### AddActiveMissionObject

```csharp
public void AddActiveMissionObject(MissionObject missionObject)
```

### ActivateMissionObject

```csharp
public void ActivateMissionObject(MissionObject missionObject)
```

### DeactivateMissionObject

```csharp
public void DeactivateMissionObject(MissionObject missionObject)
```

### SetMissionCombatType

```csharp
public void SetMissionCombatType(Mission.MissionCombatType missionCombatType)
```

### ConversationCharacterChanged

```csharp
public void ConversationCharacterChanged()
```

### SetMissionMode

```csharp
public void SetMissionMode(MissionMode newMode, bool atStart)
```

### GetAverageFps

```csharp
public float GetAverageFps()
```

### GetFallAvoidSystemActive

```csharp
public bool GetFallAvoidSystemActive()
```

### SetFallAvoidSystemActive

```csharp
public void SetFallAvoidSystemActive(bool fallAvoidActive)
```

### IsPositionInsideBoundaries

```csharp
public bool IsPositionInsideBoundaries(Vec2 position)
```

### IsPositionInsideHardBoundaries

```csharp
public bool IsPositionInsideHardBoundaries(Vec2 position)
```

### IsPositionInsideAnyBlockerNavMeshFace2D

```csharp
public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)
```

### IsPositionOnAnyBlockerNavMeshFace

```csharp
public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)
```

### RayCastForClosestAgent

```csharp
public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)
```

### RayCastForClosestAgentsLimbs

```csharp
public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)
```

### RayCastForGivenAgentsLimbs

```csharp
public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)
```

### GetBiggestAgentCollisionPadding

```csharp
public float GetBiggestAgentCollisionPadding()
```

### SetMissionCorpseFadeOutTimeInSeconds

```csharp
public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)
```

### SetOverrideCorpseCount

```csharp
public void SetOverrideCorpseCount(int overrideCorpseCount)
```

### SetReportStuckAgentsMode

```csharp
public void SetReportStuckAgentsMode(bool value)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)