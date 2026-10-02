---
title: "MapNavigationHandler"
description: "MapNavigationHandler: a public class in SandBox.View.Map.Navigation, inheriting INavigationHandler; 7 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/Navigation/MapNavigationHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNavigationHandler

**Namespace:** `SandBox.View.Map.Navigation`
**Module:** `SandBox.View`
**Type:** `public class MapNavigationHandler : INavigationHandler`
**File:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapNavigationHandler lives in the SandBox.View module, source file SandBox.View/Map/Navigation/MapNavigationHandler.cs. It is a public class, implementing/inheriting INavigationHandler; the inheritance chain is MapNavigationHandler → INavigationHandler. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map.Navigation`, inheritance chain MapNavigationHandler → INavigationHandler. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/MapNavigationHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `INavigationElement[]GetElements` | `public INavigationElement[]GetElements()` | method |
| `IsNavigationLocked` | `public bool IsNavigationLocked` | property |
| `IsEscapeMenuActive` | `public bool IsEscapeMenuActive` | property |
| `MapNavigationHandler` | `public MapNavigationHandler()` | constructor |
| `IsAnyElementActive` | `public bool IsAnyElementActive()` | method |
| `INavigationElement[]OnCreateElements` | `protected virtual INavigationElement[]OnCreateElements()` | method |
| `GetElement` | `public INavigationElement GetElement(string id)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface INavigationHandler](../../campaign/INavigationHandler/)
- [same namespace MapNavigationElementBase](../MapNavigationElementBase/)
- [same namespace MapNavigationHelper](../MapNavigationHelper/)
