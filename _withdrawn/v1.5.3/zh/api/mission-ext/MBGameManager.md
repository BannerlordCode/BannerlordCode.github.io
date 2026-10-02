---
title: "MBGameManager"
description: "MBGameManager 的自动生成类参考。"
---
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBGameManager : GameManagerBase `
**Base:** GameManagerBase
**Source:** TaleWorlds.MountAndBlade/MBGameManager.cs

## 概述

`MBGameManager` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBGameManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### StartNewGame
`protected static void StartNewGame() `
`public static void StartNewGame(MBGameManager gameLoader) `

### LoadModuleData
`protected static void LoadModuleData(bool isLoadGame) `

### BeginGameStart
`public override void BeginGameStart(Game game) `

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game,object starterObject) `

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game) `

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign) `

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes() `

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign) `

### InitializeGameStarter
`public override void InitializeGameStarter(Game game,IGameStarter starterObject) `

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game) `

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game,object initializerObject) `

### OnGameLoaded
`public override void OnGameLoaded(Game game,object initializerObject) `

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game) `

### OnNewGameCreated
`public override void OnNewGameCreated(Game game,object initializerObject) `

### OnGameStart
`public override void OnGameStart(Game game,IGameStarter gameStarter) `

### OnGameEnd
`public override void OnGameEnd(Game game) `

### EndGame
`public static async void EndGame() `

### OnLoadFinished
`public override void OnLoadFinished() `

### CheckAndSetEnding
`public bool CheckAndSetEnding() `

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType) `

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer() `

### GetXmlInformationFromModule
`protected List<MbObjectXmlInformation> GetXmlInformationFromModule() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
