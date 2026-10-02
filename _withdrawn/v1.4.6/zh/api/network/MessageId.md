---
title: "MessageId"
description: "MessageId：TaleWorlds.Network 的 public 类，继承 Attribute；公开成员 2 个（方法 0、属性 1、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/MessageId.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageId

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class MessageId : Attribute`
**File:** `TaleWorlds.Network/MessageId.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

MessageId 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/MessageId.cs。它是一个 public 类，实现/继承 Attribute，继承链为 MessageId → Attribute。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MessageId 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 MessageId → Attribute。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 Attribute 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/MessageId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public byte Id` | 属性 |
| `MessageId` | `public MessageId(byte id)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
