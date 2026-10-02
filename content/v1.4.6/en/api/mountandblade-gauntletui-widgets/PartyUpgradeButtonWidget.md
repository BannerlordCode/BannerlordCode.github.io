---
title: "PartyUpgradeButtonWidget"
description: "PartyUpgradeButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 8 exposed members (0 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs."
---
# PartyUpgradeButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyUpgradeButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs`

## Overview

PartyUpgradeButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is PartyUpgradeButtonWidget → ButtonWidget. It exposes 8 public/protected members: 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyUpgradeButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyUpgradeButtonWidget → ButtonWidget. The surface is property-led (properties 7/8, methods 0/8), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyUpgradeButtonWidget` | `public PartyUpgradeButtonWidget(UIContext context) : base(context)` | constructor |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget` | property |
| `DefaultBrush` | `public Brush DefaultBrush` | property |
| `MarinerTroopBrush` | `public BrushWidget MarinerTroopBrush` | property |
| `UnavailableBrush` | `public Brush UnavailableBrush` | property |
| `InsufficientBrush` | `public Brush InsufficientBrush` | property |
| `IsAvailable` | `public bool IsAvailable` | property |
| `IsInsufficient` | `public bool IsInsufficient` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
