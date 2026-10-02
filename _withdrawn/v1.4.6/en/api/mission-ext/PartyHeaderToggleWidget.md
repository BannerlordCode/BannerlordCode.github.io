---
title: "PartyHeaderToggleWidget"
description: "PartyHeaderToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party, inheriting ToggleButtonWidget; 9 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyHeaderToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyHeaderToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs. It is a public class, implementing/inheriting ToggleButtonWidget; the inheritance chain is PartyHeaderToggleWidget → ToggleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyHeaderToggleWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`, inheritance chain PartyHeaderToggleWidget → ToggleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState` | property |
| `PartyHeaderToggleWidget` | `public PartyHeaderToggleWidget(UIContext context) : base(context)` | constructor |
| `OnClick` | `protected override void OnClick(Widget widget)` | method |
| `SetState` | `public override void SetState(string stateName)` | method |
| `ListPanel` | `public ListPanel ListPanel` | property |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget` | property |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator` | property |
| `IsRelevant` | `public bool IsRelevant` | property |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ToggleButtonWidget](../ToggleButtonWidget/)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget/)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [same namespace PartyListPanel](../PartyListPanel/)
- [same namespace PartyManageTroopPopupWidget](../PartyManageTroopPopupWidget/)
