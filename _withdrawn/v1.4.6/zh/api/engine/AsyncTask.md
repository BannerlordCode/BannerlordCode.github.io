---
title: "AsyncTask"
description: "AsyncTask：TaleWorlds.Engine 的 public 类，继承 NativeObject、ITask；公开成员 1 个（方法 1、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/AsyncTask.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AsyncTask

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class AsyncTask : NativeObject, ITask`
**File:** `TaleWorlds.Engine/AsyncTask.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

AsyncTask 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/AsyncTask.cs。它是一个 public 类（sealed），实现/继承 NativeObject、ITask，继承链为 AsyncTask → NativeObject。public/protected 成员共 1 个：1 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AsyncTask 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 AsyncTask → NativeObject。成员构成以方法为主（方法 1/1，属性 0/1），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/AsyncTask.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateWithDelegate` | `public static AsyncTask CreateWithDelegate(ManagedDelegate function, bool isBackground)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../../core-extra/NativeObject/)
- [基类/接口 ITask](../../core-extra/ITask/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 BillboardType](../BillboardType/)
- [同命名空间 BodyFlags](../BodyFlags/)
