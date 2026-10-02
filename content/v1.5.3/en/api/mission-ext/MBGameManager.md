---
title: "MBGameManager"
description: "Auto-generated class reference for MBGameManager."
---
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBGameManager : GameManagerBase `
**Base:** GameManagerBase
**Source:** TaleWorlds.MountAndBlade/MBGameManager.cs

## Overview

Auto-generated stub for `MBGameManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### StartNewGame
`protected static void StartNewGame()`

### LoadModuleData
`protected static void LoadModuleData(bool isLoadGame)`

### BeginGameStart
`public override void BeginGameStart(Game game)`

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game,object starterObject)`

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game)`

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes()`

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

### InitializeGameStarter
`public override void InitializeGameStarter(Game game,IGameStarter starterObject)`

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game,object initializerObject)`

### OnGameLoaded
`public override void OnGameLoaded(Game game,object initializerObject)`

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game)`

### OnNewGameCreated
`public override void OnNewGameCreated(Game game,object initializerObject)`

### OnGameStart
`public override void OnGameStart(Game game,IGameStarter gameStarter)`

### OnGameEnd
`public override void OnGameEnd(Game game)`

### EndGame
`public static async void EndGame()`

### OnLoadFinished
`public override void OnLoadFinished()`

### CheckAndSetEnding
`public bool CheckAndSetEnding()`

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer()`

### GetXmlInformationFromModule
`protected List<MbObjectXmlInformation> GetXmlInformationFromModule()`

## See Also

- [Section index](../)
