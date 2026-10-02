---
title: "AutoClosePopupWidget"
description: "AutoClosePopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs."
---
# AutoClosePopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AutoClosePopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs`

## Overview

AutoClosePopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is AutoClosePopupWidget → Widget. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AutoClosePopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement) the module directory; inheritance chain AutoClosePopupWidget → Widget. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoClosePopupWidget` | `public AutoClosePopupWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `CheckClosingWidgetsAndUpdateVisibility` | `protected void CheckClosingWidgetsAndUpdateVisibility()` | method |
| `PopupParentWidget` | `public Widget PopupParentWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [same namespace DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [same namespace DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget)
- [same namespace DevelopmentItemVisualButtonWidget](../DevelopmentItemVisualButtonWidget)
