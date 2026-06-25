---
title: "MPLobbyClanMemberItemVM"
description: "Auto-generated class reference for MPLobbyClanMemberItemVM."
---
# MPLobbyClanMemberItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMemberItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMemberItemVM.cs`

## Overview

`MPLobbyClanMemberItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public PlayerId Id { get; }` |
| `IsOnline` | `public bool IsOnline { get; set; }` |
| `IsClanLeader` | `public bool IsClanLeader { get; set; }` |
| `NotEligibleInfo` | `public string NotEligibleInfo { get; set; }` |
| `InviteAcceptInfo` | `public string InviteAcceptInfo { get; set; }` |
| `Rank` | `public int Rank { get; set; }` |
| `UserActionsList` | `public MBBindingList<StringPairItemWithActionVM> UserActionsList { get; set; }` |
| `RankHint` | `public HintViewModel RankHint { get; set; }` |

## Key Methods

### MPLobbyClanMemberItemVM
`public unsafe MPLobbyClanMemberItemVM(ClanPlayer member, bool isOnline, string selectedBadgeID, AnotherPlayerState state, Action<MPLobbyClanMemberItemVM> executeActivate = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MPLobbyClanMemberItemVM from the subsystem API first
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
var result = mPLobbyClanMemberItemVM.MPLobbyClanMemberItemVM(member, false, "example", state, null);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanMemberItemVM from the subsystem API first
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
mPLobbyClanMemberItemVM.RefreshValues();
```

### SetNotEligibleInfo
`public void SetNotEligibleInfo(PlayerNotEligibleError notEligibleError)`

**Purpose:** Assigns a new value to `not eligible info` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanMemberItemVM from the subsystem API first
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
mPLobbyClanMemberItemVM.SetNotEligibleInfo(notEligibleError);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
mPLobbyClanMemberItemVM.MPLobbyClanMemberItemVM(member, false, "example", state, null);
```

## See Also

- [Area Index](../)