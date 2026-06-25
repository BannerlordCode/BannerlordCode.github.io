---
title: "MultiplayerFactionBanVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerFactionBanVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerFactionBanVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBanVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FactionBanVote/MultiplayerFactionBanVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MultiplayerFactionBanVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)