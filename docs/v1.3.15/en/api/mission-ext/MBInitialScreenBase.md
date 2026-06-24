<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBInitialScreenBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBInitialScreenBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBInitialScreenBase : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**Area:** mission-ext

## Overview

`MBInitialScreenBase` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DoExitButtonAction
`public static void DoExitButtonAction()`

**Purpose:** Handles logic related to `do exit button action`.

### StartedRendering
`public bool StartedRendering()`

**Purpose:** Handles logic related to `started rendering`.

### OnEditModeEnterPress
`public static void OnEditModeEnterPress()`

**Purpose:** Called when the `edit mode enter press` event is raised.

### OnEditModeEnterRelease
`public static void OnEditModeEnterRelease()`

**Purpose:** Called when the `edit mode enter release` event is raised.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBInitialScreenBase.DoExitButtonAction();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
