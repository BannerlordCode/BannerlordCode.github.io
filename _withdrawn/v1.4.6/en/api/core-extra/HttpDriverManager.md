---
title: "HttpDriverManager"
description: "HttpDriverManager: a public class in TaleWorlds.Library.Http; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Http/HttpDriverManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HttpDriverManager

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public static class HttpDriverManager`
**File:** `TaleWorlds.Library/Http/HttpDriverManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

HttpDriverManager lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Http/HttpDriverManager.cs. It is a public class; the inheritance chain is HttpDriverManager. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HttpDriverManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.Http`, inheritance chain HttpDriverManager. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Http/HttpDriverManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AddHttpDriver` | `public static void AddHttpDriver(string name, IHttpDriver driver)` | method |
| `SetDefault` | `public static void SetDefault(string name)` | method |
| `GetHttpDriver` | `public static IHttpDriver GetHttpDriver(string name)` | method |
| `GetDefaultHttpDriver` | `public static IHttpDriver GetDefaultHttpDriver()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DotNetHttpDriver](../DotNetHttpDriver/)
- [same namespace HttpGetRequest](../HttpGetRequest/)
- [same namespace HttpPostRequest](../HttpPostRequest/)
- [same namespace HttpRequestTaskState](../HttpRequestTaskState/)
