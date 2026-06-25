---
title: "DelayedStateChanger"
description: "Auto-generated class reference for DelayedStateChanger."
---
# DelayedStateChanger

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DelayedStateChanger : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`

## Overview

`DelayedStateChanger` lives in `TaleWorlds.GauntletUI.ExtraWidgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.ExtraWidgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoStart` | `public bool AutoStart { get; set; }` |
| `Trigger` | `public bool Trigger { get; set; }` |
| `StateResetable` | `public bool StateResetable { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `Delay` | `public float Delay { get; set; }` |
| `State` | `public string State { get; set; }` |
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |

## Key Methods

### Start
`public void Start()`

**Purpose:** Starts the current object's flow or state machine.

```csharp
// Obtain an instance of DelayedStateChanger from the subsystem API first
DelayedStateChanger delayedStateChanger = ...;
delayedStateChanger.Start();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DelayedStateChanger delayedStateChanger = ...;
delayedStateChanger.Start();
```

## See Also

- [Area Index](../)