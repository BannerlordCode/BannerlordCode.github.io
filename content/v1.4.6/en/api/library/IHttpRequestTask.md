---
title: "IHttpRequestTask"
description: "IHttpRequestTask: a public interface in TaleWorlds.Library; 5 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.Library/Http/IHttpRequestTask.cs."
---
# IHttpRequestTask

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/IHttpRequestTask.cs`

## Overview

IHttpRequestTask lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Http/IHttpRequestTask.cs. It is a public interface; the inheritance chain is IHttpRequestTask. It exposes 5 public/protected members: 1 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IHttpRequestTask is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.Http) the module directory; inheritance chain IHttpRequestTask. The surface is property-led (properties 4/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Http/IHttpRequestTask.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `HttpRequestTaskState State` | property |
| `Successful` | `bool Successful` | property |
| `ResponseData` | `string ResponseData` | property |
| `Exception` | `Exception Exception` | property |
| `Start` | `void Start();` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DotNetHttpDriver](../DotNetHttpDriver)
- [same namespace HttpDriverManager](../HttpDriverManager)
- [same namespace HttpGetRequest](../HttpGetRequest)
- [same namespace HttpPostRequest](../HttpPostRequest)
