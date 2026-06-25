---
title: "MPLobbyClanItemVM"
description: "Auto-generated class reference for MPLobbyClanItemVM."
---
# MPLobbyClanItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanItemVM.cs`

## Overview

`MPLobbyClanItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameWithTag` | `public string NameWithTag { get; set; }` |
| `MemberCount` | `public int MemberCount { get; set; }` |
| `GamesWon` | `public int GamesWon { get; set; }` |
| `GamesLost` | `public int GamesLost { get; set; }` |
| `Ranking` | `public int Ranking { get; set; }` |
| `IsOwnClan` | `public bool IsOwnClan { get; set; }` |
| `SigilImage` | `public BannerImageIdentifierVM SigilImage { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanItemVM from the subsystem API first
MPLobbyClanItemVM mPLobbyClanItemVM = ...;
mPLobbyClanItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanItemVM mPLobbyClanItemVM = ...;
mPLobbyClanItemVM.RefreshValues();
```

## See Also

- [Area Index](../)