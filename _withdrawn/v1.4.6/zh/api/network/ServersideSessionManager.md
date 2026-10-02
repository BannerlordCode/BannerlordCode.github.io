---
title: "ServersideSessionManager"
description: "ServersideSessionManager：TaleWorlds.Network 的 public 类；公开成员 9 个（方法 5、属性 2、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/ServersideSessionManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServersideSessionManager

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class ServersideSessionManager`
**File:** `TaleWorlds.Network/ServersideSessionManager.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

ServersideSessionManager 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/ServersideSessionManager.cs。它是一个 public 类（abstract），继承链为 ServersideSessionManager。public/protected 成员共 9 个：5 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ServersideSessionManager 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 ServersideSessionManager。成员构成以方法为主（方法 5/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/ServersideSessionManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PeerAliveCoeff` | `public float PeerAliveCoeff` | 属性 |
| `ServersideSessionManager` | `protected ServersideSessionManager()` | 构造函数 |
| `Activate` | `public void Activate(ushort port, ServersideSessionManager.ThreadType threadType = ServersideSessionManager.ThreadType.Single, int readWriteThreadCount = 1)` | 方法 |
| `GetPeer` | `public ServersideSession GetPeer(int peerIndex)` | 方法 |
| `Tick` | `public virtual void Tick()` | 方法 |
| `OnNewConnection` | `protected abstract ServersideSession OnNewConnection();` | 方法 |
| `OnRemoveConnection` | `protected abstract void OnRemoveConnection(ServersideSession peer);` | 方法 |
| `ThreadType` | `public enum ThreadType` | 属性 |
| `ThreadType` | `public enum ThreadType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
