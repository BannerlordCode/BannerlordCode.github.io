---
title: "MPLobbyClanMatchmakingRequestPopupVM"
description: "Auto-generated class reference for MPLobbyClanMatchmakingRequestPopupVM."
---
# MPLobbyClanMatchmakingRequestPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMatchmakingRequestPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMatchmakingRequestPopupVM.cs`

## Overview

`MPLobbyClanMatchmakingRequestPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsClanMatch` | `public bool IsClanMatch { get; set; }` |
| `IsPracticeMatch` | `public bool IsPracticeMatch { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `WantsToJoinText` | `public string WantsToJoinText { get; set; }` |
| `DoYouAcceptText` | `public string DoYouAcceptText { get; set; }` |
| `ClanSigil` | `public BannerImageIdentifierVM ClanSigil { get; set; }` |
| `ChallengerPartyLeader` | `public MPLobbyPlayerBaseVM ChallengerPartyLeader { get; set; }` |
| `ChallengerPartyPlayers` | `public MBBindingList<MPLobbyPlayerBaseVM> ChallengerPartyPlayers { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanMatchmakingRequestPopupVM from the subsystem API first
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**Purpose:** Opens the resource or UI associated with `with`.

```csharp
// Obtain an instance of MPLobbyClanMatchmakingRequestPopupVM from the subsystem API first
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.OpenWith("example", "example", partyId, challengerPlayerIDs, challengerPartyLeaderID, premadeGameType);
```

### Close
`public void Close()`

**Purpose:** Closes the resource or UI represented by the current object.

```csharp
// Obtain an instance of MPLobbyClanMatchmakingRequestPopupVM from the subsystem API first
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.Close();
```

### ExecuteAcceptMatchmaking
`public void ExecuteAcceptMatchmaking()`

**Purpose:** Runs the operation or workflow associated with `accept matchmaking`.

```csharp
// Obtain an instance of MPLobbyClanMatchmakingRequestPopupVM from the subsystem API first
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.ExecuteAcceptMatchmaking();
```

### ExecuteDeclineMatchmaking
`public void ExecuteDeclineMatchmaking()`

**Purpose:** Runs the operation or workflow associated with `decline matchmaking`.

```csharp
// Obtain an instance of MPLobbyClanMatchmakingRequestPopupVM from the subsystem API first
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.ExecuteDeclineMatchmaking();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)