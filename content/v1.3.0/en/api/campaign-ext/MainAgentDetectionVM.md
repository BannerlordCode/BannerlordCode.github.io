---
title: "MainAgentDetectionVM"
description: "Auto-generated class reference for MainAgentDetectionVM."
---
# MainAgentDetectionVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MainAgentDetectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs`

## Overview

`MainAgentDetectionVM` lives in `SandBox.ViewModelCollection.Missions.MainAgentDetection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasDetection` | `public bool HasDetection { get; set; }` |
| `HasReachedSuspicionTreshold` | `public bool HasReachedSuspicionTreshold { get; set; }` |
| `MinimumDetectionLevel` | `public float MinimumDetectionLevel { get; set; }` |
| `MaximumDetectionLevel` | `public float MaximumDetectionLevel { get; set; }` |
| `CurrentDetectionLevel` | `public float CurrentDetectionLevel { get; set; }` |
| `CurrentDetectionLevelRatio` | `public float CurrentDetectionLevelRatio { get; set; }` |
| `SuspicionFullText` | `public string SuspicionFullText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MainAgentDetectionVM from the subsystem API first
MainAgentDetectionVM mainAgentDetectionVM = ...;
mainAgentDetectionVM.RefreshValues();
```

### UpdateDetectionValues
`public void UpdateDetectionValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)`

**Purpose:** Recalculates and stores the latest representation of detection values.

```csharp
// Obtain an instance of MainAgentDetectionVM from the subsystem API first
MainAgentDetectionVM mainAgentDetectionVM = ...;
mainAgentDetectionVM.UpdateDetectionValues(0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MainAgentDetectionVM mainAgentDetectionVM = ...;
mainAgentDetectionVM.RefreshValues();
```

## See Also

- [Area Index](../)