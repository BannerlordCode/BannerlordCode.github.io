---
title: "Module"
description: "Module 的自动生成类参考。"
---
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject,IGameStateManagerOwner `
**Base:** DotNetObject,IGameStateManagerOwner
**Source:** TaleWorlds.MountAndBlade/Module.cs

## 概述

`Module` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Module.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CollectSubModules
`public MBReadOnlyList<MBSubModuleBase> CollectSubModules() `

### GetMetaMeshPackageMapping
`public static void GetMetaMeshPackageMapping(Dictionary<string,string> metaMeshPackageMappings) `

### GetItemMeshNames
`public static void GetItemMeshNames(HashSet<string> itemMeshNames) `

### GetCraftedItemMeshNames
`public static string GetCraftedItemMeshNames(List<string> arguments) `

### SetInitialModuleScreenAsRootScreen
`public void SetInitialModuleScreenAsRootScreen() `

### GetSubModuleType
`public Type GetSubModuleType(string name) `

### CheckIfSubmoduleCanBeLoadable
`public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo) `

### ClearStateOptions
`public void ClearStateOptions() `

### AddInitialStateOption
`public void AddInitialStateOption(InitialStateOption initialStateOption) `

### OverrideInitialStateOption
`public void OverrideInitialStateOption(string id,InitialStateOption newInitialStateOption) `

### GetInitialStateOptions
`public IEnumerable<InitialStateOption> GetInitialStateOptions() `

### GetInitialStateOptionWithId
`public InitialStateOption GetInitialStateOptionWithId(string id) `

### ExecuteInitialStateOptionWithId
`public void ExecuteInitialStateOptionWithId(string id) `

### SetCanLoadModules
`public void SetCanLoadModules(bool canLoadModules) `

### SetEditorMissionTester
`public void SetEditorMissionTester(IEditorMissionTester editorMissionTester) `

### StartMissionForEditorAux
`public void StartMissionForEditorAux(string missionName,string sceneName,string levels,bool forReplay,string replayFileName,bool isRecord) `

### GetMultiplayerGameMode
`public MultiplayerGameMode GetMultiplayerGameMode(string gameType) `

### AddMultiplayerGameMode
`public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode) `

### GetMultiplayerGameTypes
`public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes() `

### StartMultiplayerGame
`public bool StartMultiplayerGame(string multiplayerGameType,string scene) `

### ShutDownWithDelay
`public async void ShutDownWithDelay(string reason,int seconds) `

### DeactiveModule
`public void DeactiveModule(string moduleId) `

### ActivateModule
`public void ActivateModule(string moduleId) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
