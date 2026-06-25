---
title: "MBExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBExtensions.cs`

## Overview

`MBExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGlobalOrganicDirection
`public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)`

**Purpose:** Gets the current value of `global organic direction`.

### GetGlobalHeadDirection
`public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)`

**Purpose:** Gets the current value of `global head direction`.

### FindAllWithCompatibleType
`public static List<GameEntity> FindAllWithCompatibleType(this IEnumerable<GameEntity> sceneProps, params Type types)`

**Purpose:** Handles logic related to `find all with compatible type`.

### FindAllWithCompatibleType
`public static List<MissionObject> FindAllWithCompatibleType(this IEnumerable<MissionObject> missionObjects, params Type types)`

**Purpose:** Handles logic related to `find all with compatible type`.

### CollectChildrenEntitiesWithTag
`public static List<GameEntity> CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)`

**Purpose:** Handles logic related to `collect children entities with tag`.

### CollectChildrenEntitiesWithTag
`public static List<WeakGameEntity> CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)`

**Purpose:** Handles logic related to `collect children entities with tag`.

### GetFirstChildEntityWithName
`public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)`

**Purpose:** Gets the current value of `first child entity with name`.

### IsOpponentOf
`public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)`

**Purpose:** Handles logic related to `is opponent of`.

## Usage Example

```csharp
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

## See Also

- [Complete Class Catalog](../catalog)