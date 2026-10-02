---
title: "Game"
description: "Auto-generated class reference for Game."
---
# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner `
**Base:** IGameStateManagerOwner
**Source:** TaleWorlds.Core/Game.cs

## Overview

Auto-generated stub for `Game`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateBannerVisual
`public IBannerVisual CreateBannerVisual(Banner banner)`

### GetDefaultEquipmentWithName
`public Equipment GetDefaultEquipmentWithName(string equipmentName)`

### SetDefaultEquipments
`public void SetDefaultEquipments(IReadOnlyDictionary<string,Equipment> defaultEquipments)`

### CreateGame
`public static Game CreateGame(GameType gameType,GameManagerBase gameManager,uint seed)`

### LoadSaveGame
`public static Game LoadSaveGame(LoadResult loadResult,GameManagerBase gameManager)`

### Save
`public void Save(MetaData metaData,string saveName,ISaveDriver driver,Action<SaveResult> onSaveCompleted)`

### Destroy
`public void Destroy()`

### CreateGameManager
`public void CreateGameManager()`

### OnStateChanged
`public void OnStateChanged(GameState oldState)`

### Initialize
`public void Initialize()`

### RegisterTypes
`public static void RegisterTypes(GameType gameType,MBObjectManager objectManager,GameManagerBase gameManager)`

### SetBasicModels
`public void SetBasicModels(IEnumerable<GameModel> models)`

### OnGameStart
`public void OnGameStart()`

### DoLoading
`public bool DoLoading()`

### OnMissionIsStarting
`public void OnMissionIsStarting(string missionName,MissionInitializerRecord rec)`

### OnFinalize
`public void OnFinalize()`

### InitializeDefaultGameObjects
`public void InitializeDefaultGameObjects()`

### LoadBasicFiles
`public void LoadBasicFiles()`

### ItemObjectDeserialized
`public void ItemObjectDeserialized(ItemObject itemObject)`

## See Also

- [Section index](../)
