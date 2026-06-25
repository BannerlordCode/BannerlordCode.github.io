---
title: "PlayerPartySuggestionData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerPartySuggestionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerPartySuggestionData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerPartySuggestionData`
**Area:** mission-ext

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
var value = new PlayerPartySuggestionData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
