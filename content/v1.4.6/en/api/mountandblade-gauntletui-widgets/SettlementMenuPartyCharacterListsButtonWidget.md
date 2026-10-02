---
title: "SettlementMenuPartyCharacterListsButtonWidget"
description: "SettlementMenuPartyCharacterListsButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 10 exposed members (2 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs."
---
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`

## Overview

SettlementMenuPartyCharacterListsButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is SettlementMenuPartyCharacterListsButtonWidget → ButtonWidget. It exposes 10 public/protected members: 2 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementMenuPartyCharacterListsButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu) the module directory; inheritance chain SettlementMenuPartyCharacterListsButtonWidget → ButtonWidget. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyListButtonBrush` | `public Brush PartyListButtonBrush` | property |
| `CharacterListButtonBrush` | `public Brush CharacterListButtonBrush` | property |
| `CharactersList` | `public ContainerPageControlWidget CharactersList` | property |
| `PartiesList` | `public ContainerPageControlWidget PartiesList` | property |
| `MaxNumOfVisuals` | `public int MaxNumOfVisuals` | property |
| `SettlementMenuPartyCharacterListsButtonWidget` | `public SettlementMenuPartyCharacterListsButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `ChildCharactersList` | `public ListPanel ChildCharactersList` | property |
| `ChildPartiesList` | `public ListPanel ChildPartiesList` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuTroopSelectionItemButtonWidget](../GameMenuTroopSelectionItemButtonWidget)
- [same namespace GameMenuWidget](../GameMenuWidget)
