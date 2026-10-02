---
title: "ArmyOverlayWidget"
description: "ArmyOverlayWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting OverlayBaseWidget; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs."
---
# ArmyOverlayWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ArmyOverlayWidget : OverlayBaseWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs`

## Overview

ArmyOverlayWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs. It is a public class, implementing/inheriting OverlayBaseWidget; the inheritance chain is ArmyOverlayWidget → OverlayBaseWidget → Widget. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyOverlayWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay) the module directory; inheritance chain ArmyOverlayWidget → OverlayBaseWidget → Widget. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyOverlayWidget` | `public ArmyOverlayWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `Overlay` | `public Widget Overlay` | property |
| `ArmyListGridWidget` | `public GridWidget ArmyListGridWidget` | property |
| `ExtendButton` | `public ButtonWidget ExtendButton` | property |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | property |
| `PageControlWidget` | `public ContainerPageControlWidget PageControlWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface OverlayBaseWidget](../OverlayBaseWidget)
- [same namespace GameMenuPartyItemButtonWidget](../GameMenuPartyItemButtonWidget)
- [same namespace OverlayBaseWidget](../OverlayBaseWidget)
- [same namespace OverlayPopupWidget](../OverlayPopupWidget)
- [same namespace PowerLevelComparerWidget](../PowerLevelComparerWidget)
