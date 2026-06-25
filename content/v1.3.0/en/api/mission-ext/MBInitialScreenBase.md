---
title: "MBInitialScreenBase"
description: "Auto-generated class reference for MBInitialScreenBase."
---
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

**Purpose:** Executes the DoExitButtonAction logic.

```csharp
// Static call; no instance required
MBInitialScreenBase.DoExitButtonAction();
```

### StartedRendering
`public bool StartedRendering()`

**Purpose:** Starts the ed rendering flow or state machine.

```csharp
// Obtain an instance of MBInitialScreenBase from the subsystem API first
MBInitialScreenBase mBInitialScreenBase = ...;
var result = mBInitialScreenBase.StartedRendering();
```

### OnEditModeEnterPress
`public static void OnEditModeEnterPress()`

**Purpose:** Invoked when the edit mode enter press event is raised.

```csharp
// Static call; no instance required
MBInitialScreenBase.OnEditModeEnterPress();
```

### OnEditModeEnterRelease
`public static void OnEditModeEnterRelease()`

**Purpose:** Invoked when the edit mode enter release event is raised.

```csharp
// Static call; no instance required
MBInitialScreenBase.OnEditModeEnterRelease();
```

## Usage Example

```csharp
MBInitialScreenBase.DoExitButtonAction();
```

## See Also

- [Area Index](../)