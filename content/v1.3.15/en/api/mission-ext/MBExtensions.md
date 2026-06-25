---
title: "MBExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBExtensions`
**Area:** mission-ext

## Overview

`MBExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### HasParentOfType
`public static bool HasParentOfType(this GameEntity e, Type t)`

**Purpose:** Checks whether the current object has/contains `parent of type`.

### HasParentOfType
`public static bool HasParentOfType(this WeakGameEntity e, Type t)`

**Purpose:** Checks whether the current object has/contains `parent of type`.

### IsOpponentOf
`public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)`

**Purpose:** Handles logic related to `is opponent of`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
