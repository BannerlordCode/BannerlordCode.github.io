---
title: "GameManagerBase"
description: "GameManagerBase 的自动生成类参考。"
---
# GameManagerBase

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerBase `
**Base:** System.Object
**Source:** TaleWorlds.Core/GameManagerBase.cs

## 概述

`GameManagerBase` 的自动生成类参考页面。声明来自 `TaleWorlds.Core/GameManagerBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public void Initialize() `

### AddComponent
`public GameManagerComponent AddComponent(Type componentType) `

### GetComponent
`public GameManagerComponent GetComponent(Type componentType) `

### RemoveComponent
`public void RemoveComponent(GameManagerComponent component) `

### OnTick
`public void OnTick(float dt) `

### OnGameNetworkBegin
`public void OnGameNetworkBegin() `

### OnGameNetworkEnd
`public void OnGameNetworkEnd() `

### OnPlayerConnect
`public void OnPlayerConnect(VirtualPlayer peer) `

### OnPlayerDisconnect
`public void OnPlayerDisconnect(VirtualPlayer peer) `

### OnGameEnd
`public virtual void OnGameEnd(Game game) `

### DoLoadingForGameManager
`protected virtual void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep,out GameManagerLoadingSteps nextStep) `
`public bool DoLoadingForGameManager() `

### OnLoadFinished
`public virtual void OnLoadFinished() `

### InitializeGameStarter
`public virtual void InitializeGameStarter(Game game,IGameStarter starterObject) `

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
`public virtual void InitializeSubModuleGameObjects(Game game) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
