---
title: "IHttpRequestTask"
description: "IHttpRequestTask: a public interface in TaleWorlds.Library.Http; 5 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Http/IHttpRequestTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IHttpRequestTask

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/IHttpRequestTask.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

IHttpRequestTask lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Http/IHttpRequestTask.cs. It is a public interface; the inheritance chain is IHttpRequestTask. It exposes 5 public/protected members: 1 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IHttpRequestTask lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.Http`, inheritance chain IHttpRequestTask. The surface is property-led (properties 4/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Http/IHttpRequestTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `State` | `HttpRequestTaskState State` | property |
| `Successful` | `bool Successful` | property |
| `ResponseData` | `string ResponseData` | property |
| `Exception` | `Exception Exception` | property |
| `Start` | `void Start();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DotNetHttpDriver](../DotNetHttpDriver/)
- [same namespace HttpDriverManager](../HttpDriverManager/)
- [same namespace HttpGetRequest](../HttpGetRequest/)
- [same namespace HttpPostRequest](../HttpPostRequest/)
