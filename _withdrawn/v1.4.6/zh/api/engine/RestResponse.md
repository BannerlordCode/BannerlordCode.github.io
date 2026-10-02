---
title: "RestResponse"
description: "RestResponse：TaleWorlds.Diamond.Rest 的 public 类，继承 RestData；公开成员 11 个（方法 5、属性 5、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/Rest/RestResponse.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RestResponse

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public sealed class RestResponse : RestData`
**File:** `TaleWorlds.Diamond/Rest/RestResponse.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

RestResponse 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/Rest/RestResponse.cs。它是一个 public 类（sealed），实现/继承 RestData，继承链为 RestResponse → RestData。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RestResponse 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.Rest`，继承链 RestResponse → RestData。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/Rest/RestResponse.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Successful` | `public bool Successful` | 属性 |
| `SuccessfulReason` | `public string SuccessfulReason` | 属性 |
| `FunctionResult` | `public RestFunctionResult FunctionResult` | 属性 |
| `byte[]UserCertificate` | `public byte[]UserCertificate` | 属性 |
| `RemainingMessageCount` | `public int RemainingMessageCount` | 属性 |
| `RestResponse` | `public RestResponse()` | 构造函数 |
| `SetSuccessful` | `public void SetSuccessful(bool successful, string successfulReason)` | 方法 |
| `Create` | `public static RestResponse Create(bool successful, string successfulReason)` | 方法 |
| `TryDequeueMessage` | `public RestResponseMessage TryDequeueMessage()` | 方法 |
| `ClearMessageQueue` | `public void ClearMessageQueue()` | 方法 |
| `EnqueueMessage` | `public void EnqueueMessage(RestResponseMessage message)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 RestData](../RestData/)
- [同命名空间 AliveMessage](../AliveMessage/)
- [同命名空间 ClientRestSession](../ClientRestSession/)
- [同命名空间 ConnectMessage](../ConnectMessage/)
- [同命名空间 DisconnectMessage](../DisconnectMessage/)
