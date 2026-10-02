---
title: "RestObjectRequestMessage"
description: "RestObjectRequestMessage：TaleWorlds.Diamond.Rest 的 public 类，继承 RestRequestMessage；公开成员 5 个（方法 0、属性 3、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RestObjectRequestMessage

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class RestObjectRequestMessage : RestRequestMessage`
**File:** `TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

RestObjectRequestMessage 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs。它是一个 public 类，实现/继承 RestRequestMessage，继承链为 RestObjectRequestMessage → RestRequestMessage → RestData。public/protected 成员共 5 个：3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RestObjectRequestMessage 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.Rest`，继承链 RestObjectRequestMessage → RestRequestMessage → RestData。成员构成以属性为主（属性 3/5，方法 0/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MessageType` | `public MessageType MessageType` | 属性 |
| `SessionCredentials` | `public SessionCredentials SessionCredentials` | 属性 |
| `Message` | `public Message Message` | 属性 |
| `RestObjectRequestMessage` | `public RestObjectRequestMessage()` | 构造函数 |
| `RestObjectRequestMessage` | `public RestObjectRequestMessage(SessionCredentials sessionCredentials, Message message, MessageType messageType)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 RestRequestMessage](../RestRequestMessage/)
- [同命名空间 AliveMessage](../AliveMessage/)
- [同命名空间 ClientRestSession](../ClientRestSession/)
- [同命名空间 ConnectMessage](../ConnectMessage/)
- [同命名空间 DisconnectMessage](../DisconnectMessage/)
