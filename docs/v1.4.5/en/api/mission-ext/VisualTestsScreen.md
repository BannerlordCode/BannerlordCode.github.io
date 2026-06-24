<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualTestsScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualTestsScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualTestsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/VisualTestsScreen.cs`

## Overview

`VisualTestsScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartedRendering
`public bool StartedRendering()`

**Purpose:** Handles logic related to `started rendering`.

### GetSubTestName
`public string GetSubTestName(CameraPointTestType type)`

**Purpose:** Gets the current value of `sub test name`.

### GetRenderMode
`public EngineRenderDisplayMode GetRenderMode(CameraPointTestType type)`

**Purpose:** Gets the current value of `render mode`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new VisualTestsScreen();
value.StartedRendering();
```

## See Also

- [Complete Class Catalog](../catalog)