---
title: "MBGameManager"
description: "MBGameManager：TaleWorlds.MountAndBlade 的 public 类，继承 GameManagerBase；公开成员 32 个（方法 23、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade/MBGameManager.cs。"
---
# MBGameManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBGameManager : GameManagerBase`
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## 概述

MBGameManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBGameManager.cs。它是一个 public 类（abstract），实现/继承 GameManagerBase，继承链为 MBGameManager → GameManagerBase。public/protected 成员共 32 个：23 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBGameManager 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MBGameManager → GameManagerBase。成员构成以方法为主（方法 23/32，属性 8/32），对外主要以操作入口暴露。继承链上的 GameManagerBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBGameManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEnding` | `public bool IsEnding` | 属性 |
| `Current` | `public new static MBGameManager Current` | 属性 |
| `IsLoaded` | `public bool IsLoaded` | 属性 |
| `MBGameManager` | `protected MBGameManager()` | 构造函数 |
| `StartNewGame` | `protected static void StartNewGame()` | 方法 |
| `LoadModuleData` | `protected static void LoadModuleData(bool isLoadGame)` | 方法 |
| `StartNewGame` | `public static void StartNewGame(MBGameManager gameLoader)` | 方法 |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | 方法 |
| `OnNewCampaignStart` | `public override void OnNewCampaignStart(Game game, object starterObject)` | 方法 |
| `InitializeSubModuleGameObjects` | `public override void InitializeSubModuleGameObjects(Game game)` | 方法 |
| `RegisterSubModuleObjects` | `public override void RegisterSubModuleObjects(bool isSavedCampaign)` | 方法 |
| `RegisterSubModuleTypes` | `public override void RegisterSubModuleTypes()` | 方法 |
| `AfterRegisterSubModuleObjects` | `public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | 方法 |
| `InitializeGameStarter` | `public override void InitializeGameStarter(Game game, IGameStarter starterObject)` | 方法 |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | 方法 |
| `OnAfterGameInitializationFinished` | `public override void OnAfterGameInitializationFinished(Game game, object initializerObject)` | 方法 |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` | 方法 |
| `OnAfterGameLoaded` | `public override void OnAfterGameLoaded(Game game)` | 方法 |
| `OnNewGameCreated` | `public override void OnNewGameCreated(Game game, object initializerObject)` | 方法 |
| `OnGameStart` | `public override void OnGameStart(Game game, IGameStarter gameStarter)` | 方法 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 方法 |
| `EndGame` | `public static async void EndGame()` | 方法 |
| `OnLoadFinished` | `public override void OnLoadFinished()` | 方法 |
| `CheckAndSetEnding` | `public bool CheckAndSetEnding()` | 方法 |
| `OnSessionInvitationAccepted` | `public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)` | 方法 |
| `OnPlatformRequestedMultiplayer` | `public virtual void OnPlatformRequestedMultiplayer()` | 方法 |
| `List` | `protected List<MbObjectXmlInformation>GetXmlInformationFromModule()` | 方法 |
| `ApplicationTime` | `public override float ApplicationTime` | 属性 |
| `CheatMode` | `public override bool CheatMode` | 属性 |
| `IsDevelopmentMode` | `public override bool IsDevelopmentMode` | 属性 |
| `IsEditModeOn` | `public override bool IsEditModeOn` | 属性 |
| `UnitSpawnPrioritization` | `public override UnitSpawnPrioritizations UnitSpawnPrioritization` | 属性 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
