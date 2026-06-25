---
title: "MBInitialScreenBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBInitialScreenBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBInitialScreenBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBInitialScreenBase : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade/MBInitialScreenBase.cs`

## Overview

`MBInitialScreenBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
MBInitialScreenBase.DoExitButtonAction();
```

## See Also

- [Complete Class Catalog](../catalog)