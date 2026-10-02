---
title: "GameServerEntry"
description: "GameServerEntry: a public class in TaleWorlds.MountAndBlade.Diamond; 24 exposed members (1 methods, 21 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameServerEntry

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class GameServerEntry`
**File:** `TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameServerEntry lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs. It is a public class; the inheritance chain is GameServerEntry. It exposes 24 public/protected members: 1 methods, 21 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameServerEntry lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain GameServerEntry. The surface is property-led (properties 21/24, methods 1/24), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public CustomBattleId Id` | property |
| `Address` | `public string Address` | property |
| `Port` | `public int Port` | property |
| `Region` | `public string Region` | property |
| `PlayerCount` | `public int PlayerCount` | property |
| `MaxPlayerCount` | `public int MaxPlayerCount` | property |
| `ServerName` | `public string ServerName` | property |
| `GameModule` | `public string GameModule` | property |
| `GameType` | `public string GameType` | property |
| `Map` | `public string Map` | property |
| `UniqueMapId` | `public string UniqueMapId` | property |
| `Ping` | `public int Ping` | property |
| `IsOfficial` | `public bool IsOfficial` | property |
| `ByOfficialProvider` | `public bool ByOfficialProvider` | property |
| `PasswordProtected` | `public bool PasswordProtected` | property |
| `Permission` | `public int Permission` | property |
| `CrossplayEnabled` | `public bool CrossplayEnabled` | property |
| `HostId` | `public PlayerId HostId` | property |
| `HostName` | `public string HostName` | property |
| `List` | `public List<ModuleInfoModel>LoadedModules` | property |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules` | property |
| `GameServerEntry` | `public GameServerEntry()` | constructor |
| `GameServerEntry` | `public GameServerEntry(CustomBattleId id, string serverName, string address, int port, string region, string gameModule, string gameType, string map, string uniqueMapId, int playerCount, int maxPlayerCount, bool isOfficial, bool byOfficialProvider, bool crossplayEnabled, PlayerId hostId, string hostName, List<ModuleInfoModel>loadedModules, bool allowsOptionalModules, bool passwordProtected = false, int permission = 0)` | constructor |
| `FilterGameServerEntriesBasedOnCrossplay` | `public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry>serverList, bool hasCrossplayPrivilege)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
