---
title: "AccessObjectResult"
description: "AccessObjectResult：TaleWorlds.Diamond 的 public 类；公开成员 5 个（方法 2、属性 3、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/AccessObjectResult.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AccessObjectResult

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class AccessObjectResult`
**File:** `TaleWorlds.Diamond/AccessObjectResult.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

AccessObjectResult 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/AccessObjectResult.cs。它是一个 public 类，继承链为 AccessObjectResult。public/protected 成员共 5 个：2 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AccessObjectResult 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 AccessObjectResult。成员构成以属性为主（属性 3/5，方法 2/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/AccessObjectResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AccessObject` | `public AccessObject AccessObject` | 属性 |
| `Success` | `public bool Success` | 属性 |
| `FailReason` | `public TextObject FailReason` | 属性 |
| `CreateSuccess` | `public static AccessObjectResult CreateSuccess(AccessObject accessObject)` | 方法 |
| `CreateFailed` | `public static AccessObjectResult CreateFailed(TextObject failReason)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AesHelper](../AesHelper/)
- [同命名空间 Client](../Client__1/)
