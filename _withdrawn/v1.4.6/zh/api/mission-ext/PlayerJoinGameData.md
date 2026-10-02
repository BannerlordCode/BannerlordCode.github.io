---
title: "PlayerJoinGameData"
description: "PlayerJoinGameData：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 10 个（方法 1、属性 7、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerJoinGameData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerJoinGameData`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PlayerJoinGameData 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs。它是一个 public 类，继承链为 PlayerJoinGameData。public/protected 成员共 10 个：1 方法、7 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerJoinGameData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PlayerJoinGameData。成员构成以属性为主（属性 7/10，方法 1/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerData` | `public PlayerData PlayerData` | 属性 |
| `PlayerId` | `public PlayerId PlayerId` | 属性 |
| `Name` | `public string Name` | 属性 |
| `PartyId` | `public Guid? PartyId` | 属性 |
| `List` | `public Dictionary<string, List<string>>UsedCosmetics` | 属性 |
| `IpAddress` | `public string IpAddress` | 属性 |
| `IsAdmin` | `public bool IsAdmin` | 属性 |
| `PlayerJoinGameData` | `public PlayerJoinGameData()` | 构造函数 |
| `PlayerJoinGameData` | `public PlayerJoinGameData(PlayerData playerData, string name, Guid? partyId, Dictionary<string, List<string>>usedCosmetics, string ipAddress, bool isAdmin)` | 构造函数 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
