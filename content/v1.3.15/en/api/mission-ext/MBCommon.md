---
title: "MBCommon"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBCommon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBCommon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBCommon`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBCommon.cs`

## Overview

`MBCommon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentGameType` | `public static MBCommon.GameType CurrentGameType { get; set; }` |
| `IsDebugMode` | `public static bool IsDebugMode { get; }` |
| `IsPaused` | `public static bool IsPaused { get; }` |

## Key Methods

### PauseGameEngine
`public static void PauseGameEngine()`

**Purpose:** Handles logic related to `pause game engine`.

### UnPauseGameEngine
`public static void UnPauseGameEngine()`

**Purpose:** Handles logic related to `un pause game engine`.

### GetApplicationTime
`public static float GetApplicationTime()`

**Purpose:** Gets the current value of `application time`.

### GetTotalMissionTime
`public static float GetTotalMissionTime()`

**Purpose:** Gets the current value of `total mission time`.

### FixSkeletons
`public static void FixSkeletons()`

**Purpose:** Handles logic related to `fix skeletons`.

### CheckResourceModifications
`public static void CheckResourceModifications()`

**Purpose:** Handles logic related to `check resource modifications`.

### Hash
`public static int Hash(int i, object o)`

**Purpose:** Checks whether the current object has/contains `h`.

## Usage Example

```csharp
MBCommon.PauseGameEngine();
```

## See Also

- [Complete Class Catalog](../catalog)