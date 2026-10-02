---
title: "ICache"
description: "ICache: a public interface in TaleWorlds.Library; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ICache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICache

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface ICache`
**File:** `TaleWorlds.Library/ICache.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ICache lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ICache.cs. It is a public interface; the inheritance chain is ICache. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICache lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ICache. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ICache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Task` | `Task<TItem>GetOrUpdate<TItem>(string key, Func<Task<TItem>>factory, TimeSpan absoluteExpirationRelativeToNow, bool getFromFactoryIfCacheFails = true);` | method |
| `SetString` | `Task SetString(string key, string value, TimeSpan? absoluteExpirationRelativeToNow);` | method |
| `Task` | `Task<string>GetString(string key);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
