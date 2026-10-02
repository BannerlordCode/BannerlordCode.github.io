---
title: "MultiplayerIntermissionVotingManager"
description: "MultiplayerIntermissionVotingManager 的自动生成类参考。"
---
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs

## 概述

`MultiplayerIntermissionVotingManager` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddMapItem
`public void AddMapItem(string mapID) `

### AddUsableMap
`public void AddUsableMap(CustomGameUsableMap usableMap) `

### GetUsableMaps
`public List<string> GetUsableMaps(string gameType) `

### AddCultureItem
`public void AddCultureItem(string cultureID) `

### AddVote
`public void AddVote(PlayerId voterID,string itemID,int voteCount) `

### SetVotesOfMap
`public void SetVotesOfMap(int mapItemIndex,int voteCount) `

### SetVotesOfCulture
`public void SetVotesOfCulture(int cultureItemIndex,int voteCount) `

### ClearVotes
`public void ClearVotes() `

### ClearItems
`public void ClearItems() `

### IsCultureItem
`public bool IsCultureItem(string itemID) `

### IsMapItem
`public bool IsMapItem(string itemID) `

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerID) `

### SelectRandomCultures
`public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode) `

### IsPeerVotedForItem
`public bool IsPeerVotedForItem(NetworkCommunicator peer,string itemID) `

### SortVotesAndPickBest
`public void SortVotesAndPickBest() `

### MapItemAddedDelegate
`public delegate void MapItemAddedDelegate(string mapId)`

### CultureItemAddedDelegate
`public delegate void CultureItemAddedDelegate(string cultureId)`

### MapItemVoteCountChangedDelegate
`public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex,int voteCount)`

### CultureItemVoteCountChangedDelegate
`public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex,int voteCount)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
