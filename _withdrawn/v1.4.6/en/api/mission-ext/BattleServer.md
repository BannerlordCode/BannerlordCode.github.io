---
title: "BattleServer"
description: "BattleServer: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting Client<BattleServer>; 41 exposed members (23 methods, 17 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/BattleServer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleServer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BattleServer : Client<BattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleServer lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/BattleServer.cs. It is a public class, implementing/inheriting Client<BattleServer>; the inheritance chain is BattleServer → Client → DiamondClientApplicationObject. It exposes 41 public/protected members: 23 methods, 17 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleServer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain BattleServer → Client → DiamondClientApplicationObject. The surface is method-led (methods 23/41, properties 17/41), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/BattleServer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SceneName` | `public string SceneName` | property |
| `GameType` | `public string GameType` | property |
| `Faction1` | `public string Faction1` | property |
| `Faction2` | `public string Faction2` | property |
| `MinRequiredPlayerCountToStartBattle` | `public int MinRequiredPlayerCountToStartBattle` | property |
| `BattleSize` | `public int BattleSize` | property |
| `RoundThreshold` | `public int RoundThreshold` | property |
| `MoraleThreshold` | `public float MoraleThreshold` | property |
| `BattleId` | `public Guid BattleId` | property |
| `UseAnalytics` | `public bool UseAnalytics` | property |
| `CaptureMovementData` | `public bool CaptureMovementData` | property |
| `AnalyticsServiceAddress` | `public string AnalyticsServiceAddress` | property |
| `IsPremadeGame` | `public bool IsPremadeGame` | property |
| `PremadeGameType` | `public PremadeGameType PremadeGameType` | property |
| `PlayerId[]AssignedPlayers` | `public PlayerId[]AssignedPlayers` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsFinished` | `public bool IsFinished` | property |
| `BattleServer` | `public BattleServer(DiamondClientApplication diamondClientApplication, IClientSessionProvider<BattleServer>provider) : base(diamondClientApplication, provider, false)` | constructor |
| `Initialize` | `public void Initialize(IBattleServerSessionHandler handler)` | method |
| `SetBadgeComponent` | `public void SetBadgeComponent(IBadgeComponent badgeComponent)` | method |
| `StartServer` | `public void StartServer()` | method |
| `OnTick` | `protected override void OnTick()` | method |
| `OnConnected` | `public override void OnConnected()` | method |
| `OnCantConnect` | `public override void OnCantConnect()` | method |
| `OnDisconnected` | `public override void OnDisconnected()` | method |
| `BeginEndMission` | `public void BeginEndMission()` | method |
| `EndMission` | `public void EndMission(BattleResult battleResult, GameLog[]gameLogs, int gameTime, Dictionary<int, int>teamScores, Dictionary<PlayerId, int>playerScores)` | method |
| `BattleCancelledForPlayerLeaving` | `public void BattleCancelledForPlayerLeaving(PlayerId leaverID)` | method |
| `BattleStarted` | `public void BattleStarted(BattleResult battleResult)` | method |
| `UpdateBattleStats` | `public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int>teamScores)` | method |
| `DoNotAcceptNewPlayers` | `public void DoNotAcceptNewPlayers()` | method |
| `OnWarmupEnded` | `public void OnWarmupEnded()` | method |
| `OnPlayerSpawned` | `public void OnPlayerSpawned(PlayerId playerId)` | method |
| `GetPeer` | `public BattlePeer GetPeer(string name)` | method |
| `GetPeer` | `public BattlePeer GetPeer(PlayerId playerId)` | method |
| `GetPlayerParty` | `public Guid GetPlayerParty(PlayerId playerId)` | method |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)` | method |
| `InformGameServerReady` | `public async void InformGameServerReady()` | method |
| `OnFriendlyHit` | `public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)` | method |
| `OnFriendlyKill` | `public void OnFriendlyKill(int round, PlayerId killer, PlayerId victim)` | method |
| `AllPlayersConnected` | `public bool AllPlayersConnected()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Client](../../engine/Client__1/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
