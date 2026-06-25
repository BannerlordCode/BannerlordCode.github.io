---
title: "ProjectProperties"
description: "Auto-generated class reference for ProjectProperties."
---
# ProjectProperties

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class ProjectProperties : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/ProjectProperties.cs`

## Overview

`ProjectProperties` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WarningThresholdPreBeatMillis` | `public int WarningThresholdPreBeatMillis { get; set; }` |
| `DefaultCalculatePostAndPrebeatLengthBasedOnBeats` | `public bool DefaultCalculatePostAndPrebeatLengthBasedOnBeats { get; set; }` |
| `DefaultSegmentSuitabilites` | `public int DefaultSegmentSuitabilites { get; set; }` |
| `ForceFullRebuild` | `public bool ForceFullRebuild { get; set; }` |
| `ModuleIdPrefix` | `public string ModuleIdPrefix { get; set; }` |
| `VolumeBoost` | `public float VolumeBoost { get; set; }` |
| `ExportSoundQualityInPercent` | `public int ExportSoundQualityInPercent { get; set; }` |
| `DefaultPrebeats` | `public float DefaultPrebeats { get; set; }` |
| `DefaultPostbeats` | `public float DefaultPostbeats { get; set; }` |
| `DefaultBpm` | `public float DefaultBpm { get; set; }` |
| `DefaultPrebeatLengthInSamples` | `public int DefaultPrebeatLengthInSamples { get; set; }` |
| `DefaultPostbeatLengthInSamples` | `public int DefaultPostbeatLengthInSamples { get; set; }` |

## Key Methods

### ShallowCopy
`public ProjectProperties ShallowCopy()`

**Purpose:** Executes the ShallowCopy logic.

```csharp
// Obtain an instance of ProjectProperties from the subsystem API first
ProjectProperties projectProperties = ...;
var result = projectProperties.ShallowCopy();
```

### Clone
`public object Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of ProjectProperties from the subsystem API first
ProjectProperties projectProperties = ...;
var result = projectProperties.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProjectProperties projectProperties = ...;
projectProperties.ShallowCopy();
```

## See Also

- [Area Index](../)