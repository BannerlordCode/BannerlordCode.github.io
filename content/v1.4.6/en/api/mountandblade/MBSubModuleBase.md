---
title: "MBSubModuleBase"
description: "MBSubModuleBase: a public class in TaleWorlds.MountAndBlade; 30 exposed members (30 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBSubModuleBase.cs."
---
# MBSubModuleBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## Overview

MBSubModuleBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBSubModuleBase.cs. It is a public class (abstract); the inheritance chain is MBSubModuleBase. It exposes 30 public/protected members: 30 methods, function Object() { [native code] } constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBSubModuleBase is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBSubModuleBase. The surface is method-led (methods 30/30, properties 0/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBSubModuleBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `)` | `protected internal virtual void OnSubModuleLoad()` | method |
| `)` | `protected internal virtual void OnSubModuleUnloaded()` | method |
| `)` | `protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot()` | method |
| `)` | `protected internal virtual void RegisterSubModuleTypes()` | method |
| `)` | `protected internal virtual void OnNewModuleLoad()` | method |
| `)` | `public virtual void OnConfigChanged()` | method |
| `mbGameManager,List` | `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager,List<string>disabledModules)` | method |
| `gameStarterObject)` | `protected internal virtual void OnGameStart(Game game,IGameStarter gameStarterObject)` | method |
| `dt)` | `protected internal virtual void OnApplicationTick(float dt)` | method |
| `dt)` | `protected internal virtual void AfterAsyncTickTick(float dt)` | method |
| `starterObject)` | `protected internal virtual void InitializeGameStarter(Game game,IGameStarter starterObject)` | method |
| `initializerObject)` | `public virtual void OnGameLoaded(Game game,object initializerObject)` | method |
| `game)` | `public virtual void OnAfterGameLoaded(Game game)` | method |
| `initializerObject)` | `public virtual void OnNewGameCreated(Game game,object initializerObject)` | method |
| `game)` | `public virtual void BeginGameStart(Game game)` | method |
| `starterObject)` | `public virtual void OnCampaignStart(Game game,object starterObject)` | method |
| `isSavedCampaign)` | `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` | method |
| `isSavedCampaign)` | `public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | method |
| `starterObject)` | `public virtual void OnMultiplayerGameStart(Game game,object starterObject)` | method |
| `game)` | `public virtual void OnGameInitializationFinished(Game game)` | method |
| `starterObject)` | `public virtual void OnAfterGameInitializationFinished(Game game,object starterObject)` | method |
| `game)` | `public virtual bool DoLoading(Game game)` | method |
| `game)` | `public virtual void OnGameEnd(Game game)` | method |
| `mission)` | `public virtual void OnMissionBehaviorInitialize(Mission mission)` | method |
| `mission)` | `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)` | method |
| `)` | `public virtual void OnInitialState()` | method |
| `dt)` | `protected internal virtual void OnNetworkTick(float dt)` | method |
| `)` | `public virtual void OnSubModuleActivated()` | method |
| `)` | `public virtual void OnSubModuleDeactivated()` | method |
| `game)` | `public virtual void InitializeSubModuleGameObjects(Game game)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
