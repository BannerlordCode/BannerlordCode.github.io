---
title: "HttpPostRequest"
description: "HttpPostRequest: a public class in TaleWorlds.Library, inheriting IHttpRequestTask; 7 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.Library/Http/HttpPostRequest.cs."
---
# HttpPostRequest

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public class HttpPostRequest : IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/HttpPostRequest.cs`

## Overview

HttpPostRequest lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Http/HttpPostRequest.cs. It is a public class, implementing/inheriting IHttpRequestTask; the inheritance chain is HttpPostRequest → IHttpRequestTask. It exposes 7 public/protected members: 1 methods, 4 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HttpPostRequest is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.Http) the module directory; inheritance chain HttpPostRequest → IHttpRequestTask. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Http/HttpPostRequest.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public HttpRequestTaskState State` | property |
| `Successful` | `public bool Successful` | property |
| `ResponseData` | `public string ResponseData` | property |
| `Exception` | `public Exception Exception` | property |
| `HttpPostRequest` | `public HttpPostRequest(HttpClient httpClient, string address, string postData) : this(httpClient, address, postData, new Version(" "))` | constructor |
| `HttpPostRequest` | `public HttpPostRequest(HttpClient httpClient, string address, string postData, Version version)` | constructor |
| `Start` | `public void Start()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IHttpRequestTask](../IHttpRequestTask)
- [same namespace DotNetHttpDriver](../DotNetHttpDriver)
- [same namespace HttpDriverManager](../HttpDriverManager)
- [same namespace HttpGetRequest](../HttpGetRequest)
- [same namespace HttpRequestTaskState](../HttpRequestTaskState)
