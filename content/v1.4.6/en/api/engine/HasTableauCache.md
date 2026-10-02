---
title: "HasTableauCache"
description: "HasTableauCache: a public class in TaleWorlds.Engine, inheriting Attribute; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.Engine/HasTableauCache.cs."
---
# HasTableauCache

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class HasTableauCache : Attribute`
**File:** `TaleWorlds.Engine/HasTableauCache.cs`

## Overview

HasTableauCache lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/HasTableauCache.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is HasTableauCache → Attribute. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HasTableauCache is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain HasTableauCache → Attribute. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/HasTableauCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TableauCacheType` | `public Type TableauCacheType` | property |
| `MaterialCacheIDGetType` | `public Type MaterialCacheIDGetType` | property |
| `HasTableauCache` | `public HasTableauCache(Type tableauCacheType, Type materialCacheIDGetType)` | constructor |
| `CollectTableauCacheTypes` | `public static void CollectTableauCacheTypes()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
