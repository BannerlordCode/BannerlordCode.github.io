---
title: "GauntletMovie"
description: "GauntletMovie: a public class in TaleWorlds.GauntletUI.Data, inheriting IGauntletMovie; 15 exposed members (6 methods, 9 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.Data/GauntletMovie.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GauntletMovie : IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

GauntletMovie lives in the TaleWorlds.GauntletUI.Data module, source file TaleWorlds.GauntletUI.Data/GauntletMovie.cs. It is a public class, implementing/inheriting IGauntletMovie; the inheritance chain is GauntletMovie → IGauntletMovie. It exposes 15 public/protected members: 6 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMovie lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.Data`, inheritance chain GauntletMovie → IGauntletMovie. The surface is property-led (properties 9/15, methods 6/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.Data/GauntletMovie.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WidgetFactory` | `public WidgetFactory WidgetFactory` | property |
| `BrushFactory` | `public BrushFactory BrushFactory` | property |
| `Context` | `public UIContext Context` | property |
| `ViewModel` | `public IViewModel ViewModel` | property |
| `MovieName` | `public string MovieName` | property |
| `RootView` | `public GauntletView RootView` | property |
| `RootWidget` | `public Widget RootWidget` | property |
| `IsLoaded` | `public bool IsLoaded` | property |
| `IsReleased` | `public bool IsReleased` | property |
| `RefreshDataSource` | `public void RefreshDataSource(IViewModel dataSourve)` | method |
| `Release` | `public void Release()` | method |
| `Update` | `public void Update()` | method |
| `Load` | `public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)` | method |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | method |
| `FindViewOf` | `public GauntletView FindViewOf(Widget widget)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGauntletMovie](../IGauntletMovie/)
- [same namespace GauntletView](../GauntletView/)
- [same namespace GeneratedGauntletMovie](../GeneratedGauntletMovie/)
- [same namespace GeneratedWidgetData](../GeneratedWidgetData/)
- [same namespace IGauntletMovie](../IGauntletMovie/)
