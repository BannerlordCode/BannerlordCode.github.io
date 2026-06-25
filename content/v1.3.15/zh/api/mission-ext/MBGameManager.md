---
title: "MBGameManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGameManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public abstract class MBGameManager : GameManagerBase
**Base:** 

`GameManagerBase

`
**File:** 

`TaleWorlds.MountAndBlade/MBGameManager.cs

`

## 概述

`MBGameManager

` 是游戏模式的抽象基类——战役、自定义战斗、多人模式各自继承它。它拥有任务生命周期、应用时间及配置标志（`CheatMode

`、`IsDevelopmentMode

`、`UnitSpawnPrioritization

`）。当前管理器可通过 

`MBGameManager.Current

` 访问。mod 通过继承它实现完全自定义的游戏模式?
## 
## 心智模型

先把 `MBGameManager` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
主要属?
\| Name \| Signature \|
\|------\|-----------\|
\| 

`Current

` \| 

`public new static MBGameManager Current { get { return (MBGameManager)GameManagerBase.Current; }

` \|
\| 

`IsLoaded

` \| 

`public bool IsLoaded { get; protected set; }

` \|
\| 

`ApplicationTime

` \| 

`public override float ApplicationTime { get { return MBCommon.GetApplicationTime(); }

` \|
\| 

`CheatMode

` \| 

`public override bool CheatMode { get { return NativeConfig.CheatMode; }

` \|
\| 

`IsDevelopmentMode

` \| 

`public override bool IsDevelopmentMode { get { return NativeConfig.IsDevelopmentMode; }

` \|
\| 

`IsEditModeOn

` \| 

`public override bool IsEditModeOn { get { return MBEditor.IsEditModeOn; }

` \|
\| 

`UnitSpawnPrioritization

` \| 

`public override UnitSpawnPrioritizations UnitSpawnPrioritization { get { return (UnitSpawnPrioritizations)BannerlordConfig.UnitSpawnPrioritization; }

` \|

## 主要方法

### StartNewGame
`

`

`csharp
public static void StartNewGame(MBGameManager gameLoader)
`

`

`

### BeginGameStart
`

`

`csharp
public override void BeginGameStart(Game game)
`

`

`

### OnNewCampaignStart
`

`

`csharp
public override void OnNewCampaignStart(Game game, object starterObject)
`

`

`

### InitializeSubModuleGameObjects
`

`

`csharp
public override void InitializeSubModuleGameObjects(Game game)
`

`

`

### RegisterSubModuleObjects
`

`

`csharp
public override void RegisterSubModuleObjects(bool isSavedCampaign)
`

`

`

### RegisterSubModuleTypes
`

`

`csharp
public override void RegisterSubModuleTypes()
`

`

`

### AfterRegisterSubModuleObjects
`

`

`csharp
public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)
`

`

`

### InitializeGameStarter
`

`

`csharp
public override void InitializeGameStarter(Game game, IGameStarter starterObject)
`

`

`

### OnGameInitializationFinished
`

`

`csharp
public override void OnGameInitializationFinished(Game game)
`

`

`

### OnAfterGameInitializationFinished
`

`

`csharp
public override void OnAfterGameInitializationFinished(Game game, object initializerObject)
`

`

`

### OnGameLoaded
`

`

`csharp
public override void OnGameLoaded(Game game, object initializerObject)
`

`

`

### OnAfterGameLoaded
`

`

`csharp
public override void OnAfterGameLoaded(Game game)
`

`

`

### OnNewGameCreated
`

`

`csharp
public override void OnNewGameCreated(Game game, object initializerObject)
`

`

`

### OnGameStart
`

`

`csharp
public override void OnGameStart(Game game, IGameStarter gameStarter)
`

`

`

### OnGameEnd
`

`

`csharp
public override void OnGameEnd(Game game)
`

`

`

### EndGame
`

`

`csharp
public static void EndGame()
`

`

`

### OnLoadFinished
`

`

`csharp
public override void OnLoadFinished()
`

`

`

### CheckAndSetEnding
`

`

`csharp
public bool CheckAndSetEnding()
`

`

`

### OnSessionInvitationAccepted
`

`

`csharp
public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)
`

`

`

### OnPlatformRequestedMultiplayer
`

`

`csharp
public virtual void OnPlatformRequestedMultiplayer()
`

`

`

## 使用示例

`

`

`csharp
// 最小自定义游戏模式：继?MBGameManager 并驱动一个任?public class MyGameManager : MBGameManager
{
    public override void OnLoadFinished()
    {
        base.OnLoadFinished();
        // 启动你的自定义任务场?        var mission = Mission.StartNewMission(...);
        mission.SetMissionMode(MissionMode.Battle, true);
    }

    public override bool IsDevelopmentMode =&gt; NativeConfig.IsDevelopmentMode;
}
`

`

`

## 参见

- [完整类目录](../catalog)