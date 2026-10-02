---
title: "MessageServiceConnection"
description: "MessageServiceConnection：TaleWorlds.Network 的 public 类；公开成员 15 个（方法 9、属性 1、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/MessageServiceConnection.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageServiceConnection

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class MessageServiceConnection`
**File:** `TaleWorlds.Network/MessageServiceConnection.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

MessageServiceConnection 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/MessageServiceConnection.cs。它是一个 public 类（abstract），继承链为 MessageServiceConnection。public/protected 成员共 15 个：9 方法、1 属性、2 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MessageServiceConnection 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 MessageServiceConnection。成员构成以方法为主（方法 9/15，属性 1/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/MessageServiceConnection.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MessageServiceConnection` | `public MessageServiceConnection()` | 构造函数 |
| `SendAsync` | `public abstract Task SendAsync(string text);` | 方法 |
| `Init` | `public abstract void Init(string address, string token);` | 方法 |
| `Address` | `public string Address` | 属性 |
| `Closed;` | `public event MessageServiceConnection.ClosedDelegate Closed;` | 事件 |
| `StateChanged;` | `public event MessageServiceConnection.StateChangedDelegate StateChanged;` | 事件 |
| `RegisterProxyClient` | `public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient);` | 方法 |
| `StartAsync` | `public abstract Task StartAsync();` | 方法 |
| `StopAsync` | `public abstract Task StopAsync();` | 方法 |
| `InvokeClosed` | `protected void InvokeClosed()` | 方法 |
| `InvokeStateChanged` | `protected void InvokeStateChanged(ConnectionState oldState, ConnectionState newState)` | 方法 |
| `ClosedDelegate` | `public delegate Task ClosedDelegate();` | 方法 |
| `StateChangedDelegate` | `public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState);` | 方法 |
| `ClosedDelegate` | `public delegate Task ClosedDelegate()` | 嵌套类型 |
| `StateChangedDelegate` | `public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
