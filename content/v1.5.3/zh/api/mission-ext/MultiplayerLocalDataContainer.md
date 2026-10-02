---
title: "MultiplayerLocalDataContainer"
description: "MultiplayerLocalDataContainer 的自动生成类参考。"
---
# MultiplayerLocalDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public abstract class MultiplayerLocalDataContainer<T> where T : MultiplayerLocalData `
**Base:** MultiplayerLocalData
**Source:** TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs

## 概述

`MultiplayerLocalDataContainer` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSaveDirectoryName
`protected abstract string GetSaveDirectoryName()`

### GetSaveFileName
`protected abstract string GetSaveFileName()`

### AddEntry
`public void AddEntry(T item) `

### InsertEntry
`public void InsertEntry(T item,int index) `

### RemoveEntry
`public void RemoveEntry(T item) `

### GetEntries
`public MBReadOnlyList<T> GetEntries() `

### OnBeforeAddEntry
`protected virtual void OnBeforeAddEntry(T item,out bool canAddEntry) `

### OnBeforeRemoveEntry
`protected virtual void OnBeforeRemoveEntry(T item,out bool canRemoveEntry) `

### GetCompatibilityFilePath
`protected virtual PlatformFilePath GetCompatibilityFilePath() `

### DeserializeInCompatibilityMode
`protected virtual List<T> DeserializeInCompatibilityMode(string serializedJson) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
