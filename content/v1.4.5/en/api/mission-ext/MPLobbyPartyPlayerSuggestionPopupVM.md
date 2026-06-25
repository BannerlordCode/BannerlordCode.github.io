---
title: "MPLobbyPartyPlayerSuggestionPopupVM"
description: "Auto-generated class reference for MPLobbyPartyPlayerSuggestionPopupVM."
---
# MPLobbyPartyPlayerSuggestionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyPlayerSuggestionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyPlayerSuggestionPopupVM.cs`

## Overview

`MPLobbyPartyPlayerSuggestionPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `SuggestingPlayerId` | `public PlayerId SuggestingPlayerId { get; }` |
| `SuggestingPlayerName` | `public string SuggestingPlayerName { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoYouWantToInviteText` | `public string DoYouWantToInviteText { get; set; }` |
| `PlayerSuggestedText` | `public string PlayerSuggestedText { get; set; }` |
| `SuggestedPlayer` | `public MPLobbyPlayerBaseVM SuggestedPlayer { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPartyPlayerSuggestionPopupVM from the subsystem API first
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(PlayerPartySuggestionData data)`

**Purpose:** Opens the resource or UI associated with `with`.

```csharp
// Obtain an instance of MPLobbyPartyPlayerSuggestionPopupVM from the subsystem API first
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.OpenWith(data);
```

### Close
`public void Close()`

**Purpose:** Closes the resource or UI represented by the current object.

```csharp
// Obtain an instance of MPLobbyPartyPlayerSuggestionPopupVM from the subsystem API first
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.Close();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)