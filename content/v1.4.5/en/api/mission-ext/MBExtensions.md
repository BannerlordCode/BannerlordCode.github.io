---
title: "MBExtensions"
description: "Auto-generated class reference for MBExtensions."
---
# MBExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBExtensions.cs`

## Overview

`MBExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGlobalOrganicDirection
`public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)`

**Purpose:** Reads and returns the `global organic direction` value held by the current object.

```csharp
// Static call; no instance required
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

### GetGlobalHeadDirection
`public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)`

**Purpose:** Reads and returns the `global head direction` value held by the current object.

```csharp
// Static call; no instance required
MBExtensions.GetGlobalHeadDirection(columnFormation);
```

### FindAllWithCompatibleType
`public static List<GameEntity> FindAllWithCompatibleType(this IEnumerable<GameEntity> sceneProps, params Type types)`

**Purpose:** Looks up the matching `all with compatible type` in the current collection or scope.

```csharp
// Static call; no instance required
MBExtensions.FindAllWithCompatibleType(sceneProps, types);
```

### FindAllWithCompatibleType
`public static List<MissionObject> FindAllWithCompatibleType(this IEnumerable<MissionObject> missionObjects, params Type types)`

**Purpose:** Looks up the matching `all with compatible type` in the current collection or scope.

```csharp
// Static call; no instance required
MBExtensions.FindAllWithCompatibleType(missionObjects, types);
```

### CollectChildrenEntitiesWithTag
`public static List<GameEntity> CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBExtensions.CollectChildrenEntitiesWithTag(entity, "example");
```

### CollectChildrenEntitiesWithTag
`public static List<WeakGameEntity> CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBExtensions.CollectChildrenEntitiesWithTag(entity, "example");
```

### GetFirstChildEntityWithName
`public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)`

**Purpose:** Reads and returns the `first child entity with name` value held by the current object.

```csharp
// Static call; no instance required
MBExtensions.GetFirstChildEntityWithName(entity, "example");
```

### IsOpponentOf
`public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `opponent of` state or condition.

```csharp
// Static call; no instance required
MBExtensions.IsOpponentOf(s, side);
```

## Usage Example

```csharp
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

## See Also

- [Area Index](../)