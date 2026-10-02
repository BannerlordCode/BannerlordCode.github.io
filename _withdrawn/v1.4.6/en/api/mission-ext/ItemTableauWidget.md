---
title: "ItemTableauWidget"
description: "ItemTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 12 exposed members (6 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ItemTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ItemTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is ItemTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 6 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemTableauWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain ItemTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 6/12, properties 5/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ItemModifierId` | `public string ItemModifierId` | property |
| `StringId` | `public string StringId` | property |
| `InitialTiltRotation` | `public float InitialTiltRotation` | property |
| `InitialPanRotation` | `public float InitialPanRotation` | property |
| `BannerCode` | `public string BannerCode` | property |
| `ItemTableauWidget` | `public ItemTableauWidget(UIContext context) : base(context)` | constructor |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | method |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | method |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnRightStickMovement` | `protected override void OnRightStickMovement()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |
| `OnPreviewRightStickMovement` | `protected override bool OnPreviewRightStickMovement()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureWidget](../../gui/TextureWidget/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
