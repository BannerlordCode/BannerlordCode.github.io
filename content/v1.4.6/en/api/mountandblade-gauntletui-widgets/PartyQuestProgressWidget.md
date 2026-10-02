---
title: "PartyQuestProgressWidget"
description: "PartyQuestProgressWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs."
---
# PartyQuestProgressWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyQuestProgressWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs`

## Overview

PartyQuestProgressWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PartyQuestProgressWidget → Widget. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyQuestProgressWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyQuestProgressWidget → Widget. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyQuestProgressWidget` | `public PartyQuestProgressWidget(UIContext context) : base(context)` | constructor |
| `ItemCount` | `public int ItemCount` | property |
| `DividerContainer` | `public ListPanel DividerContainer` | property |
| `DividerBrush` | `public Brush DividerBrush` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
