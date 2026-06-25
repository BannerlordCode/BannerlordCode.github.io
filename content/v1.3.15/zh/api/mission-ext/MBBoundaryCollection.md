---
title: "MBBoundaryCollection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBBoundaryCollection`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBBoundaryCollection

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class MBBoundaryCollection : IDictionary<string, ICollection<Vec2>>, ICollection<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable, INotifyCollectionChanged`
**Base:** `IDictionary<string`
**领域:** mission-ext

## 概述

`MBBoundaryCollection` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void AddActiveMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 向当前集合/状态中添加 `active mission object`。

### ActivateMissionObject
`public void ActivateMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 处理 `activate mission object` 相关逻辑。

### DeactivateMissionObject
`public void DeactivateMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 处理 `deactivate mission object` 相关逻辑。

### SetMissionCombatType
`public void SetMissionCombatType(Mission.MissionCombatType missionCombatType)`

**用途 / Purpose:** 设置 `mission combat type` 的值或状态。

### ConversationCharacterChanged
`public void ConversationCharacterChanged()`

**用途 / Purpose:** 处理 `conversation character changed` 相关逻辑。

### SetMissionMode
`public void SetMissionMode(MissionMode newMode, bool atStart)`

**用途 / Purpose:** 设置 `mission mode` 的值或状态。

### GetAverageFps
`public float GetAverageFps()`

**用途 / Purpose:** 获取 `average fps` 的当前值。

### GetFallAvoidSystemActive
`public bool GetFallAvoidSystemActive()`

**用途 / Purpose:** 获取 `fall avoid system active` 的当前值。

### SetFallAvoidSystemActive
`public void SetFallAvoidSystemActive(bool fallAvoidActive)`

**用途 / Purpose:** 设置 `fall avoid system active` 的值或状态。

### IsPositionInsideBoundaries
`public bool IsPositionInsideBoundaries(Vec2 position)`

**用途 / Purpose:** 处理 `is position inside boundaries` 相关逻辑。

### IsPositionInsideHardBoundaries
`public bool IsPositionInsideHardBoundaries(Vec2 position)`

**用途 / Purpose:** 处理 `is position inside hard boundaries` 相关逻辑。

### IsPositionInsideAnyBlockerNavMeshFace2D
`public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)`

**用途 / Purpose:** 处理 `is position inside any blocker nav mesh face2 d` 相关逻辑。

### IsPositionOnAnyBlockerNavMeshFace
`public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)`

**用途 / Purpose:** 处理 `is position on any blocker nav mesh face` 相关逻辑。

### RayCastForClosestAgent
`public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)`

**用途 / Purpose:** 处理 `ray cast for closest agent` 相关逻辑。

### RayCastForClosestAgentsLimbs
`public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**用途 / Purpose:** 处理 `ray cast for closest agents limbs` 相关逻辑。

### RayCastForGivenAgentsLimbs
`public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**用途 / Purpose:** 处理 `ray cast for given agents limbs` 相关逻辑。

### GetBiggestAgentCollisionPadding
`public float GetBiggestAgentCollisionPadding()`

**用途 / Purpose:** 获取 `biggest agent collision padding` 的当前值。

### SetMissionCorpseFadeOutTimeInSeconds
`public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)`

**用途 / Purpose:** 设置 `mission corpse fade out time in seconds` 的值或状态。

### SetOverrideCorpseCount
`public void SetOverrideCorpseCount(int overrideCorpseCount)`

**用途 / Purpose:** 设置 `override corpse count` 的值或状态。

### SetReportStuckAgentsMode
`public void SetReportStuckAgentsMode(bool value)`

**用途 / Purpose:** 设置 `report stuck agents mode` 的值或状态。

## 使用示例

```csharp
MBBoundaryCollection example = MBBoundaryCollection.IsFinalized;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
