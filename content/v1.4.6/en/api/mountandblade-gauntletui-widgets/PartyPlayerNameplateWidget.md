---
title: "PartyPlayerNameplateWidget"
description: "PartyPlayerNameplateWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting PartyNameplateWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs."
---
# PartyPlayerNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyPlayerNameplateWidget : PartyNameplateWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs`

## Overview

PartyPlayerNameplateWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs. It is a public class, implementing/inheriting PartyNameplateWidget; the inheritance chain is PartyPlayerNameplateWidget → PartyNameplateWidget → Widget. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyPlayerNameplateWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate) the module directory; inheritance chain PartyPlayerNameplateWidget → PartyNameplateWidget → Widget. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyPlayerNameplateWidget` | `public PartyPlayerNameplateWidget(UIContext context) : base(context)` | constructor |
| `UpdateNameplatesVisibility` | `protected override void UpdateNameplatesVisibility(float dt)` | method |
| `UpdateNameplatesScreenPosition` | `protected override void UpdateNameplatesScreenPosition()` | method |
| `IsPrisoner` | `public bool IsPrisoner` | property |
| `MainPartyArrowWidget` | `public Widget MainPartyArrowWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyNameplateWidget](../PartyNameplateWidget)
- [same namespace PartyNameplateWidget](../PartyNameplateWidget)
- [same namespace SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget)
- [same namespace SettlementNameplateItemWidget](../SettlementNameplateItemWidget)
- [same namespace SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget)
