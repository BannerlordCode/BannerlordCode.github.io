---
title: "MBGameManager"
description: "MBGameManager: a public class in TaleWorlds.MountAndBlade, inheriting GameManagerBase; 32 exposed members (23 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBGameManager.cs."
---
# MBGameManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBGameManager : GameManagerBase`
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## Overview

MBGameManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBGameManager.cs. It is a public class (abstract), implementing/inheriting GameManagerBase; the inheritance chain is MBGameManager → GameManagerBase. It exposes 32 public/protected members: 23 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBGameManager is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBGameManager → GameManagerBase. The surface is method-led (methods 23/32, properties 8/32), so it mostly exposes operations. GameManagerBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBGameManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEnding` | `public bool IsEnding` | property |
| `Current` | `public new static MBGameManager Current` | property |
| `IsLoaded` | `public bool IsLoaded` | property |
| `MBGameManager` | `protected MBGameManager()` | constructor |
| `StartNewGame` | `protected static void StartNewGame()` | method |
| `LoadModuleData` | `protected static void LoadModuleData(bool isLoadGame)` | method |
| `StartNewGame` | `public static void StartNewGame(MBGameManager gameLoader)` | method |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | method |
| `OnNewCampaignStart` | `public override void OnNewCampaignStart(Game game, object starterObject)` | method |
| `InitializeSubModuleGameObjects` | `public override void InitializeSubModuleGameObjects(Game game)` | method |
| `RegisterSubModuleObjects` | `public override void RegisterSubModuleObjects(bool isSavedCampaign)` | method |
| `RegisterSubModuleTypes` | `public override void RegisterSubModuleTypes()` | method |
| `AfterRegisterSubModuleObjects` | `public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | method |
| `InitializeGameStarter` | `public override void InitializeGameStarter(Game game, IGameStarter starterObject)` | method |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | method |
| `OnAfterGameInitializationFinished` | `public override void OnAfterGameInitializationFinished(Game game, object initializerObject)` | method |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` | method |
| `OnAfterGameLoaded` | `public override void OnAfterGameLoaded(Game game)` | method |
| `OnNewGameCreated` | `public override void OnNewGameCreated(Game game, object initializerObject)` | method |
| `OnGameStart` | `public override void OnGameStart(Game game, IGameStarter gameStarter)` | method |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |
| `EndGame` | `public static async void EndGame()` | method |
| `OnLoadFinished` | `public override void OnLoadFinished()` | method |
| `CheckAndSetEnding` | `public bool CheckAndSetEnding()` | method |
| `OnSessionInvitationAccepted` | `public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)` | method |
| `OnPlatformRequestedMultiplayer` | `public virtual void OnPlatformRequestedMultiplayer()` | method |
| `List` | `protected List<MbObjectXmlInformation>GetXmlInformationFromModule()` | method |
| `ApplicationTime` | `public override float ApplicationTime` | property |
| `CheatMode` | `public override bool CheatMode` | property |
| `IsDevelopmentMode` | `public override bool IsDevelopmentMode` | property |
| `IsEditModeOn` | `public override bool IsEditModeOn` | property |
| `UnitSpawnPrioritization` | `public override UnitSpawnPrioritizations UnitSpawnPrioritization` | property |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
