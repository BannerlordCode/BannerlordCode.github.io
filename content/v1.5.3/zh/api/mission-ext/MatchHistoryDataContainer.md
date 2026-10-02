---
title: "MatchHistoryDataContainer"
description: "MatchHistoryDataContainer 的自动生成类参考。"
---
# MatchHistoryDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData> `
**Base:** MultiplayerLocalDataContainer<MatchHistoryData>
**Source:** TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs

## 概述

`MatchHistoryDataContainer` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSaveDirectoryName
`protected override string GetSaveDirectoryName() `

### GetSaveFileName
`protected override string GetSaveFileName() `

### OnBeforeRemoveEntry
`protected override void OnBeforeRemoveEntry(MatchHistoryData item,out bool canRemoveEntry) `

### OnBeforeAddEntry
`protected override void OnBeforeAddEntry(MatchHistoryData item,out bool canAddEntry) `

### DeserializeInCompatibilityMode
`protected override List<MatchHistoryData> DeserializeInCompatibilityMode(string serializedJson) `

### TryGetHistoryData
`public bool TryGetHistoryData(string matchId,out MatchHistoryData historyData) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
