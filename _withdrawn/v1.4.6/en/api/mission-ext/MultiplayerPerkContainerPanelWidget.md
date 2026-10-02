---
title: "MultiplayerPerkContainerPanelWidget"
description: "MultiplayerPerkContainerPanelWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks, inheriting Widget; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerPerkContainerPanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerPerkContainerPanelWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerPerkContainerPanelWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPerkContainerPanelWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`, inheritance chain MultiplayerPerkContainerPanelWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerPerkContainerPanelWidget` | `public MultiplayerPerkContainerPanelWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `PerkSelected` | `public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)` | method |
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst` | property |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond` | property |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird` | property |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MultiplayerPerkItemToggleWidget](../MultiplayerPerkItemToggleWidget/)
- [same namespace MultiplayerPerkPopupWidget](../MultiplayerPerkPopupWidget/)
