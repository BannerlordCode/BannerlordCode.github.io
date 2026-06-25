---
title: "MissionStealthFailCounterVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionStealthFailCounterVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionStealthFailCounterVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionStealthFailCounterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout/MissionStealthFailCounterVM.cs`

## Overview

`MissionStealthFailCounterVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CountDownText` | `public string CountDownText { get; set; }` |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime { get; set; }` |
| `FailCounterMaxTime` | `public float FailCounterMaxTime { get; set; }` |
| `IsCounterActive` | `public bool IsCounterActive { get; set; }` |

## Key Methods

### UpdateFailCounter
`public void UpdateFailCounter(float failCounterElapsedTime, float failCounterMaxTime, bool isStealthFailCounterMissionLogicActive)`

**Purpose:** Updates the state or data of `fail counter`.

## Usage Example

```csharp
var value = new MissionStealthFailCounterVM();
value.UpdateFailCounter(0, 0, false);
```

## See Also

- [Complete Class Catalog](../catalog)