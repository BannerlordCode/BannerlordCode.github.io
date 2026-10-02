---
title: "MultiplayerPerkContainerPanelWidget"
description: "MultiplayerPerkContainerPanelWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs."
---
# MultiplayerPerkContainerPanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`

## Overview

MultiplayerPerkContainerPanelWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerPerkContainerPanelWidget → Widget. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPerkContainerPanelWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks) the module directory; inheritance chain MultiplayerPerkContainerPanelWidget → Widget. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerPerkContainerPanelWidget` | `public MultiplayerPerkContainerPanelWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `PerkSelected` | `public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)` | method |
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst` | property |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond` | property |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird` | property |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerPerkItemToggleWidget](../MultiplayerPerkItemToggleWidget)
- [same namespace MultiplayerPerkPopupWidget](../MultiplayerPerkPopupWidget)
