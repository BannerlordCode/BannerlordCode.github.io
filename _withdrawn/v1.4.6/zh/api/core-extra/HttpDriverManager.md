---
title: "HttpDriverManager"
description: "HttpDriverManager：TaleWorlds.Library.Http 的 public 类；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Http/HttpDriverManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HttpDriverManager

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public static class HttpDriverManager`
**File:** `TaleWorlds.Library/Http/HttpDriverManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

HttpDriverManager 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Http/HttpDriverManager.cs。它是一个 public 类，继承链为 HttpDriverManager。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HttpDriverManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library.Http`，继承链 HttpDriverManager。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Http/HttpDriverManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddHttpDriver` | `public static void AddHttpDriver(string name, IHttpDriver driver)` | 方法 |
| `SetDefault` | `public static void SetDefault(string name)` | 方法 |
| `GetHttpDriver` | `public static IHttpDriver GetHttpDriver(string name)` | 方法 |
| `GetDefaultHttpDriver` | `public static IHttpDriver GetDefaultHttpDriver()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DotNetHttpDriver](../DotNetHttpDriver/)
- [同命名空间 HttpGetRequest](../HttpGetRequest/)
- [同命名空间 HttpPostRequest](../HttpPostRequest/)
- [同命名空间 HttpRequestTaskState](../HttpRequestTaskState/)
