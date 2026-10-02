---
title: "GeneratedGauntletMovie"
description: "GeneratedGauntletMovie: a public class in TaleWorlds.GauntletUI.Data, inheriting IGauntletMovie; 10 exposed members (4 methods, 5 properties, 0 fields). Source: TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs."
---
# GeneratedGauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

## Overview

GeneratedGauntletMovie lives in the TaleWorlds.GauntletUI.Data module, source file TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs. It is a public class, implementing/inheriting IGauntletMovie; the inheritance chain is GeneratedGauntletMovie → IGauntletMovie. It exposes 10 public/protected members: 4 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GeneratedGauntletMovie is a top-level type in TaleWorlds.GauntletUI.Data, namespace matching the module directory; inheritance chain GeneratedGauntletMovie → IGauntletMovie. The surface is property-led (properties 5/10, methods 4/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Context` | `public UIContext Context` | property |
| `RootWidget` | `public Widget RootWidget` | property |
| `MovieName` | `public string MovieName` | property |
| `IsLoaded` | `public bool IsLoaded` | property |
| `IsReleased` | `public bool IsReleased` | property |
| `GeneratedGauntletMovie` | `public GeneratedGauntletMovie(string movieName, Widget rootWidget)` | constructor |
| `Update` | `public void Update()` | method |
| `Release` | `public void Release()` | method |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | method |
| `OnResourcesRefreshed` | `public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)` | method |

## See Also

- [↑ gauntletui-data module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IGauntletMovie](../IGauntletMovie)
- [same namespace GauntletMovie](../GauntletMovie)
- [same namespace GauntletView](../GauntletView)
- [same namespace GeneratedWidgetData](../GeneratedWidgetData)
- [same namespace IGauntletMovie](../IGauntletMovie)
