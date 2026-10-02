---
title: "UIResourceManager"
description: "UIResourceManager: a public class in TaleWorlds.Engine.GauntletUI; 12 exposed members (6 methods, 6 properties, 0 fields). Source: TaleWorlds.Engine.GauntletUI/UIResourceManager.cs."
---
# UIResourceManager

**Namespace:** `TaleWorlds.Engine.GauntletUI`
**Module:** `TaleWorlds.Engine.GauntletUI`
**Type:** `public static class UIResourceManager`
**File:** `TaleWorlds.Engine.GauntletUI/UIResourceManager.cs`

## Overview

UIResourceManager lives in the TaleWorlds.Engine.GauntletUI module, source file TaleWorlds.Engine.GauntletUI/UIResourceManager.cs. It is a public class; the inheritance chain is UIResourceManager. It exposes 12 public/protected members: 6 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UIResourceManager is a top-level type in TaleWorlds.Engine.GauntletUI, namespace matching the module directory; inheritance chain UIResourceManager. The surface is method-led (methods 6/12, properties 6/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine.GauntletUI/UIResourceManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResourceDepot` | `public static ResourceDepot ResourceDepot` | property |
| `WidgetFactory` | `public static WidgetFactory WidgetFactory` | property |
| `SpriteData` | `public static SpriteData SpriteData` | property |
| `BrushFactory` | `public static BrushFactory BrushFactory` | property |
| `FontFactory` | `public static FontFactory FontFactory` | property |
| `ResourceContext` | `public static TwoDimensionEngineResourceContext ResourceContext` | property |
| `Refresh` | `public static void Refresh()` | method |
| `GetSpriteCategory` | `public static SpriteCategory GetSpriteCategory(string spriteCategoryName)` | method |
| `LoadSpriteCategory` | `public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)` | method |
| `Update` | `public static void Update()` | method |
| `OnLanguageChange` | `public static void OnLanguageChange(string newLanguageCode)` | method |
| `Clear` | `public static void Clear()` | method |

## See Also

- [↑ engine-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EngineTexture](../EngineTexture)
- [same namespace Extensions](../Extensions)
- [same namespace GauntletMovieIdentifier](../GauntletMovieIdentifier)
- [same namespace TwoDimensionEnginePlatform](../TwoDimensionEnginePlatform)
