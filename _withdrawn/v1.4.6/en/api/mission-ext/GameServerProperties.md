---
title: "GameServerProperties"
description: "GameServerProperties: a public class in TaleWorlds.MountAndBlade.Diamond; 23 exposed members (1 methods, 20 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/GameServerProperties.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameServerProperties

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class GameServerProperties`
**File:** `TaleWorlds.MountAndBlade.Diamond/GameServerProperties.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameServerProperties lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/GameServerProperties.cs. It is a public class; the inheritance chain is GameServerProperties. It exposes 23 public/protected members: 1 methods, 20 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameServerProperties lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain GameServerProperties. The surface is property-led (properties 20/23, methods 1/23), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/GameServerProperties.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `Address` | `public string Address` | property |
| `Port` | `public int Port` | property |
| `Region` | `public string Region` | property |
| `GameModule` | `public string GameModule` | property |
| `GameType` | `public string GameType` | property |
| `Map` | `public string Map` | property |
| `UniqueMapId` | `public string UniqueMapId` | property |
| `GamePassword` | `public string GamePassword` | property |
| `AdminPassword` | `public string AdminPassword` | property |
| `MaxPlayerCount` | `public int MaxPlayerCount` | property |
| `PasswordProtected` | `public bool PasswordProtected` | property |
| `IsOfficial` | `public bool IsOfficial` | property |
| `ByOfficialProvider` | `public bool ByOfficialProvider` | property |
| `CrossplayEnabled` | `public bool CrossplayEnabled` | property |
| `Permission` | `public int Permission` | property |
| `HostId` | `public PlayerId HostId` | property |
| `HostName` | `public string HostName` | property |
| `List` | `public List<ModuleInfoModel>LoadedModules` | property |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules` | property |
| `GameServerProperties` | `public GameServerProperties()` | constructor |
| `GameServerProperties` | `public GameServerProperties(string name, string address, int port, string region, string gameModule, string gameType, string map, string uniqueMapId, string gamePassword, string adminPassword, int maxPlayerCount, bool isOfficial, bool byOfficialProvider, bool crossplayEnabled, PlayerId hostId, string hostName, List<ModuleInfoModel>loadedModules, bool allowsOptionalModules, int permission)` | constructor |
| `CheckAndReplaceProxyAddress` | `public void CheckAndReplaceProxyAddress(IReadOnlyDictionary<string, string>proxyAddressMap)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
