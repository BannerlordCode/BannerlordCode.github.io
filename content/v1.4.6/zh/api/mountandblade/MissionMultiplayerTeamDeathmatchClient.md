---
title: "MissionMultiplayerTeamDeathmatchClient"
description: "MissionMultiplayerTeamDeathmatchClient：TaleWorlds.MountAndBlade 的 public 类，继承 MissionMultiplayerGameModeBaseClient；公开成员 11 个（方法 6、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs。"
---
# MissionMultiplayerTeamDeathmatchClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerTeamDeathmatchClient : MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs`

## 概述

MissionMultiplayerTeamDeathmatchClient 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs。它是一个 public 类，实现/继承 MissionMultiplayerGameModeBaseClient，继承链为 MissionMultiplayerTeamDeathmatchClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 11 个：6 方法、4 属性、1 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerTeamDeathmatchClient 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionMultiplayerTeamDeathmatchClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 6/11，属性 4/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<GoldGain>OnGoldGainEvent;` | 事件 |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | 属性 |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | 属性 |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | 属性 |
| `GameType` | `public override MultiplayerGameType GameType` | 属性 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `GetGoldAmount` | `public override int GetGoldAmount()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
