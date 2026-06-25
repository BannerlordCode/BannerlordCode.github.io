---
title: "MultiplayerScoreboardStatsListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardStatsListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardStatsListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardStatsListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardStatsListPanel.cs`

## Overview

`MultiplayerScoreboardStatsListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameColumnWidthRatio` | `public float NameColumnWidthRatio { get; set; }` |
| `ScoreColumnWidthRatio` | `public float ScoreColumnWidthRatio { get; set; }` |
| `SoldiersColumnWidthRatio` | `public float SoldiersColumnWidthRatio { get; set; }` |

## Usage Example

```csharp
var value = new MultiplayerScoreboardStatsListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)