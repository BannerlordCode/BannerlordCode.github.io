---
title: "HttpGetRequest"
description: "HttpGetRequest：TaleWorlds.Library.Http 的 public 类，继承 IHttpRequestTask；公开成员 8 个（方法 1、属性 5、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Http/HttpGetRequest.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HttpGetRequest

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public class HttpGetRequest : IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/HttpGetRequest.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

HttpGetRequest 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Http/HttpGetRequest.cs。它是一个 public 类，实现/继承 IHttpRequestTask，继承链为 HttpGetRequest → IHttpRequestTask。public/protected 成员共 8 个：1 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HttpGetRequest 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library.Http`，继承链 HttpGetRequest → IHttpRequestTask。成员构成以属性为主（属性 5/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Http/HttpGetRequest.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public HttpRequestTaskState State` | 属性 |
| `Successful` | `public bool Successful` | 属性 |
| `ResponseData` | `public string ResponseData` | 属性 |
| `ResponseStatusCode` | `public HttpStatusCode ResponseStatusCode` | 属性 |
| `Exception` | `public Exception Exception` | 属性 |
| `HttpGetRequest` | `public HttpGetRequest(HttpClient httpClient, string address) : this(httpClient, address, new Version(" "))` | 构造函数 |
| `HttpGetRequest` | `public HttpGetRequest(HttpClient httpClient, string address, Version version)` | 构造函数 |
| `Start` | `public void Start()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IHttpRequestTask](../IHttpRequestTask/)
- [同命名空间 DotNetHttpDriver](../DotNetHttpDriver/)
- [同命名空间 HttpDriverManager](../HttpDriverManager/)
- [同命名空间 HttpPostRequest](../HttpPostRequest/)
- [同命名空间 HttpRequestTaskState](../HttpRequestTaskState/)
