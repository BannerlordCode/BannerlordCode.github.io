---
title: "MessageInfo"
description: "MessageInfo：TaleWorlds.Network 的 public 类；公开成员 10 个（方法 2、属性 7、字段 1）。canonical 桶 network。源文件 TaleWorlds.Network/MessageInfo.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageInfo

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class MessageInfo`
**File:** `TaleWorlds.Network/MessageInfo.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

MessageInfo 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/MessageInfo.cs。它是一个 public 类，继承链为 MessageInfo。public/protected 成员共 10 个：2 方法、7 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MessageInfo 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 MessageInfo。成员构成以属性为主（属性 7/10，方法 2/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/MessageInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SourceIPAddress` | `public string SourceIPAddress` | 属性 |
| `SourceClientId` | `public Guid SourceClientId` | 属性 |
| `SourceUserName` | `public string SourceUserName` | 属性 |
| `SourcePlatform` | `public string SourcePlatform` | 属性 |
| `SourcePlatformId` | `public string SourcePlatformId` | 属性 |
| `DestinationPostBox` | `public string DestinationPostBox` | 属性 |
| `DestinationClientId` | `public Guid DestinationClientId` | 属性 |
| `WriteTo` | `public void WriteTo(Stream stream, bool fromServer)` | 方法 |
| `ReadFrom` | `public static MessageInfo ReadFrom(Stream stream, bool fromServer)` | 方法 |
| `DestinationIsPostBox` | `public bool DestinationIsPostBox` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
