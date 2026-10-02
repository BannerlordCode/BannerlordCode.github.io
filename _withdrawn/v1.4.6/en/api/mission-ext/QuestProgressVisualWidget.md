---
title: "QuestProgressVisualWidget"
description: "QuestProgressVisualWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest, inheriting Widget; 11 exposed members (1 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestProgressVisualWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class QuestProgressVisualWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

QuestProgressVisualWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is QuestProgressVisualWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestProgressVisualWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest`, inheritance chain QuestProgressVisualWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BarWidget` | `public Widget BarWidget` | property |
| `SliderWidget` | `public Widget SliderWidget` | property |
| `CheckboxVisualWidget` | `public Widget CheckboxVisualWidget` | property |
| `QuestProgressVisualWidget` | `public QuestProgressVisualWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsValid` | `public bool IsValid` | property |
| `ProgressStoneWidth` | `public float ProgressStoneWidth` | property |
| `ProgressStoneHeight` | `public float ProgressStoneHeight` | property |
| `CurrentProgress` | `public int CurrentProgress` | property |
| `TargetProgress` | `public int TargetProgress` | property |
| `HorizontalSpacingBetweenStones` | `public int HorizontalSpacingBetweenStones` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace QuestItemButtonWidget](../QuestItemButtonWidget/)
- [same namespace QuestMarkerBrushWidget](../QuestMarkerBrushWidget/)
- [same namespace QuestStageItemWidget](../QuestStageItemWidget/)
