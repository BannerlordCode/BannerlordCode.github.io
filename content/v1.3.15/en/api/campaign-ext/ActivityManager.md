---
title: "ActivityManager"
description: "Auto-generated class reference for ActivityManager."
---
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

**Purpose:** Starts the `activity` flow or state machine.

```csharp
// Static call; no instance required
ActivityManager.StartActivity("example");
```

### EndActivity
`public static bool EndActivity(string activityId, ActivityOutcome outcome)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ActivityManager.EndActivity("example", outcome);
```

### SetActivityAvailability
`public static bool SetActivityAvailability(string activityId, bool isAvailable)`

**Purpose:** Assigns a new value to `activity availability` and updates the object's internal state.

```csharp
// Static call; no instance required
ActivityManager.SetActivityAvailability("example", false);
```

### GetActivity
`public static Task<Activity> GetActivity(string activityId)`

**Purpose:** Reads and returns the `activity` value held by the current object.

```csharp
// Static call; no instance required
ActivityManager.GetActivity("example");
```

### GetActivityTransition
`public static ActivityTransition GetActivityTransition(string activityId)`

**Purpose:** Reads and returns the `activity transition` value held by the current object.

```csharp
// Static call; no instance required
ActivityManager.GetActivityTransition("example");
```

## Usage Example

```csharp
var manager = ActivityManager.Current;
```

## See Also

- [Area Index](../)