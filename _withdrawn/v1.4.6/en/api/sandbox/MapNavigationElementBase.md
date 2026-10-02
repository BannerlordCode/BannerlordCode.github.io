---
title: "MapNavigationElementBase"
description: "MapNavigationElementBase: a public class in SandBox.View.Map.Navigation, inheriting INavigationElement; 15 exposed members (6 methods, 8 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/Navigation/MapNavigationElementBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNavigationElementBase

**Namespace:** `SandBox.View.Map.Navigation`
**Module:** `SandBox.View`
**Type:** `public abstract class MapNavigationElementBase : INavigationElement`
**File:** `SandBox.View/Map/Navigation/MapNavigationElementBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapNavigationElementBase lives in the SandBox.View module, source file SandBox.View/Map/Navigation/MapNavigationElementBase.cs. It is a public class (abstract), implementing/inheriting INavigationElement; the inheritance chain is MapNavigationElementBase → INavigationElement. It exposes 15 public/protected members: 6 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationElementBase lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map.Navigation`, inheritance chain MapNavigationElementBase → INavigationElement. The surface is property-led (properties 8/15, methods 6/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/MapNavigationElementBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Permission` | `public NavigationPermissionItem Permission` | property |
| `Tooltip` | `public TextObject Tooltip` | property |
| `AlertTooltip` | `public TextObject AlertTooltip` | property |
| `IsActive` | `public abstract bool IsActive` | property |
| `IsLockingNavigation` | `public abstract bool IsLockingNavigation` | property |
| `HasAlert` | `public abstract bool HasAlert` | property |
| `StringId` | `public abstract string StringId` | property |
| `OpenView` | `public abstract void OpenView();` | method |
| `OpenView` | `public abstract void OpenView(params object[]parameters);` | method |
| `GoToLink` | `public abstract void GoToLink();` | method |
| `_game` | `protected Game _game` | property |
| `MapNavigationElementBase` | `public MapNavigationElementBase(MapNavigationHandler handler)` | constructor |
| `GetPermission` | `protected abstract NavigationPermissionItem GetPermission();` | method |
| `GetTooltip` | `protected abstract TextObject GetTooltip();` | method |
| `GetAlertTooltip` | `protected abstract TextObject GetAlertTooltip();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface INavigationElement](../../campaign/INavigationElement/)
- [same namespace MapNavigationHandler](../MapNavigationHandler/)
- [same namespace MapNavigationHelper](../MapNavigationHelper/)
