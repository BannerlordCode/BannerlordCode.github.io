---
title: "IGauntletMovie"
description: "IGauntletMovie: a public interface in TaleWorlds.GauntletUI.Data; 7 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.Data/IGauntletMovie.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IGauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public interface IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/IGauntletMovie.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

IGauntletMovie lives in the TaleWorlds.GauntletUI.Data module, source file TaleWorlds.GauntletUI.Data/IGauntletMovie.cs. It is a public interface; the inheritance chain is IGauntletMovie. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGauntletMovie lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.Data`, inheritance chain IGauntletMovie. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.Data/IGauntletMovie.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RootWidget` | `Widget RootWidget` | property |
| `MovieName` | `string MovieName` | property |
| `IsLoaded` | `bool IsLoaded` | property |
| `IsReleased` | `bool IsReleased` | property |
| `Update` | `void Update();` | method |
| `Release` | `void Release();` | method |
| `RefreshBindingWithChildren` | `void RefreshBindingWithChildren();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GauntletMovie](../GauntletMovie/)
- [same namespace GauntletView](../GauntletView/)
- [same namespace GeneratedGauntletMovie](../GeneratedGauntletMovie/)
- [same namespace GeneratedWidgetData](../GeneratedWidgetData/)
