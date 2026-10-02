---
title: "DevelopmentNameTextWidget"
description: "DevelopmentNameTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 9 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs."
---
# DevelopmentNameTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DevelopmentNameTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs`

## Overview

DevelopmentNameTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is DevelopmentNameTextWidget → TextWidget. It exposes 9 public/protected members: 2 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DevelopmentNameTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement) the module directory; inheritance chain DevelopmentNameTextWidget → TextWidget. The surface is property-led (properties 5/9, methods 2/9), so it mostly exposes state for reading. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DevelopmentNameTextWidget` | `public DevelopmentNameTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `StartMaxTextAnimation` | `public void StartMaxTextAnimation()` | method |
| `MaxText` | `public string MaxText` | property |
| `MaxTextStayTime` | `public float MaxTextStayTime` | property |
| `NameText` | `public string NameText` | property |
| `IsInQueue` | `public bool IsInQueue` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [same namespace AutoClosePopupWidget](../AutoClosePopupWidget)
- [same namespace DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [same namespace DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget)
