---
title: "BadgeManager"
description: "Auto-generated class reference for BadgeManager."
---
# BadgeManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BadgeManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/BadgeManager.cs`

## Overview

`BadgeManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BadgeManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Badges` | `public static List<Badge> Badges { get; }` |
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## Key Methods

### InitializeWithXML
`public static void InitializeWithXML(string xmlPath)`

**Purpose:** Prepares the resources, state, or bindings required by `with x m l`.

```csharp
// Static call; no instance required
BadgeManager.InitializeWithXML("example");
```

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Static call; no instance required
BadgeManager.OnFinalize();
```

### GetByIndex
`public static Badge GetByIndex(int index)`

**Purpose:** Reads and returns the `by index` value held by the current object.

```csharp
// Static call; no instance required
BadgeManager.GetByIndex(0);
```

### GetById
`public static Badge GetById(string id)`

**Purpose:** Reads and returns the `by id` value held by the current object.

```csharp
// Static call; no instance required
BadgeManager.GetById("example");
```

### GetByType
`public static List<Badge> GetByType(BadgeType type)`

**Purpose:** Reads and returns the `by type` value held by the current object.

```csharp
// Static call; no instance required
BadgeManager.GetByType(type);
```

### GetBadgeConditionValue
`public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)`

**Purpose:** Reads and returns the `badge condition value` value held by the current object.

```csharp
// Static call; no instance required
BadgeManager.GetBadgeConditionValue(playerData, condition);
```

### GetBadgeConditionNumericValue
`public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)`

**Purpose:** Reads and returns the `badge condition numeric value` value held by the current object.

```csharp
// Static call; no instance required
BadgeManager.GetBadgeConditionNumericValue(playerData, condition);
```

## Usage Example

```csharp
var manager = BadgeManager.Current;
```

## See Also

- [Area Index](../)