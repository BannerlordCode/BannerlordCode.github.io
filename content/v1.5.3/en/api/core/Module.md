---
title: "Module"
description: "Auto-generated class reference for Module."
---
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject,IGameStateManagerOwner `
**Base:** DotNetObject, IGameStateManagerOwner
**Source:** TaleWorlds.MountAndBlade/Module.cs

## Overview

Auto-generated stub for `Module`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CollectSubModules
`public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`

### GetMetaMeshPackageMapping
`public static void GetMetaMeshPackageMapping(Dictionary<string,string> metaMeshPackageMappings)`

### GetItemMeshNames
`public static void GetItemMeshNames(HashSet<string> itemMeshNames)`

### GetCraftedItemMeshNames
`public static string GetCraftedItemMeshNames(List<string> arguments)`

### SetInitialModuleScreenAsRootScreen
`public void SetInitialModuleScreenAsRootScreen()`

### GetSubModuleType
`public Type GetSubModuleType(string name)`

### CheckIfSubmoduleCanBeLoadable
`public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)`

### ClearStateOptions
`public void ClearStateOptions()`

### AddInitialStateOption
`public void AddInitialStateOption(InitialStateOption initialStateOption)`

### OverrideInitialStateOption
`public void OverrideInitialStateOption(string id,InitialStateOption newInitialStateOption)`

### GetInitialStateOptions
`public IEnumerable<InitialStateOption> GetInitialStateOptions()`

### GetInitialStateOptionWithId
`public InitialStateOption GetInitialStateOptionWithId(string id)`

### ExecuteInitialStateOptionWithId
`public void ExecuteInitialStateOptionWithId(string id)`

### SetCanLoadModules
`public void SetCanLoadModules(bool canLoadModules)`

### SetEditorMissionTester
`public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)`

### StartMissionForEditorAux
`public void StartMissionForEditorAux(string missionName,string sceneName,string levels,bool forReplay,string replayFileName,bool isRecord)`

### GetMultiplayerGameMode
`public MultiplayerGameMode GetMultiplayerGameMode(string gameType)`

### AddMultiplayerGameMode
`public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)`

### GetMultiplayerGameTypes
`public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()`

### StartMultiplayerGame
`public bool StartMultiplayerGame(string multiplayerGameType,string scene)`

### ShutDownWithDelay
`public async void ShutDownWithDelay(string reason,int seconds)`

### DeactiveModule
`public void DeactiveModule(string moduleId)`

### ActivateModule
`public void ActivateModule(string moduleId)`

## See Also

- [Section index](../)
