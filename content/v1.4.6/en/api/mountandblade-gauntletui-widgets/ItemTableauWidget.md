---
title: "ItemTableauWidget"
description: "ItemTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 12 exposed members (6 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs."
---
# ItemTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ItemTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs`

## Overview

ItemTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is ItemTableauWidget → TextureWidget. It exposes 12 public/protected members: 6 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemTableauWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ItemTableauWidget → TextureWidget. The surface is method-led (methods 6/12, properties 5/12), so it mostly exposes operations. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
