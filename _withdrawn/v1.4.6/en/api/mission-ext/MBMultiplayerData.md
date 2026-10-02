---
title: "MBMultiplayerData"
description: "MBMultiplayerData: a public class in TaleWorlds.MountAndBlade; 12 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBMultiplayerData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBMultiplayerData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBMultiplayerData`
**File:** `TaleWorlds.MountAndBlade/MBMultiplayerData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBMultiplayerData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBMultiplayerData.cs. It is a public class; the inheritance chain is MBMultiplayerData. It exposes 12 public/protected members: 9 methods, 1 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBMultiplayerData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBMultiplayerData. The surface is method-led (methods 9/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBMultiplayerData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ServerId` | `public static Guid ServerId` | property |
| `GetServerId` | `public static string GetServerId()` | method |
| `GetServerName` | `public static string GetServerName()` | method |
| `GetGameModule` | `public static string GetGameModule()` | method |
| `GetGameType` | `public static string GetGameType()` | method |
| `GetMap` | `public static string GetMap()` | method |
| `GetCurrentPlayerCount` | `public static int GetCurrentPlayerCount()` | method |
| `GetPlayerCountLimit` | `public static int GetPlayerCountLimit()` | method |
| `GameServerInfoReceived;` | `public static event MBMultiplayerData.GameServerInfoReceivedDelegate GameServerInfoReceived;` | event |
| `UpdateGameServerInfo` | `public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)` | method |
| `GameServerInfoReceivedDelegate` | `public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port);` | method |
| `GameServerInfoReceivedDelegate` | `public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
