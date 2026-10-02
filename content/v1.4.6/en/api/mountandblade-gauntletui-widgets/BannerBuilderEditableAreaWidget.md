---
title: "BannerBuilderEditableAreaWidget"
description: "BannerBuilderEditableAreaWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 17 exposed members (2 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs."
---
# BannerBuilderEditableAreaWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## Overview

BannerBuilderEditableAreaWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is BannerBuilderEditableAreaWidget → Widget. It exposes 17 public/protected members: 2 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderEditableAreaWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder) the module directory; inheritance chain BannerBuilderEditableAreaWidget → Widget. The surface is property-led (properties 14/17, methods 2/17), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DragWidgetTopRight` | `public ButtonWidget DragWidgetTopRight` | property |
| `DragWidgetRight` | `public ButtonWidget DragWidgetRight` | property |
| `DragWidgetTop` | `public ButtonWidget DragWidgetTop` | property |
| `RotateWidget` | `public ButtonWidget RotateWidget` | property |
| `BannerTableauWidget` | `public BannerTableauWidget BannerTableauWidget` | property |
| `EditableAreaVisualWidget` | `public Widget EditableAreaVisualWidget` | property |
| `LayerIndex` | `public int LayerIndex` | property |
| `IsMirrorActive` | `public bool IsMirrorActive` | property |
| `BannerBuilderEditableAreaWidget` | `public BannerBuilderEditableAreaWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsLayerPattern` | `public bool IsLayerPattern` | property |
| `PositionValue` | `public Vec2 PositionValue` | property |
| `SizeValue` | `public Vec2 SizeValue` | property |
| `RotationValue` | `public float RotationValue` | property |
| `EditableAreaSize` | `public int EditableAreaSize` | property |
| `TotalAreaSize` | `public int TotalAreaSize` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
