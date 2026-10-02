---
title: "RestObjectResponseMessage"
description: "RestObjectResponseMessage：TaleWorlds.Diamond.Rest 的 public 类，继承 RestResponseMessage；公开成员 3 个（方法 1、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/Rest/RestObjectResponseMessage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RestObjectResponseMessage

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class RestObjectResponseMessage : RestResponseMessage`
**File:** `TaleWorlds.Diamond/Rest/RestObjectResponseMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

RestObjectResponseMessage 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/Rest/RestObjectResponseMessage.cs。它是一个 public 类，实现/继承 RestResponseMessage，继承链为 RestObjectResponseMessage → RestResponseMessage → RestData。public/protected 成员共 3 个：1 方法、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RestObjectResponseMessage 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.Rest`，继承链 RestObjectResponseMessage → RestResponseMessage → RestData。成员构成以方法为主（方法 1/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/Rest/RestObjectResponseMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMessage` | `public override Message GetMessage()` | 方法 |
| `RestObjectResponseMessage` | `public RestObjectResponseMessage()` | 构造函数 |
| `RestObjectResponseMessage` | `public RestObjectResponseMessage(Message message)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 RestResponseMessage](../RestResponseMessage/)
- [同命名空间 AliveMessage](../AliveMessage/)
- [同命名空间 ClientRestSession](../ClientRestSession/)
- [同命名空间 ConnectMessage](../ConnectMessage/)
- [同命名空间 DisconnectMessage](../DisconnectMessage/)
