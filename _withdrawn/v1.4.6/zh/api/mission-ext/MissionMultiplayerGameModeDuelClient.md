---
title: "MissionMultiplayerGameModeDuelClient"
description: "MissionMultiplayerGameModeDuelClient：TaleWorlds.MountAndBlade 的 public 类，继承 MissionMultiplayerGameModeBaseClient；公开成员 15 个（方法 7、属性 8、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerGameModeDuelClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerGameModeDuelClient : MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionMultiplayerGameModeDuelClient 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs。它是一个 public 类，实现/继承 MissionMultiplayerGameModeBaseClient，继承链为 MissionMultiplayerGameModeDuelClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 15 个：7 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerGameModeDuelClient 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionMultiplayerGameModeDuelClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以属性为主（属性 8/15，方法 7/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | 属性 |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | 属性 |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | 属性 |
| `IsGameModeUsingAllowCultureChange` | `public override bool IsGameModeUsingAllowCultureChange` | 属性 |
| `IsGameModeUsingAllowTroopChange` | `public override bool IsGameModeUsingAllowTroopChange` | 属性 |
| `GameType` | `public override MultiplayerGameType GameType` | 属性 |
| `IsInDuel` | `public bool IsInDuel` | 属性 |
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative` | 属性 |
| `GetGoldAmount` | `public override int GetGoldAmount()` | 方法 |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `CanRequestCultureChange` | `public override bool CanRequestCultureChange()` | 方法 |
| `CanRequestTroopChange` | `public override bool CanRequestTroopChange()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
