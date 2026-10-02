---
title: "DevelopmentItemVisualButtonWidget"
description: "DevelopmentItemVisualButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemVisualButtonWidget.cs."
---
# DevelopmentItemVisualButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DevelopmentItemVisualButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemVisualButtonWidget.cs`

## Overview

DevelopmentItemVisualButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemVisualButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is DevelopmentItemVisualButtonWidget → ButtonWidget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DevelopmentItemVisualButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement) the module directory; inheritance chain DevelopmentItemVisualButtonWidget → ButtonWidget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemVisualButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DevelopmentItemVisualButtonWidget` | `public DevelopmentItemVisualButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `UseSmallVariant` | `public bool UseSmallVariant` | property |
| `IsDaily` | `public bool IsDaily` | property |
| `SpriteCode` | `public string SpriteCode` | property |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [same namespace AutoClosePopupWidget](../AutoClosePopupWidget)
- [same namespace DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [same namespace DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget)
