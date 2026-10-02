---
title: "PartyPlayerNameplateWidget"
description: "PartyPlayerNameplateWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate, inheriting PartyNameplateWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyPlayerNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyPlayerNameplateWidget : PartyNameplateWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyPlayerNameplateWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs. It is a public class, implementing/inheriting PartyNameplateWidget; the inheritance chain is PartyPlayerNameplateWidget → PartyNameplateWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyPlayerNameplateWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`, inheritance chain PartyPlayerNameplateWidget → PartyNameplateWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyPlayerNameplateWidget` | `public PartyPlayerNameplateWidget(UIContext context) : base(context)` | constructor |
| `UpdateNameplatesVisibility` | `protected override void UpdateNameplatesVisibility(float dt)` | method |
| `UpdateNameplatesScreenPosition` | `protected override void UpdateNameplatesScreenPosition()` | method |
| `IsPrisoner` | `public bool IsPrisoner` | property |
| `MainPartyArrowWidget` | `public Widget MainPartyArrowWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyNameplateWidget](../PartyNameplateWidget/)
- [same namespace PartyNameplateWidget](../PartyNameplateWidget/)
- [same namespace SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget/)
- [same namespace SettlementNameplateItemWidget](../SettlementNameplateItemWidget/)
- [same namespace SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget/)
