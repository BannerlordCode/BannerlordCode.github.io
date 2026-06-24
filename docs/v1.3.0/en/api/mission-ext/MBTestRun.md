<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBTestRun`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBTestRun

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBTestRun`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBTestRun.cs`

## Overview

`MBTestRun` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EnterEditMode
`public static bool EnterEditMode()`

**Purpose:** Handles logic related to `enter edit mode`.

### NewScene
`public static bool NewScene()`

**Purpose:** Handles logic related to `new scene`.

### LeaveEditMode
`public static bool LeaveEditMode()`

**Purpose:** Handles logic related to `leave edit mode`.

### OpenScene
`public static bool OpenScene(string sceneName)`

**Purpose:** Handles logic related to `open scene`.

### CloseScene
`public static bool CloseScene()`

**Purpose:** Handles logic related to `close scene`.

### SaveScene
`public static bool SaveScene()`

**Purpose:** Saves `scene` data.

### OpenDefaultScene
`public static bool OpenDefaultScene()`

**Purpose:** Handles logic related to `open default scene`.

### GetFPS
`public static int GetFPS()`

**Purpose:** Gets the current value of `f p s`.

### StartMission
`public static void StartMission()`

**Purpose:** Handles logic related to `start mission`.

## Usage Example

```csharp
MBTestRun.EnterEditMode();
```

## See Also

- [Complete Class Catalog](../catalog)