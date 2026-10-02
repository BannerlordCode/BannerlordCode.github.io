---
title: "HttpGetRequest"
description: "HttpGetRequest: a public class in TaleWorlds.Library.Http, inheriting IHttpRequestTask; 8 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Http/HttpGetRequest.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HttpGetRequest

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public class HttpGetRequest : IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/HttpGetRequest.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

HttpGetRequest lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Http/HttpGetRequest.cs. It is a public class, implementing/inheriting IHttpRequestTask; the inheritance chain is HttpGetRequest → IHttpRequestTask. It exposes 8 public/protected members: 1 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HttpGetRequest lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.Http`, inheritance chain HttpGetRequest → IHttpRequestTask. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Http/HttpGetRequest.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `State` | `public HttpRequestTaskState State` | property |
| `Successful` | `public bool Successful` | property |
| `ResponseData` | `public string ResponseData` | property |
| `ResponseStatusCode` | `public HttpStatusCode ResponseStatusCode` | property |
| `Exception` | `public Exception Exception` | property |
| `HttpGetRequest` | `public HttpGetRequest(HttpClient httpClient, string address) : this(httpClient, address, new Version(" "))` | constructor |
| `HttpGetRequest` | `public HttpGetRequest(HttpClient httpClient, string address, Version version)` | constructor |
| `Start` | `public void Start()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IHttpRequestTask](../IHttpRequestTask/)
- [same namespace DotNetHttpDriver](../DotNetHttpDriver/)
- [same namespace HttpDriverManager](../HttpDriverManager/)
- [same namespace HttpPostRequest](../HttpPostRequest/)
- [same namespace HttpRequestTaskState](../HttpRequestTaskState/)
