---
title: "MainAgentDetectionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainAgentDetectionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MainAgentDetectionVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MainAgentDetectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MainAgentDetectionVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateDetectionValues
`public void UpdateDetectionValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)`

**Purpose:** Updates the state or data of `detection values`.

## Usage Example

```csharp
var value = new MainAgentDetectionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)