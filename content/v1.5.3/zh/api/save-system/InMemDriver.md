---
title: "InMemDriver"
description: "InMemDriver 的自动生成类参考。"
---
# InMemDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class InMemDriver : ISaveDriver `
**Base:** ISaveDriver
**Source:** TaleWorlds.SaveSystem/InMemDriver.cs

## 概述

`InMemDriver` 的自动生成类参考页面。声明来自 `TaleWorlds.SaveSystem/InMemDriver.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Save
`public Task<SaveResultWithMessage> Save(string saveName,int version,MetaData metaData,GameData gameData) `

### LoadMetaData
`public MetaData LoadMetaData(string saveName) `

### Load
`public LoadData Load(string saveName) `

### GetSaveGameFileInfos
`public SaveGameFileInfo[] GetSaveGameFileInfos() `

### GetSaveGameFileNames
`public string[] GetSaveGameFileNames() `

### Delete
`public bool Delete(string saveName) `

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName) `

### IsWorkingAsync
`public bool IsWorkingAsync() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
