---
title: "ProjectProperties"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProjectProperties`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `shallow copy`.

### Clone
`public object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new ProjectProperties();
value.ShallowCopy();
```

## See Also

- [Complete Class Catalog](../catalog)