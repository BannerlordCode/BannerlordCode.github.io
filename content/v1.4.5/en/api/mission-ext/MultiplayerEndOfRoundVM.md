---
title: "MultiplayerEndOfRoundVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfRoundVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfRoundVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundVM.cs`

## Overview

`MultiplayerEndOfRoundVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `HasAttackerMVP` | `public bool HasAttackerMVP { get; set; }` |
| `HasDefenderMVP` | `public bool HasDefenderMVP { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |
| `AttackerSide` | `public MultiplayerEndOfRoundSideVM AttackerSide { get; set; }` |
| `DefenderSide` | `public MultiplayerEndOfRoundSideVM DefenderSide { get; set; }` |
| `AttackerMVP` | `public MPPlayerVM AttackerMVP { get; set; }` |
| `DefenderMVP` | `public MPPlayerVM DefenderMVP { get; set; }` |
| `AttackerMVPTitleText` | `public string AttackerMVPTitleText { get; set; }` |
| `DefenderMVPTitleText` | `public string DefenderMVPTitleText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### OnMVPSelected
`public void OnMVPSelected(MissionPeer mvpPeer)`

**Purpose:** Called when the `m v p selected` event is raised.

## Usage Example

```csharp
var value = new MultiplayerEndOfRoundVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)