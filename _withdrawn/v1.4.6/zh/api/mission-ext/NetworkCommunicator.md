---
title: "NetworkCommunicator"
description: "NetworkCommunicator：TaleWorlds.MountAndBlade 的 public 类，继承 ICommunicator；公开成员 29 个（方法 7、属性 19、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/NetworkCommunicator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NetworkCommunicator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class NetworkCommunicator : ICommunicator`
**File:** `TaleWorlds.MountAndBlade/NetworkCommunicator.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

NetworkCommunicator 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/NetworkCommunicator.cs。它是一个 public 类（sealed），实现/继承 ICommunicator，继承链为 NetworkCommunicator → ICommunicator。public/protected 成员共 29 个：7 方法、19 属性、3 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NetworkCommunicator 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 NetworkCommunicator → ICommunicator。成员构成以属性为主（属性 19/29，方法 7/29），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/NetworkCommunicator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<PeerComponent>OnPeerComponentAdded;` | 事件 |
| `Action` | `public static event Action<NetworkCommunicator>OnPeerSynchronized;` | 事件 |
| `Action` | `public static event Action<NetworkCommunicator>OnPeerAveragePingUpdated;` | 事件 |
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer` | 属性 |
| `PlayerConnectionInfo` | `public PlayerConnectionInfo PlayerConnectionInfo` | 属性 |
| `QuitFromMission` | `public bool QuitFromMission` | 属性 |
| `SessionKey` | `public int SessionKey` | 属性 |
| `JustReconnecting` | `public bool JustReconnecting` | 属性 |
| `AveragePingInMilliseconds` | `public double AveragePingInMilliseconds` | 属性 |
| `AverageLossPercent` | `public double AverageLossPercent` | 属性 |
| `IsMine` | `public bool IsMine` | 属性 |
| `IsAdmin` | `public bool IsAdmin` | 属性 |
| `Index` | `public int Index` | 属性 |
| `UserName` | `public string UserName` | 属性 |
| `ControlledAgent` | `public Agent ControlledAgent` | 属性 |
| `IsMuted` | `public bool IsMuted` | 属性 |
| `ForcedAvatarIndex` | `public int ForcedAvatarIndex` | 属性 |
| `IsNetworkActive` | `public bool IsNetworkActive` | 属性 |
| `IsConnectionActive` | `public bool IsConnectionActive` | 属性 |
| `IsSynchronized` | `public bool IsSynchronized` | 属性 |
| `IsServerPeer` | `public bool IsServerPeer` | 属性 |
| `ServerPerformanceProblemState` | `public ServerPerformanceState ServerPerformanceProblemState` | 属性 |
| `SetRelevantGameOptions` | `public void SetRelevantGameOptions(bool sendMeBloodEvents, bool sendMeSoundEvents)` | 方法 |
| `GetHost` | `public uint GetHost()` | 方法 |
| `GetReversedHost` | `public uint GetReversedHost()` | 方法 |
| `GetPort` | `public ushort GetPort()` | 方法 |
| `UpdateConnectionInfoForReconnect` | `public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)` | 方法 |
| `UpdateIndexForReconnectingPlayer` | `public void UpdateIndexForReconnectingPlayer(int newIndex)` | 方法 |
| `UpdateForJoiningCustomGame` | `public void UpdateForJoiningCustomGame(bool isAdmin)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ICommunicator](../../core-extra/ICommunicator/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
