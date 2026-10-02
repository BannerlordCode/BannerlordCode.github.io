---
title: "SocketMessage"
description: "SocketMessage：TaleWorlds.Diamond.Socket 的 public 类，继承 MessageContract；公开成员 5 个（方法 2、属性 1、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/Socket/SocketMessage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SocketMessage

**Namespace:** `TaleWorlds.Diamond.Socket`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class SocketMessage : MessageContract`
**File:** `TaleWorlds.Diamond/Socket/SocketMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

SocketMessage 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/Socket/SocketMessage.cs。它是一个 public 类，实现/继承 MessageContract，继承链为 SocketMessage → MessageContract。public/protected 成员共 5 个：2 方法、1 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SocketMessage 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.Socket`，继承链 SocketMessage → MessageContract。成员构成以方法为主（方法 2/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/Socket/SocketMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Message` | `public Message Message` | 属性 |
| `SocketMessage` | `public SocketMessage()` | 构造函数 |
| `SocketMessage` | `public SocketMessage(Message message)` | 构造函数 |
| `SerializeToNetworkMessage` | `public override void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)` | 方法 |
| `DeserializeFromNetworkMessage` | `public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MessageContract](../../network/MessageContract/)
- [同命名空间 ClientSocketSession](../ClientSocketSession/)
