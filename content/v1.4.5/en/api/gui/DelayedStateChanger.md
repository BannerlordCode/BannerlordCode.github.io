---
title: "DelayedStateChanger"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DelayedStateChanger`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DelayedStateChanger

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DelayedStateChanger : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`

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

**Purpose:** Handles logic related to `start`.

## Usage Example

```csharp
var value = new DelayedStateChanger();
value.Start();
```

## See Also

- [Complete Class Catalog](../catalog)