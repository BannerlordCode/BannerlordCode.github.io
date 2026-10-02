---
title: "PlayerBattleInfo"
description: "PlayerBattleInfo：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 18 个（方法 5、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerBattleInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerBattleInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PlayerBattleInfo 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs。它是一个 public 类，继承链为 PlayerBattleInfo。public/protected 成员共 18 个：5 方法、9 属性、3 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerBattleInfo 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PlayerBattleInfo。成员构成以属性为主（属性 9/18，方法 5/18），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | 属性 |
| `Name` | `public string Name` | 属性 |
| `TeamNo` | `public int TeamNo` | 属性 |
| `Fled` | `public bool Fled` | 属性 |
| `Disconnected` | `public bool Disconnected` | 属性 |
| `JoinType` | `public BattleJoinType JoinType` | 属性 |
| `PeerIndex` | `public int PeerIndex` | 属性 |
| `CurrentState` | `public PlayerBattleInfo.State CurrentState` | 属性 |
| `PlayerBattleInfo` | `public PlayerBattleInfo()` | 构造函数 |
| `PlayerBattleInfo` | `public PlayerBattleInfo(PlayerId playerId, string name, int teamNo)` | 构造函数 |
| `PlayerBattleInfo` | `public PlayerBattleInfo(PlayerId playerId, string name, int teamNo, int peerIndex, PlayerBattleInfo.State state)` | 构造函数 |
| `Flee` | `public void Flee()` | 方法 |
| `Disconnect` | `public void Disconnect()` | 方法 |
| `Initialize` | `public void Initialize(int peerIndex)` | 方法 |
| `RejoinBattle` | `public void RejoinBattle(int teamNo)` | 方法 |
| `Clone` | `public PlayerBattleInfo Clone()` | 方法 |
| `State` | `public enum State` | 属性 |
| `State` | `public enum State` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
