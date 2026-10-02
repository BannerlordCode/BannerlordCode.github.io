---
title: "IHttpRequestTask"
description: "IHttpRequestTask：TaleWorlds.Library 的 public 接口；公开成员 5 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.Library/Http/IHttpRequestTask.cs。"
---
# IHttpRequestTask

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/IHttpRequestTask.cs`

## 概述

IHttpRequestTask 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Http/IHttpRequestTask.cs。它是一个 public 接口，继承链为 IHttpRequestTask。public/protected 成员共 5 个：1 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IHttpRequestTask 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.Http），继承链 IHttpRequestTask。成员构成以属性为主（属性 4/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Http/IHttpRequestTask.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `HttpRequestTaskState State` | 属性 |
| `Successful` | `bool Successful` | 属性 |
| `ResponseData` | `string ResponseData` | 属性 |
| `Exception` | `Exception Exception` | 属性 |
| `Start` | `void Start();` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DotNetHttpDriver](../DotNetHttpDriver)
- [同命名空间 HttpDriverManager](../HttpDriverManager)
- [同命名空间 HttpGetRequest](../HttpGetRequest)
- [同命名空间 HttpPostRequest](../HttpPostRequest)
