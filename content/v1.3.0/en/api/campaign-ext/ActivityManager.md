---
title: "ActivityManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActivityManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ActivityManager

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class ActivityManager`
**Base:** none
**File:** `TaleWorlds.ActivitySystem/ActivityManager.cs`

## Overview

`ActivityManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ActivityManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActivityService` | `public static IActivityService ActivityService { get; set; }` |

## Key Methods

### StartActivity
`public static bool StartActivity(string activityId)`

**Purpose:** Handles logic related to `start activity`.

### EndActivity
`public static bool EndActivity(string activityId, ActivityOutcome outcome)`

**Purpose:** Handles logic related to `end activity`.

### SetActivityAvailability
`public static bool SetActivityAvailability(string activityId, bool isAvailable)`

**Purpose:** Sets the value or state of `activity availability`.

### GetActivity
`public static Task<Activity> GetActivity(string activityId)`

**Purpose:** Gets the current value of `activity`.

### GetActivityTransition
`public static ActivityTransition GetActivityTransition(string activityId)`

**Purpose:** Gets the current value of `activity transition`.

## Usage Example

```csharp
var manager = ActivityManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)