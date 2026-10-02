---
title: "ServersideSession"
description: "ServersideSession：TaleWorlds.Network 的 public 类，继承 NetworkSession；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/ServersideSession.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServersideSession

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class ServersideSession : NetworkSession`
**File:** `TaleWorlds.Network/ServersideSession.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

ServersideSession 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/ServersideSession.cs。它是一个 public 类（abstract），实现/继承 NetworkSession，继承链为 ServersideSession → NetworkSession。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ServersideSession 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 ServersideSession → NetworkSession。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/ServersideSession.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Index` | `public int Index` | 属性 |
| `ServersideSession` | `protected ServersideSession(ServersideSessionManager server)` | 构造函数 |
| `OnDisconnected` | `protected internal override void OnDisconnected()` | 方法 |
| `OnConnected` | `protected internal override void OnConnected()` | 方法 |
| `OnSocketSet` | `protected internal override void OnSocketSet()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NetworkSession](../NetworkSession/)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
