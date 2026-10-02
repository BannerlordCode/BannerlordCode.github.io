---
title: "PartyUpgradeCostRichTextWidget"
description: "PartyUpgradeCostRichTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party, inheriting RichTextWidget; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyUpgradeCostRichTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyUpgradeCostRichTextWidget : RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyUpgradeCostRichTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs. It is a public class, implementing/inheriting RichTextWidget; the inheritance chain is PartyUpgradeCostRichTextWidget → RichTextWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyUpgradeCostRichTextWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`, inheritance chain PartyUpgradeCostRichTextWidget → RichTextWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyUpgradeCostRichTextWidget` | `public PartyUpgradeCostRichTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsSufficient` | `public bool IsSufficient` | property |
| `NormalColor` | `public Color NormalColor` | property |
| `InsufficientColor` | `public Color InsufficientColor` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface RichTextWidget](../../gui/RichTextWidget/)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget/)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget/)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [same namespace PartyListPanel](../PartyListPanel/)
