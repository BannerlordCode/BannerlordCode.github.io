---
title: "ICache"
description: "ICache: a public interface in TaleWorlds.Library; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/ICache.cs."
---
# ICache

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface ICache`
**File:** `TaleWorlds.Library/ICache.cs`

## Overview

ICache lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ICache.cs. It is a public interface; the inheritance chain is ICache. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICache is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ICache. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ICache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Task` | `Task<TItem>GetOrUpdate<TItem>(string key, Func<Task<TItem>>factory, TimeSpan absoluteExpirationRelativeToNow, bool getFromFactoryIfCacheFails = true);` | method |
| `SetString` | `Task SetString(string key, string value, TimeSpan? absoluteExpirationRelativeToNow);` | method |
| `Task` | `Task<string>GetString(string key);` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
