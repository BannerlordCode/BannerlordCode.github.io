---
title: "CustomBattleServer"
description: "CustomBattleServer: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting Client<CustomBattleServer>; 33 exposed members (20 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleServer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class CustomBattleServer : Client<CustomBattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleServer lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs. It is a public class, implementing/inheriting Client<CustomBattleServer>; the inheritance chain is CustomBattleServer → Client → DiamondClientApplicationObject. It exposes 33 public/protected members: 20 methods, 11 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleServer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain CustomBattleServer → Client → DiamondClientApplicationObject. The surface is method-led (methods 20/33, properties 11/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Finished` | `public bool Finished` | property |
| `IsRegistered` | `public bool IsRegistered` | property |
| `IsPlaying` | `public bool IsPlaying` | property |
| `Connected` | `public bool Connected` | property |
| `CurrentState` | `public CustomBattleServer.State CurrentState` | property |
| `IsIdle` | `public bool IsIdle` | property |
| `CustomGameType` | `public string CustomGameType` | property |
| `CustomGameScene` | `public string CustomGameScene` | property |
| `Port` | `public int Port` | property |
| `BattleResult` | `public MultipleBattleResult BattleResult` | property |
| `CustomBattleServer` | `public CustomBattleServer(DiamondClientApplication diamondClientApplication, IClientSessionProvider<CustomBattleServer>provider) : base(diamondClientApplication, provider, false)` | constructor |
| `SetBadgeComponent` | `public void SetBadgeComponent(IBadgeComponent badgeComponent)` | method |
| `Connect` | `public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string[]loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)` | method |
| `OnConnected` | `public override void OnConnected()` | method |
| `OnCantConnect` | `public override void OnCantConnect()` | method |
| `OnDisconnected` | `public override void OnDisconnected()` | method |
| `OnTick` | `protected override void OnTick()` | method |
| `OnPlayerDisconnectedFromLobbyMessage` | `public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)` | method |
| `ResponseCustomGameClientConnection` | `public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[]playerJoinData)` | method |
| `RegisterGame` | `public async Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)` | method |
| `RegisterGame` | `public async Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)` | method |
| `UpdateCustomGameData` | `public void UpdateCustomGameData(string newGameType, string newMap, int newCount)` | method |
| `KickPlayer` | `public void KickPlayer(PlayerId id, bool banPlayer)` | method |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)` | method |
| `FinishAsIdle` | `public void FinishAsIdle(GameLog[]gameLogs)` | method |
| `FinishGame` | `public void FinishGame(GameLog[]gameLogs)` | method |
| `UpdateGameProperties` | `public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)` | method |
| `BeforeStartingNextBattle` | `public void BeforeStartingNextBattle(GameLog[]gameLogs)` | method |
| `BattleStarted` | `public void BattleStarted(Dictionary<PlayerId, int>playerTeams, string cultureTeam1, string cultureTeam2)` | method |
| `BattleFinished` | `public void BattleFinished(BattleResult battleResult, Dictionary<int, int>teamScores, Dictionary<PlayerId, int>playerScores)` | method |
| `UpdateBattleStats` | `public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int>teamScores, Dictionary<PlayerId, int>playerScores)` | method |
| `State` | `public enum State` | property |
| `State` | `public enum State` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Client](../../engine/Client__1/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
