---
title: "DuelMissionRepresentative"
description: "DuelMissionRepresentative：TaleWorlds.MountAndBlade.MissionRepresentatives 的 public 类，继承 MissionRepresentativeBase；公开成员 15 个（方法 11、属性 3、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DuelMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DuelMissionRepresentative 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs。它是一个 public 类，实现/继承 MissionRepresentativeBase，继承链为 DuelMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent。public/protected 成员共 15 个：11 方法、3 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DuelMissionRepresentative 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives`，继承链 DuelMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent。成员构成以方法为主（方法 11/15，属性 3/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Bounty` | `public int Bounty` | 属性 |
| `Score` | `public int Score` | 属性 |
| `NumberOfWins` | `public int NumberOfWins` | 属性 |
| `Initialize` | `public override void Initialize()` | 方法 |
| `AddRemoveMessageHandlers` | `public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)` | 方法 |
| `OnInteraction` | `public void OnInteraction()` | 方法 |
| `DuelRequested` | `public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)` | 方法 |
| `CheckHasRequestFromAndRemoveRequestIfNeeded` | `public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)` | 方法 |
| `OnDuelPreparation` | `public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)` | 方法 |
| `OnObjectFocused` | `public void OnObjectFocused(IFocusable focusedObject)` | 方法 |
| `OnObjectFocusLost` | `public void OnObjectFocusLost()` | 方法 |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | 方法 |
| `ResetBountyAndNumberOfWins` | `public void ResetBountyAndNumberOfWins()` | 方法 |
| `OnDuelWon` | `public void OnDuelWon(float gainedScore)` | 方法 |
| `DuelPrepTime` | `public const int DuelPrepTime` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionRepresentativeBase](../MissionRepresentativeBase/)
- [同命名空间 FFAMissionRepresentative](../FFAMissionRepresentative/)
- [同命名空间 FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative/)
- [同命名空间 SiegeMissionRepresentative](../SiegeMissionRepresentative/)
- [同命名空间 TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative/)
