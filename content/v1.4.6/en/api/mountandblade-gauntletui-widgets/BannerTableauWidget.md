---
title: "BannerTableauWidget"
description: "BannerTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs."
---
# BannerTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BannerTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs`

## Overview

BannerTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is BannerTableauWidget → TextureWidget. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerTableauWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain BannerTableauWidget → TextureWidget. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerTableauWidget` | `public BannerTableauWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `BannerCodeText` | `public string BannerCodeText` | property |
| `CustomRenderScale` | `public float CustomRenderScale` | property |
| `IsNineGrid` | `public bool IsNineGrid` | property |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual` | property |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual` | property |
| `bool>UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool>UpdateRotationValueManualWithMirror` | property |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
