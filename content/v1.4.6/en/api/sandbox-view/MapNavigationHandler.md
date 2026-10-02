---
title: "MapNavigationHandler"
description: "MapNavigationHandler: a public class in SandBox.View, inheriting INavigationHandler; 7 exposed members (4 methods, 2 properties, 0 fields). Source: SandBox.View/Map/Navigation/MapNavigationHandler.cs."
---
# MapNavigationHandler

**Namespace:** `SandBox.View.Map.Navigation`
**Module:** `SandBox.View`
**Type:** `public class MapNavigationHandler : INavigationHandler`
**File:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`

## Overview

MapNavigationHandler lives in the SandBox.View module, source file SandBox.View/Map/Navigation/MapNavigationHandler.cs. It is a public class, implementing/inheriting INavigationHandler; the inheritance chain is MapNavigationHandler → INavigationHandler. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationHandler is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Navigation) the module directory; inheritance chain MapNavigationHandler → INavigationHandler. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. INavigationHandler on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/MapNavigationHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `INavigationElement[]GetElements` | `public INavigationElement[]GetElements()` | method |
| `IsNavigationLocked` | `public bool IsNavigationLocked` | property |
| `IsEscapeMenuActive` | `public bool IsEscapeMenuActive` | property |
| `MapNavigationHandler` | `public MapNavigationHandler()` | constructor |
| `IsAnyElementActive` | `public bool IsAnyElementActive()` | method |
| `INavigationElement[]OnCreateElements` | `protected virtual INavigationElement[]OnCreateElements()` | method |
| `GetElement` | `public INavigationElement GetElement(string id)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapNavigationElementBase](../MapNavigationElementBase)
- [same namespace MapNavigationHelper](../MapNavigationHelper)
