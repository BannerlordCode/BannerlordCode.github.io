---
title: "MissionQuestBarVM"
description: "Auto-generated class reference for MissionQuestBarVM."
---
# MissionQuestBarVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionQuestBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionQuestBarVM.cs`

## Overview

`MissionQuestBarVM` lives in `SandBox.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasQuestLevel` | `public bool HasQuestLevel { get; set; }` |
| `MinimumQuestLevel` | `public float MinimumQuestLevel { get; set; }` |
| `MaximumQuestLevel` | `public float MaximumQuestLevel { get; set; }` |
| `CurrentQuestLevel` | `public float CurrentQuestLevel { get; set; }` |
| `CurrentQuestLevelRatio` | `public float CurrentQuestLevelRatio { get; set; }` |

## Key Methods

### UpdateQuestValues
`public void UpdateQuestValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)`

**Purpose:** Recalculates and stores the latest representation of quest values.

```csharp
// Obtain an instance of MissionQuestBarVM from the subsystem API first
MissionQuestBarVM missionQuestBarVM = ...;
missionQuestBarVM.UpdateQuestValues(0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionQuestBarVM missionQuestBarVM = ...;
missionQuestBarVM.UpdateQuestValues(0, 0, 0);
```

## See Also

- [Area Index](../)