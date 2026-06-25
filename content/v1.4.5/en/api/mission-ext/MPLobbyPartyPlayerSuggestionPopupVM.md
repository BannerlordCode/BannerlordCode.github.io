---
title: "MPLobbyPartyPlayerSuggestionPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyPartyPlayerSuggestionPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPartyPlayerSuggestionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyPlayerSuggestionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyPlayerSuggestionPopupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OpenWith
`public void OpenWith(PlayerPartySuggestionData data)`

**Purpose:** Handles logic related to `open with`.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

## Usage Example

```csharp
var value = new MPLobbyPartyPlayerSuggestionPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)