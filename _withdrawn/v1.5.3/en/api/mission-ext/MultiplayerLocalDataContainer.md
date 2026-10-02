---
title: "MultiplayerLocalDataContainer"
description: "Auto-generated class reference for MultiplayerLocalDataContainer."
---
# MultiplayerLocalDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public abstract class MultiplayerLocalDataContainer<T> where T : MultiplayerLocalData `
**Base:** MultiplayerLocalData
**Source:** TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs

## Overview

Auto-generated stub for `MultiplayerLocalDataContainer`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSaveDirectoryName
`protected abstract string GetSaveDirectoryName()`

### GetSaveFileName
`protected abstract string GetSaveFileName()`

### AddEntry
`public void AddEntry(T item)`

### InsertEntry
`public void InsertEntry(T item,int index)`

### RemoveEntry
`public void RemoveEntry(T item)`

### GetEntries
`public MBReadOnlyList<T> GetEntries()`

### OnBeforeAddEntry
`protected virtual void OnBeforeAddEntry(T item,out bool canAddEntry)`

### OnBeforeRemoveEntry
`protected virtual void OnBeforeRemoveEntry(T item,out bool canRemoveEntry)`

### GetCompatibilityFilePath
`protected virtual PlatformFilePath GetCompatibilityFilePath()`

### DeserializeInCompatibilityMode
`protected virtual List<T> DeserializeInCompatibilityMode(string serializedJson)`

## See Also

- [Section index](../)
