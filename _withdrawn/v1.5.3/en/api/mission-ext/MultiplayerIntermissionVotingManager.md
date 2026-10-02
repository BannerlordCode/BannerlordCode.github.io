---
title: "MultiplayerIntermissionVotingManager"
description: "Auto-generated class reference for MultiplayerIntermissionVotingManager."
---
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs

## Overview

Auto-generated stub for `MultiplayerIntermissionVotingManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddMapItem
`public void AddMapItem(string mapID)`

### AddUsableMap
`public void AddUsableMap(CustomGameUsableMap usableMap)`

### GetUsableMaps
`public List<string> GetUsableMaps(string gameType)`

### AddCultureItem
`public void AddCultureItem(string cultureID)`

### AddVote
`public void AddVote(PlayerId voterID,string itemID,int voteCount)`

### SetVotesOfMap
`public void SetVotesOfMap(int mapItemIndex,int voteCount)`

### SetVotesOfCulture
`public void SetVotesOfCulture(int cultureItemIndex,int voteCount)`

### ClearVotes
`public void ClearVotes()`

### ClearItems
`public void ClearItems()`

### IsCultureItem
`public bool IsCultureItem(string itemID)`

### IsMapItem
`public bool IsMapItem(string itemID)`

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerID)`

### SelectRandomCultures
`public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)`

### IsPeerVotedForItem
`public bool IsPeerVotedForItem(NetworkCommunicator peer,string itemID)`

### SortVotesAndPickBest
`public void SortVotesAndPickBest()`

### MapItemAddedDelegate
`public delegate void MapItemAddedDelegate(string mapId)`

### CultureItemAddedDelegate
`public delegate void CultureItemAddedDelegate(string cultureId)`

### MapItemVoteCountChangedDelegate
`public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex,int voteCount)`

### CultureItemVoteCountChangedDelegate
`public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex,int voteCount)`

## See Also

- [Section index](../)
