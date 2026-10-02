---
title: "RundownTooltipWidget"
description: "RundownTooltipWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip, inheriting TooltipWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RundownTooltipWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class RundownTooltipWidget : TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RundownTooltipWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs. It is a public class, implementing/inheriting TooltipWidget; the inheritance chain is RundownTooltipWidget → TooltipWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RundownTooltipWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`, inheritance chain RundownTooltipWidget → TooltipWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RundownTooltipWidget` | `public RundownTooltipWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `LineContainerWidget` | `public GridWidget LineContainerWidget` | property |
| `DividerCollectionWidget` | `public RundownColumnDividerCollectionWidget DividerCollectionWidget` | property |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TooltipWidget](../../gui/TooltipWidget/)
- [same namespace RundownColumnDividerCollectionWidget](../RundownColumnDividerCollectionWidget/)
- [same namespace RundownLineWidget](../RundownLineWidget/)
