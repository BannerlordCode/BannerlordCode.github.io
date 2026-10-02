---
title: "Module"
description: "Module: a public class in TaleWorlds.MountAndBlade, inheriting DotNetObject, IGameStateManagerOwner; 36 exposed members (23 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Module.cs."
---
# Module

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Module : DotNetObject,IGameStateManagerOwner : DotNetObject, IGameStateManagerOwner`
**File:** `TaleWorlds.MountAndBlade/Module.cs`

## Overview

Module lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Module.cs. It is a public class (sealed), implementing/inheriting DotNetObject, IGameStateManagerOwner; the inheritance chain is Module → DotNetObject. It exposes 36 public/protected members: 23 methods, 10 properties, 2 events, function Object() { [native code] } constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Module is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Module → DotNetObject. The surface is method-led (methods 23/36, properties 10/36), so it mostly exposes operations. DotNetObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Module.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentModule` | `public static Module CurrentModule` | property |
| `GlobalGameStateManager` | `public GameStateManager GlobalGameStateManager` | property |
| `MultiplayerRequested` | `public bool MultiplayerRequested` | property |
| `ReturnToEditorState` | `public bool ReturnToEditorState` | property |
| `LoadingFinished` | `public bool LoadingFinished` | property |
| `GlobalTextManager` | `public GameTextManager GlobalTextManager` | property |
| `IsOnlyCoreContentEnabled` | `public bool IsOnlyCoreContentEnabled` | property |
| `JobManager` | `public JobManager JobManager` | property |
| `StartupInfo` | `public GameStartupInfo StartupInfo` | property |
| `)` | `public MBReadOnlyList<MBSubModuleBase>CollectSubModules()` | method |
| `Dictionary` | `public static void GetMetaMeshPackageMapping(Dictionary<string,string>metaMeshPackageMappings)` | method |
| `HashSet` | `public static void GetItemMeshNames(HashSet<string>itemMeshNames)` | method |
| `List` | `public static string GetCraftedItemMeshNames(List<string>arguments)` | method |
| `)` | `public void SetInitialModuleScreenAsRootScreen()` | method |
| `name)` | `public Type GetSubModuleType(string name)` | method |
| `subModuleInfo)` | `public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)` | method |
| `SkinsXMLHasChanged;` | `public event Action SkinsXMLHasChanged;` | event |
| `ImguiProfilerTick;` | `public event Action ImguiProfilerTick;` | event |
| `)` | `public void ClearStateOptions()` | method |
| `initialStateOption)` | `public void AddInitialStateOption(InitialStateOption initialStateOption)` | method |
| `newInitialStateOption)` | `public void OverrideInitialStateOption(string id,InitialStateOption newInitialStateOption)` | method |
| `)` | `public IEnumerable<InitialStateOption>GetInitialStateOptions()` | method |
| `id)` | `public InitialStateOption GetInitialStateOptionWithId(string id)` | method |
| `id)` | `public void ExecuteInitialStateOptionWithId(string id)` | method |
| `canLoadModules)` | `public void SetCanLoadModules(bool canLoadModules)` | method |
| `editorMissionTester)` | `public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)` | method |
| `isRecord)` | `public void StartMissionForEditorAux(string missionName,string sceneName,string levels,bool forReplay,string replayFileName,bool isRecord)` | method |
| `gameType)` | `public MultiplayerGameMode GetMultiplayerGameMode(string gameType)` | method |
| `multiplayerGameMode)` | `public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)` | method |
| `)` | `public MBReadOnlyList<MultiplayerGameTypeInfo>GetMultiplayerGameTypes()` | method |
| `scene)` | `public bool StartMultiplayerGame(string multiplayerGameType,string scene)` | method |
| `seconds)` | `public async void ShutDownWithDelay(string reason,int seconds)` | method |
| `moduleId)` | `public void DeactiveModule(string moduleId)` | method |
| `moduleId)` | `public void ActivateModule(string moduleId)` | method |
| `XmlInformationType` | `public enum XmlInformationType` | property |
| `XmlInformationType` | `public enum XmlInformationType` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
