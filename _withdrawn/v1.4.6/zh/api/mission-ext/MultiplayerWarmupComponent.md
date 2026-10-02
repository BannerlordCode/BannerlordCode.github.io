---
title: "MultiplayerWarmupComponent"
description: "MultiplayerWarmupComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 18 个（方法 10、属性 3、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerWarmupComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerWarmupComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MultiplayerWarmupComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 18 个：10 方法、3 属性、2 字段、2 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerWarmupComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerWarmupComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 10/18，属性 3/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalWarmupDuration` | `public static float TotalWarmupDuration` | 属性 |
| `OnWarmupEnding;` | `public event Action OnWarmupEnding;` | 事件 |
| `OnWarmupEnded;` | `public event Action OnWarmupEnded;` | 事件 |
| `IsInWarmup` | `public bool IsInWarmup` | 属性 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | 方法 |
| `CheckForWarmupProgressEnd` | `public bool CheckForWarmupProgressEnd()` | 方法 |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | 方法 |
| `EndWarmupProgress` | `public void EndWarmupProgress()` | 方法 |
| `CanMatchStartAfterWarmup` | `public bool CanMatchStartAfterWarmup()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `CommandEndWarmup` | `public static string CommandEndWarmup(List<string>strings)` | 方法 |
| `RespawnPeriodInWarmup` | `public const int RespawnPeriodInWarmup` | 字段 |
| `WarmupEndWaitTime` | `public const int WarmupEndWaitTime` | 字段 |
| `WarmupStates` | `public enum WarmupStates` | 属性 |
| `WarmupStates` | `public enum WarmupStates` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
