---
title: "HandlerResult"
description: "HandlerResult：TaleWorlds.Diamond 的 public 类；公开成员 7 个（方法 3、属性 3、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/HandlerResult.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HandlerResult

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class HandlerResult`
**File:** `TaleWorlds.Diamond/HandlerResult.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

HandlerResult 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/HandlerResult.cs。它是一个 public 类，继承链为 HandlerResult。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HandlerResult 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 HandlerResult。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/HandlerResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSuccessful` | `public bool IsSuccessful` | 属性 |
| `Error` | `public string Error` | 属性 |
| `NextMessage` | `public Message NextMessage` | 属性 |
| `HandlerResult` | `protected HandlerResult(bool isSuccessful, string error = null, Message followUp = null)` | 构造函数 |
| `CreateSuccessful` | `public static HandlerResult CreateSuccessful()` | 方法 |
| `CreateSuccessful` | `public static HandlerResult CreateSuccessful(Message nextMessage)` | 方法 |
| `CreateFailed` | `public static HandlerResult CreateFailed(string error)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AccessObjectResult](../AccessObjectResult/)
- [同命名空间 AesHelper](../AesHelper/)
