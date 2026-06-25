---
title: "MultiplayerFactionBanVM"
description: "Auto-generated class reference for MultiplayerFactionBanVM."
---
# MultiplayerFactionBanVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBanVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote/MultiplayerFactionBanVM.cs`

## Overview

`MultiplayerFactionBanVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectList` | `public MBBindingList<MultiplayerFactionBanVoteVM> SelectList { get; set; }` |
| `BanList` | `public MBBindingList<MultiplayerFactionBanVoteVM> BanList { get; set; }` |
| `SelectTitle` | `public string SelectTitle { get; set; }` |
| `BanTitle` | `public string BanTitle { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerFactionBanVM from the subsystem API first
MultiplayerFactionBanVM multiplayerFactionBanVM = ...;
multiplayerFactionBanVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MultiplayerFactionBanVM from the subsystem API first
MultiplayerFactionBanVM multiplayerFactionBanVM = ...;
multiplayerFactionBanVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerFactionBanVM multiplayerFactionBanVM = ...;
multiplayerFactionBanVM.RefreshValues();
```

## See Also

- [Area Index](../)