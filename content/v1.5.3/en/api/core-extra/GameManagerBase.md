---
title: "GameManagerBase"
description: "Auto-generated class reference for GameManagerBase."
---
# GameManagerBase

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerBase `
**Base:** System.Object
**Source:** TaleWorlds.Core/GameManagerBase.cs

## Overview

Auto-generated stub for `GameManagerBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public void Initialize()`

### AddComponent
`public GameManagerComponent AddComponent(Type componentType)`

### GetComponent
`public GameManagerComponent GetComponent(Type componentType)`

### RemoveComponent
`public void RemoveComponent(GameManagerComponent component)`

### OnTick
`public void OnTick(float dt)`

### OnGameNetworkBegin
`public void OnGameNetworkBegin()`

### OnGameNetworkEnd
`public void OnGameNetworkEnd()`

### OnPlayerConnect
`public void OnPlayerConnect(VirtualPlayer peer)`

### OnPlayerDisconnect
`public void OnPlayerDisconnect(VirtualPlayer peer)`

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

### DoLoadingForGameManager
`protected virtual void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep,out GameManagerLoadingSteps nextStep)`

### OnLoadFinished
`public virtual void OnLoadFinished()`

### InitializeGameStarter
`public virtual void InitializeGameStarter(Game game,IGameStarter starterObject)`

### OnGameStart
`public abstract void OnGameStart(Game game,IGameStarter gameStarter)`

### BeginGameStart
`public abstract void BeginGameStart(Game game)`

### OnNewCampaignStart
`public abstract void OnNewCampaignStart(Game game,object starterObject)`

### OnAfterCampaignStart
`public abstract void OnAfterCampaignStart(Game game)`

### RegisterSubModuleObjects
`public abstract void RegisterSubModuleObjects(bool isSavedCampaign)`

### AfterRegisterSubModuleObjects
`public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

### OnGameInitializationFinished
`public abstract void OnGameInitializationFinished(Game game)`

### OnNewGameCreated
`public abstract void OnNewGameCreated(Game game,object initializerObject)`

### OnGameLoaded
`public abstract void OnGameLoaded(Game game,object initializerObject)`

### OnAfterGameLoaded
`public abstract void OnAfterGameLoaded(Game game)`

### OnAfterGameInitializationFinished
`public abstract void OnAfterGameInitializationFinished(Game game,object initializerObject)`

### RegisterSubModuleTypes
`public abstract void RegisterSubModuleTypes()`

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

## See Also

- [Section index](../)
