---
title: "StandaloneApplicationUtility"
description: "Auto-generated class reference for StandaloneApplicationUtility."
---
# StandaloneApplicationUtility

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class StandaloneApplicationUtility`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/StandaloneApplicationUtility.cs`

## Overview

`StandaloneApplicationUtility` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TerminateWithMessageBox
`public static void TerminateWithMessageBox(string title, string message)`

**Purpose:** **Purpose:** Executes the TerminateWithMessageBox logic.

```csharp
// Static call; no instance required
StandaloneApplicationUtility.TerminateWithMessageBox("example", "example");
```

## Usage Example

```csharp
StandaloneApplicationUtility.TerminateWithMessageBox("example", "example");
```

## See Also

- [Area Index](../)