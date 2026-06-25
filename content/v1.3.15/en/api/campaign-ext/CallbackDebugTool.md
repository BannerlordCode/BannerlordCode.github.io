---
title: "CallbackDebugTool"
description: "Auto-generated class reference for CallbackDebugTool."
---
# CallbackDebugTool

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackDebugTool`
**Base:** none
**File:** `TaleWorlds.DotNet/CallbackDebugTool.cs`

## Overview

`CallbackDebugTool` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddLog
`public static void AddLog( string memberName = "")`

**Purpose:** Adds `log` to the current collection or state.

```csharp
// Static call; no instance required
CallbackDebugTool.AddLog("example");
```

### FrameEnd
`public static void FrameEnd()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CallbackDebugTool.FrameEnd();
```

### Reset
`public static void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Static call; no instance required
CallbackDebugTool.Reset();
```

### ShowResults
`public static string ShowResults()`

**Purpose:** Displays the UI or element associated with `results`.

```csharp
// Static call; no instance required
CallbackDebugTool.ShowResults();
```

## Usage Example

```csharp
CallbackDebugTool.AddLog("example");
```

## See Also

- [Area Index](../)