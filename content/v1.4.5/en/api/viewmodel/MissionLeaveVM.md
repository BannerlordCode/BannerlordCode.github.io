---
title: "MissionLeaveVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLeaveVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLeaveVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLeaveVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs`

## Overview

`MissionLeaveVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeaveText` | `public string LeaveText { get; set; }` |
| `MaxTime` | `public float MaxTime { get; set; }` |
| `CurrentTime` | `public float CurrentTime { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new MissionLeaveVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)