---
title: "BattleServer"
description: "BattleServer：TaleWorlds.MountAndBlade.Diamond 的 public 类，继承 Client<BattleServer>；公开成员 41 个（方法 23、属性 17、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/BattleServer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleServer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BattleServer : Client<BattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BattleServer 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/BattleServer.cs。它是一个 public 类，实现/继承 Client<BattleServer>，继承链为 BattleServer → Client → DiamondClientApplicationObject。public/protected 成员共 41 个：23 方法、17 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleServer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 BattleServer → Client → DiamondClientApplicationObject。成员构成以方法为主（方法 23/41，属性 17/41），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/BattleServer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneName` | `public string SceneName` | 属性 |
| `GameType` | `public string GameType` | 属性 |
| `Faction1` | `public string Faction1` | 属性 |
| `Faction2` | `public string Faction2` | 属性 |
| `MinRequiredPlayerCountToStartBattle` | `public int MinRequiredPlayerCountToStartBattle` | 属性 |
| `BattleSize` | `public int BattleSize` | 属性 |
| `RoundThreshold` | `public int RoundThreshold` | 属性 |
| `MoraleThreshold` | `public float MoraleThreshold` | 属性 |
| `BattleId` | `public Guid BattleId` | 属性 |
| `UseAnalytics` | `public bool UseAnalytics` | 属性 |
| `CaptureMovementData` | `public bool CaptureMovementData` | 属性 |
| `AnalyticsServiceAddress` | `public string AnalyticsServiceAddress` | 属性 |
| `IsPremadeGame` | `public bool IsPremadeGame` | 属性 |
| `PremadeGameType` | `public PremadeGameType PremadeGameType` | 属性 |
| `PlayerId[]AssignedPlayers` | `public PlayerId[]AssignedPlayers` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsFinished` | `public bool IsFinished` | 属性 |
| `BattleServer` | `public BattleServer(DiamondClientApplication diamondClientApplication, IClientSessionProvider<BattleServer>provider) : base(diamondClientApplication, provider, false)` | 构造函数 |
| `Initialize` | `public void Initialize(IBattleServerSessionHandler handler)` | 方法 |
| `SetBadgeComponent` | `public void SetBadgeComponent(IBadgeComponent badgeComponent)` | 方法 |
| `StartServer` | `public void StartServer()` | 方法 |
| `OnTick` | `protected override void OnTick()` | 方法 |
| `OnConnected` | `public override void OnConnected()` | 方法 |
| `OnCantConnect` | `public override void OnCantConnect()` | 方法 |
| `OnDisconnected` | `public override void OnDisconnected()` | 方法 |
| `BeginEndMission` | `public void BeginEndMission()` | 方法 |
| `EndMission` | `public void EndMission(BattleResult battleResult, GameLog[]gameLogs, int gameTime, Dictionary<int, int>teamScores, Dictionary<PlayerId, int>playerScores)` | 方法 |
| `BattleCancelledForPlayerLeaving` | `public void BattleCancelledForPlayerLeaving(PlayerId leaverID)` | 方法 |
| `BattleStarted` | `public void BattleStarted(BattleResult battleResult)` | 方法 |
| `UpdateBattleStats` | `public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int>teamScores)` | 方法 |
| `DoNotAcceptNewPlayers` | `public void DoNotAcceptNewPlayers()` | 方法 |
| `OnWarmupEnded` | `public void OnWarmupEnded()` | 方法 |
| `OnPlayerSpawned` | `public void OnPlayerSpawned(PlayerId playerId)` | 方法 |
| `GetPeer` | `public BattlePeer GetPeer(string name)` | 方法 |
| `GetPeer` | `public BattlePeer GetPeer(PlayerId playerId)` | 方法 |
| `GetPlayerParty` | `public Guid GetPlayerParty(PlayerId playerId)` | 方法 |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)` | 方法 |
| `InformGameServerReady` | `public async void InformGameServerReady()` | 方法 |
| `OnFriendlyHit` | `public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)` | 方法 |
| `OnFriendlyKill` | `public void OnFriendlyKill(int round, PlayerId killer, PlayerId victim)` | 方法 |
| `AllPlayersConnected` | `public bool AllPlayersConnected()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Client](../../engine/Client__1/)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
