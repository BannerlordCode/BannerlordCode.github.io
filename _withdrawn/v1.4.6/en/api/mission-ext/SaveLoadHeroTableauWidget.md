---
title: "SaveLoadHeroTableauWidget"
description: "SaveLoadHeroTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad, inheriting TextureWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveLoadHeroTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SaveLoadHeroTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SaveLoadHeroTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is SaveLoadHeroTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveLoadHeroTableauWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad`, inheritance chain SaveLoadHeroTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsVersionCompatible` | `public bool IsVersionCompatible` | property |
| `HeroVisualCode` | `public string HeroVisualCode` | property |
| `BannerCode` | `public string BannerCode` | property |
| `SaveLoadHeroTableauWidget` | `public SaveLoadHeroTableauWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureWidget](../../gui/TextureWidget/)
- [same namespace SaveLoadMainHeroVisualWidget](../SaveLoadMainHeroVisualWidget/)
