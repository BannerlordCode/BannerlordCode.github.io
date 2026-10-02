---
title: "SaveLoadHeroTableauWidget"
description: "SaveLoadHeroTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs."
---
# SaveLoadHeroTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SaveLoadHeroTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs`

## Overview

SaveLoadHeroTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is SaveLoadHeroTableauWidget → TextureWidget. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveLoadHeroTableauWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad) the module directory; inheritance chain SaveLoadHeroTableauWidget → TextureWidget. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsVersionCompatible` | `public bool IsVersionCompatible` | property |
| `HeroVisualCode` | `public string HeroVisualCode` | property |
| `BannerCode` | `public string BannerCode` | property |
| `SaveLoadHeroTableauWidget` | `public SaveLoadHeroTableauWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SaveLoadMainHeroVisualWidget](../SaveLoadMainHeroVisualWidget)
