---
title: "AchievementManager"
description: "Auto-generated class reference for AchievementManager."
---
# AchievementManager

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `public class AchievementManager`
**Base:** none
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`

## Overview

`AchievementManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `AchievementManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AchievementService` | `public static IAchievementService AchievementService { get; set; }` |

## Key Methods

### SetStat
`public static bool SetStat(string name, int value)`

**Purpose:** Assigns a new value to `stat` and updates the object's internal state.

```csharp
// Static call; no instance required
AchievementManager.SetStat("example", 0);
```

### GetStat
`public static Task<int> GetStat(string name)`

**Purpose:** Reads and returns the `stat` value held by the current object.

```csharp
// Static call; no instance required
AchievementManager.GetStat("example");
```

### GetStats
`public static Task<int > GetStats(string names)`

**Purpose:** Reads and returns the `stats` value held by the current object.

```csharp
// Static call; no instance required
AchievementManager.GetStats("example");
```

## Usage Example

```csharp
var manager = AchievementManager.Current;
```

## See Also

- [Area Index](../)