<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AchievementManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `stat`.

### GetStat
`public static async Task<int> GetStat(string name)`

**Purpose:** Gets the current value of `stat`.

### GetStats
`public static async Task<int > GetStats(string names)`

**Purpose:** Gets the current value of `stats`.

## Usage Example

```csharp
var manager = AchievementManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)