---
title: "MBTestRun"
description: "Auto-generated class reference for MBTestRun."
---
# MBTestRun

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBTestRun`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBTestRun.cs`

## Overview

`MBTestRun` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EnterEditMode
`public static bool EnterEditMode()`

**Purpose:** **Purpose:** Executes the EnterEditMode logic.

```csharp
// Static call; no instance required
MBTestRun.EnterEditMode();
```

### NewScene
`public static bool NewScene()`

**Purpose:** **Purpose:** Executes the NewScene logic.

```csharp
// Static call; no instance required
MBTestRun.NewScene();
```

### LeaveEditMode
`public static bool LeaveEditMode()`

**Purpose:** **Purpose:** Executes the LeaveEditMode logic.

```csharp
// Static call; no instance required
MBTestRun.LeaveEditMode();
```

### OpenScene
`public static bool OpenScene(string sceneName)`

**Purpose:** **Purpose:** Opens the resource or UI associated with scene.

```csharp
// Static call; no instance required
MBTestRun.OpenScene("example");
```

### CloseScene
`public static bool CloseScene()`

**Purpose:** **Purpose:** Closes the resource or UI associated with scene.

```csharp
// Static call; no instance required
MBTestRun.CloseScene();
```

### SaveScene
`public static bool SaveScene()`

**Purpose:** **Purpose:** Writes scene to persistent storage or a stream.

```csharp
// Static call; no instance required
MBTestRun.SaveScene();
```

### OpenDefaultScene
`public static bool OpenDefaultScene()`

**Purpose:** **Purpose:** Opens the resource or UI associated with default scene.

```csharp
// Static call; no instance required
MBTestRun.OpenDefaultScene();
```

### GetFPS
`public static int GetFPS()`

**Purpose:** **Purpose:** Reads and returns the f p s value held by the this instance.

```csharp
// Static call; no instance required
MBTestRun.GetFPS();
```

### StartMission
`public static void StartMission()`

**Purpose:** **Purpose:** Starts the mission flow or state machine.

```csharp
// Static call; no instance required
MBTestRun.StartMission();
```

## Usage Example

```csharp
MBTestRun.EnterEditMode();
```

## See Also

- [Area Index](../)