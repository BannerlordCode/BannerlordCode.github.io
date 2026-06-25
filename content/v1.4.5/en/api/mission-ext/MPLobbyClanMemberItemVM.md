---
title: "MPLobbyClanMemberItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanMemberItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanMemberItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMemberItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMemberItemVM.cs`

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

**Purpose:** Handles logic related to `m p lobby clan member item v m`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetNotEligibleInfo
`public void SetNotEligibleInfo(PlayerNotEligibleError notEligibleError)`

**Purpose:** Sets the value or state of `not eligible info`.

## Usage Example

```csharp
var value = new MPLobbyClanMemberItemVM();
value.MPLobbyClanMemberItemVM(member, false, "example", state, null);
```

## See Also

- [Complete Class Catalog](../catalog)