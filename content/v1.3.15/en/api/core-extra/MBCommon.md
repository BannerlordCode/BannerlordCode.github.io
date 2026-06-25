---
title: "MBCommon"
description: "Auto-generated class reference for MBCommon."
---
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

**Purpose:** Executes the PauseGameEngine logic.

```csharp
// Static call; no instance required
MBCommon.PauseGameEngine();
```

### UnPauseGameEngine
`public static void UnPauseGameEngine()`

**Purpose:** Executes the UnPauseGameEngine logic.

```csharp
// Static call; no instance required
MBCommon.UnPauseGameEngine();
```

### GetApplicationTime
`public static float GetApplicationTime()`

**Purpose:** Reads and returns the application time value held by the this instance.

```csharp
// Static call; no instance required
MBCommon.GetApplicationTime();
```

### GetTotalMissionTime
`public static float GetTotalMissionTime()`

**Purpose:** Reads and returns the total mission time value held by the this instance.

```csharp
// Static call; no instance required
MBCommon.GetTotalMissionTime();
```

### FixSkeletons
`public static void FixSkeletons()`

**Purpose:** Executes the FixSkeletons logic.

```csharp
// Static call; no instance required
MBCommon.FixSkeletons();
```

### CheckResourceModifications
`public static void CheckResourceModifications()`

**Purpose:** Verifies whether resource modifications holds true for the this instance.

```csharp
// Static call; no instance required
MBCommon.CheckResourceModifications();
```

### Hash
`public static int Hash(int i, object o)`

**Purpose:** Determines whether the this instance already holds h.

```csharp
// Static call; no instance required
MBCommon.Hash(0, o);
```

## Usage Example

```csharp
MBCommon.PauseGameEngine();
```

## See Also

- [Area Index](../)