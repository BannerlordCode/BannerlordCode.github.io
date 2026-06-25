---
title: "MultiplayerMissionMarkerListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissionMarkerListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerMissionMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs`

## Overview

`MultiplayerMissionMarkerListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; set; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; set; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |
| `RemovalTimeVisiblityWidget` | `public Widget RemovalTimeVisiblityWidget { get; set; }` |
| `SpawnFlagIconWidget` | `public Widget SpawnFlagIconWidget { get; set; }` |
| `PeerWidget` | `public Widget PeerWidget { get; set; }` |
| `SiegeEngineWidget` | `public Widget SiegeEngineWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsSpawnFlag` | `public bool IsSpawnFlag { get; set; }` |
| `MarkerType` | `public int MarkerType { get; set; }` |

## Usage Example

```csharp
var value = new MultiplayerMissionMarkerListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)