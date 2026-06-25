---
title: "MultiplayerEndOfRoundVM"
description: "Auto-generated class reference for MultiplayerEndOfRoundVM."
---
# MultiplayerEndOfRoundVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerEndOfRoundVM from the subsystem API first
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.RefreshValues();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of MultiplayerEndOfRoundVM from the subsystem API first
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.Refresh();
```

### OnMVPSelected
`public void OnMVPSelected(MissionPeer mvpPeer)`

**Purpose:** Invoked when the `m v p selected` event is raised.

```csharp
// Obtain an instance of MultiplayerEndOfRoundVM from the subsystem API first
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.OnMVPSelected(mvpPeer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.RefreshValues();
```

## See Also

- [Area Index](../)