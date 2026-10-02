---
title: "IHttpDriver"
description: "IHttpDriver: a public interface in TaleWorlds.Library; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/Http/IHttpDriver.cs."
---
# IHttpDriver

**Namespace:** `TaleWorlds.Library.Http`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IHttpDriver`
**File:** `TaleWorlds.Library/Http/IHttpDriver.cs`

## Overview

IHttpDriver lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Http/IHttpDriver.cs. It is a public interface; the inheritance chain is IHttpDriver. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IHttpDriver is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.Http) the module directory; inheritance chain IHttpDriver. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Http/IHttpDriver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Task` | `Task<string>HttpGetString(string url, bool withUserToken);` | method |
| `Task` | `Task<string>HttpPostString(string url, string postData, string mediaType, bool withUserToken);` | method |
| `Task` | `Task<byte[]>HttpDownloadData(string url);` | method |
| `CreateHttpPostRequestTask` | `IHttpRequestTask CreateHttpPostRequestTask(string address, string postData, bool withUserToken);` | method |
| `CreateHttpGetRequestTask` | `IHttpRequestTask CreateHttpGetRequestTask(string address, bool withUserToken);` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DotNetHttpDriver](../DotNetHttpDriver)
- [same namespace HttpDriverManager](../HttpDriverManager)
- [same namespace HttpGetRequest](../HttpGetRequest)
- [same namespace HttpPostRequest](../HttpPostRequest)
