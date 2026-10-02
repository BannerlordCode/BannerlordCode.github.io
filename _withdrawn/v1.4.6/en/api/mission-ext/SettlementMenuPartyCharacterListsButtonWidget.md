---
title: "SettlementMenuPartyCharacterListsButtonWidget"
description: "SettlementMenuPartyCharacterListsButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu, inheriting ButtonWidget; 10 exposed members (2 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SettlementMenuPartyCharacterListsButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is SettlementMenuPartyCharacterListsButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 2 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementMenuPartyCharacterListsButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`, inheritance chain SettlementMenuPartyCharacterListsButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace GameMenuTroopSelectionItemButtonWidget](../GameMenuTroopSelectionItemButtonWidget/)
- [same namespace GameMenuWidget](../GameMenuWidget/)
