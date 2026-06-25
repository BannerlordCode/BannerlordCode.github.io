---
title: "PlayerPartySuggestionData"
description: "Auto-generated class reference for PlayerPartySuggestionData."
---
# PlayerPartySuggestionData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerPartySuggestionData`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyPlayerSuggestionPopupVM.cs`

## Overview

`PlayerPartySuggestionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerPartySuggestionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `SuggestingPlayerId` | `public PlayerId SuggestingPlayerId { get; }` |
| `SuggestingPlayerName` | `public string SuggestingPlayerName { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PlayerPartySuggestionData entry = ...;
```

## See Also

- [Area Index](../)