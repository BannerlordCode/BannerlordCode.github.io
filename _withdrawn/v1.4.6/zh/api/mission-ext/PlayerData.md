---
title: "PlayerData"
description: "PlayerData：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 34 个（方法 5、属性 28、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PlayerData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerData`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PlayerData 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PlayerData.cs。它是一个 public 类，继承链为 PlayerData。public/protected 成员共 34 个：5 方法、28 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PlayerData。成员构成以属性为主（属性 28/34，方法 5/34），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PlayerData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | 属性 |
| `OwnerPlayerId` | `public PlayerId OwnerPlayerId` | 属性 |
| `Sigil` | `public string Sigil` | 属性 |
| `BodyProperties` | `public BodyProperties BodyProperties` | 属性 |
| `ShownBadgeIndex` | `public int ShownBadgeIndex` | 属性 |
| `PlayerStatsBase[]Stats` | `public PlayerStatsBase[]Stats` | 属性 |
| `Race` | `public int Race` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `KillCount` | `public int KillCount` | 属性 |
| `DeathCount` | `public int DeathCount` | 属性 |
| `AssistCount` | `public int AssistCount` | 属性 |
| `WinCount` | `public int WinCount` | 属性 |
| `LoseCount` | `public int LoseCount` | 属性 |
| `Experience` | `public int Experience` | 属性 |
| `LastPlayerName` | `public string LastPlayerName` | 属性 |
| `Username` | `public string Username` | 属性 |
| `UserId` | `public int UserId` | 属性 |
| `IsUsingClanSigil` | `public bool IsUsingClanSigil` | 属性 |
| `LastRegion` | `public string LastRegion` | 属性 |
| `string[]LastGameTypes` | `public string[]LastGameTypes` | 属性 |
| `LastLogin` | `public DateTime? LastLogin` | 属性 |
| `Playtime` | `public int Playtime` | 属性 |
| `ShownBadgeId` | `public string ShownBadgeId` | 属性 |
| `Gold` | `public int Gold` | 属性 |
| `IsMuted` | `public bool IsMuted` | 属性 |
| `Level` | `public int Level` | 属性 |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel` | 属性 |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel` | 属性 |
| `FillWith` | `public void FillWith(PlayerId playerId, PlayerId ownerPlayerId, BodyProperties bodyProperties, bool isFemale, string sigil, int experience, string lastPlayerName, string username, int userId, string lastRegion, string[]lastGameTypes, DateTime? lastLogin, int playtime, string shownBadgeId, int gold, PlayerStatsBase[]stats, bool shouldLog, bool isUsingClanSigil)` | 方法 |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId, PlayerId ownerPlayerId, string[]gameTypes)` | 方法 |
| `HasGameStats` | `public bool HasGameStats(string gameType)` | 方法 |
| `GetGameStats` | `public PlayerStatsBase GetGameStats(string gameType)` | 方法 |
| `UpdateGameStats` | `public void UpdateGameStats(PlayerStatsBase playerGameTypeStats)` | 方法 |
| `DefaultSigil` | `public const string DefaultSigil` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
