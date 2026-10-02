---
title: "DummyCommunicator"
description: "DummyCommunicator：TaleWorlds.Core 的 public 类，继承 ICommunicator；公开成员 10 个（方法 5、属性 5、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/DummyCommunicator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DummyCommunicator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class DummyCommunicator : ICommunicator`
**File:** `TaleWorlds.Core/DummyCommunicator.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

DummyCommunicator 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/DummyCommunicator.cs。它是一个 public 类，实现/继承 ICommunicator，继承链为 DummyCommunicator → ICommunicator。public/protected 成员共 10 个：5 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DummyCommunicator 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 DummyCommunicator → ICommunicator。成员构成以方法为主（方法 5/10，属性 5/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/DummyCommunicator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer` | 属性 |
| `OnSynchronizeComponentTo` | `public void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component)` | 方法 |
| `OnAddComponent` | `public void OnAddComponent(PeerComponent component)` | 方法 |
| `OnRemoveComponent` | `public void OnRemoveComponent(PeerComponent component)` | 方法 |
| `IsNetworkActive` | `public bool IsNetworkActive` | 属性 |
| `IsConnectionActive` | `public bool IsConnectionActive` | 属性 |
| `IsServerPeer` | `public bool IsServerPeer` | 属性 |
| `IsSynchronized` | `public bool IsSynchronized` | 属性 |
| `CreateAsServer` | `public static DummyCommunicator CreateAsServer(int index, string name)` | 方法 |
| `CreateAsClient` | `public static DummyCommunicator CreateAsClient(string name, int index)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ICommunicator](../ICommunicator/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
