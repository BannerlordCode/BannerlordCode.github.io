---
title: "GameServerEntry"
description: "GameServerEntry：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 24 个（方法 1、属性 21、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameServerEntry

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class GameServerEntry`
**File:** `TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GameServerEntry 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs。它是一个 public 类，继承链为 GameServerEntry。public/protected 成员共 24 个：1 方法、21 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameServerEntry 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 GameServerEntry。成员构成以属性为主（属性 21/24，方法 1/24），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public CustomBattleId Id` | 属性 |
| `Address` | `public string Address` | 属性 |
| `Port` | `public int Port` | 属性 |
| `Region` | `public string Region` | 属性 |
| `PlayerCount` | `public int PlayerCount` | 属性 |
| `MaxPlayerCount` | `public int MaxPlayerCount` | 属性 |
| `ServerName` | `public string ServerName` | 属性 |
| `GameModule` | `public string GameModule` | 属性 |
| `GameType` | `public string GameType` | 属性 |
| `Map` | `public string Map` | 属性 |
| `UniqueMapId` | `public string UniqueMapId` | 属性 |
| `Ping` | `public int Ping` | 属性 |
| `IsOfficial` | `public bool IsOfficial` | 属性 |
| `ByOfficialProvider` | `public bool ByOfficialProvider` | 属性 |
| `PasswordProtected` | `public bool PasswordProtected` | 属性 |
| `Permission` | `public int Permission` | 属性 |
| `CrossplayEnabled` | `public bool CrossplayEnabled` | 属性 |
| `HostId` | `public PlayerId HostId` | 属性 |
| `HostName` | `public string HostName` | 属性 |
| `List` | `public List<ModuleInfoModel>LoadedModules` | 属性 |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules` | 属性 |
| `GameServerEntry` | `public GameServerEntry()` | 构造函数 |
| `GameServerEntry` | `public GameServerEntry(CustomBattleId id, string serverName, string address, int port, string region, string gameModule, string gameType, string map, string uniqueMapId, int playerCount, int maxPlayerCount, bool isOfficial, bool byOfficialProvider, bool crossplayEnabled, PlayerId hostId, string hostName, List<ModuleInfoModel>loadedModules, bool allowsOptionalModules, bool passwordProtected = false, int permission = 0)` | 构造函数 |
| `FilterGameServerEntriesBasedOnCrossplay` | `public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry>serverList, bool hasCrossplayPrivilege)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
