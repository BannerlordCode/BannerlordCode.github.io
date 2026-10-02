---
title: "PartyFormationDropdownWidget"
description: "PartyFormationDropdownWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party, inheriting DropdownWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyFormationDropdownWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyFormationDropdownWidget : DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyFormationDropdownWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs. It is a public class, implementing/inheriting DropdownWidget; the inheritance chain is PartyFormationDropdownWidget → DropdownWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyFormationDropdownWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`, inheritance chain PartyFormationDropdownWidget → DropdownWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyFormationDropdownWidget` | `public PartyFormationDropdownWidget(UIContext context) : base(context)` | constructor |
| `OpenPanel` | `protected override void OpenPanel()` | method |
| `ClosePanel` | `protected override void ClosePanel()` | method |
| `SeperatorStateChanger` | `public DelayedStateChanger SeperatorStateChanger` | property |
| `ListStateChanger` | `public DelayedStateChanger ListStateChanger` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DropdownWidget](../../gui/DropdownWidget/)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget/)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [same namespace PartyListPanel](../PartyListPanel/)
- [same namespace PartyManageTroopPopupWidget](../PartyManageTroopPopupWidget/)
