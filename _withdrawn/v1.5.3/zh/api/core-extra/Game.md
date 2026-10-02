---
title: "Game"
description: "Game 的自动生成类参考。"
---
# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner `
**Base:** IGameStateManagerOwner
**Source:** TaleWorlds.Core/Game.cs

## 概述

`Game` 的自动生成类参考页面。声明来自 `TaleWorlds.Core/Game.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateBannerVisual
`public IBannerVisual CreateBannerVisual(Banner banner) `

### GetDefaultEquipmentWithName
`public Equipment GetDefaultEquipmentWithName(string equipmentName) `

### SetDefaultEquipments
`public void SetDefaultEquipments(IReadOnlyDictionary<string,Equipment> defaultEquipments) `

### CreateGame
`public static Game CreateGame(GameType gameType,GameManagerBase gameManager,uint seed) `
`public static Game CreateGame(GameType gameType,GameManagerBase gameManager) `

### LoadSaveGame
`public static Game LoadSaveGame(LoadResult loadResult,GameManagerBase gameManager) `

### Save
`public void Save(MetaData metaData,string saveName,ISaveDriver driver,Action<SaveResult> onSaveCompleted) `

### Destroy
`public void Destroy() `

### CreateGameManager
`public void CreateGameManager() `

### OnStateChanged
`public void OnStateChanged(GameState oldState) `

### Initialize
`public void Initialize() `

### RegisterTypes
`public static void RegisterTypes(GameType gameType,MBObjectManager objectManager,GameManagerBase gameManager) `

### SetBasicModels
`public void SetBasicModels(IEnumerable<GameModel> models) `

### OnGameStart
`public void OnGameStart() `

### DoLoading
`public bool DoLoading() `

### OnMissionIsStarting
`public void OnMissionIsStarting(string missionName,MissionInitializerRecord rec) `

### OnFinalize
`public void OnFinalize() `

### InitializeDefaultGameObjects
`public void InitializeDefaultGameObjects() `

### LoadBasicFiles
`public void LoadBasicFiles() `

### ItemObjectDeserialized
`public void ItemObjectDeserialized(ItemObject itemObject) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
