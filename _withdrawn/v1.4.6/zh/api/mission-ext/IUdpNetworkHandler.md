---
title: "IUdpNetworkHandler"
description: "IUdpNetworkHandler：TaleWorlds.MountAndBlade 的 public 接口；公开成员 13 个（方法 13、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IUdpNetworkHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IUdpNetworkHandler 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs。它是一个 public 接口，继承链为 IUdpNetworkHandler。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IUdpNetworkHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IUdpNetworkHandler。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnUdpNetworkHandlerClose` | `void OnUdpNetworkHandlerClose();` | 方法 |
| `OnUdpNetworkHandlerTick` | `void OnUdpNetworkHandlerTick(float dt);` | 方法 |
| `HandleNewClientConnect` | `void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo);` | 方法 |
| `HandleEarlyNewClientAfterLoadingFinished` | `void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer);` | 方法 |
| `HandleNewClientAfterLoadingFinished` | `void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer);` | 方法 |
| `HandleLateNewClientAfterLoadingFinished` | `void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer);` | 方法 |
| `HandleNewClientAfterSynchronized` | `void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer);` | 方法 |
| `HandleLateNewClientAfterSynchronized` | `void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer);` | 方法 |
| `HandleEarlyPlayerDisconnect` | `void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer);` | 方法 |
| `HandlePlayerDisconnect` | `void HandlePlayerDisconnect(NetworkCommunicator networkPeer);` | 方法 |
| `OnPlayerDisconnectedFromServer` | `void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer);` | 方法 |
| `OnDisconnectedFromServer` | `void OnDisconnectedFromServer();` | 方法 |
| `OnEveryoneUnSynchronized` | `void OnEveryoneUnSynchronized();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
