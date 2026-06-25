---
title: "MissionDisguiseMarkersVM"
description: "Auto-generated class reference for MissionDisguiseMarkersVM."
---
# MissionDisguiseMarkersVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionDisguiseMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionDisguiseMarkersVM.cs`

## Overview

`MissionDisguiseMarkersVM` lives in `SandBox.ViewModelCollection.Missions.MainAgentDetection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetAgent` | `public MissionDisguiseMarkerItemVM TargetAgent { get; set; }` |
| `HostileAgents` | `public MBBindingList<MissionDisguiseMarkerItemVM> HostileAgents { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MissionDisguiseMarkersVM instance = ...;
```

## See Also

- [Area Index](../)