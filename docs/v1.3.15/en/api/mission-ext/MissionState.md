<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionState : GameState`
**Base:** `GameState`
**Area:** mission-ext

## Overview

`MissionState` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Handler` | `public IMissionSystemHandler Handler { get; }` |
| `Current` | `public static MissionState Current { get; }` |
| `CurrentMission` | `public Mission CurrentMission { get; }` |
| `MissionName` | `public string MissionName { get; }` |
| `FirstMissionTickAfterLoading` | `public bool FirstMissionTickAfterLoading { get; }` |
| `Paused` | `public bool Paused { get; set; }` |

## Key Methods

### OpenNew
`public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)`

**Purpose:** Handles logic related to `open new`.

### BeginDelayedDisconnectFromMission
`public void BeginDelayedDisconnectFromMission()`

**Purpose:** Handles logic related to `begin delayed disconnect from mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MissionState.OpenNew("example", rec, handler, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
