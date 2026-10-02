---
title: "OverlayPopupWidget"
description: "OverlayPopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 12 exposed members (3 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs."
---
# OverlayPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OverlayPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs`

## Overview

OverlayPopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OverlayPopupWidget → Widget. It exposes 12 public/protected members: 3 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OverlayPopupWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay) the module directory; inheritance chain OverlayPopupWidget → Widget. The surface is property-led (properties 8/12, methods 3/12), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverlayPopupWidget` | `public OverlayPopupWidget(UIContext context) : base(context)` | constructor |
| `SetCurrentCharacter` | `public void SetCurrentCharacter(GameMenuPartyItemButtonWidget item)` | method |
| `OnCloseButtonClick` | `public void OnCloseButtonClick(Widget widget)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget` | property |
| `LocationTextWidget` | `public TextWidget LocationTextWidget` | property |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `PowerTextWidget` | `public TextWidget PowerTextWidget` | property |
| `DescriptionTextWidget` | `public TextWidget DescriptionTextWidget` | property |
| `RelationBackgroundWidget` | `public Widget RelationBackgroundWidget` | property |
| `ActionButtonsList` | `public ListPanel ActionButtonsList` | property |
| `CloseButton` | `public ButtonWidget CloseButton` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyOverlayWidget](../ArmyOverlayWidget)
- [same namespace GameMenuPartyItemButtonWidget](../GameMenuPartyItemButtonWidget)
- [same namespace OverlayBaseWidget](../OverlayBaseWidget)
- [same namespace PowerLevelComparerWidget](../PowerLevelComparerWidget)
