---
title: "BadgeManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BadgeManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BadgeManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `with x m l`.

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### GetByIndex
`public static Badge GetByIndex(int index)`

**Purpose:** Gets the current value of `by index`.

### GetById
`public static Badge GetById(string id)`

**Purpose:** Gets the current value of `by id`.

### GetByType
`public static List<Badge> GetByType(BadgeType type)`

**Purpose:** Gets the current value of `by type`.

### GetBadgeConditionValue
`public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)`

**Purpose:** Gets the current value of `badge condition value`.

### GetBadgeConditionNumericValue
`public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)`

**Purpose:** Gets the current value of `badge condition numeric value`.

## Usage Example

```csharp
var manager = BadgeManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)