---
title: "SettlementNameplateWidget"
description: "SettlementNameplateWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate, inheriting Widget, IComparable<SettlementNameplateWidget>; 20 exposed members (2 methods, 16 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementNameplateWidget : Widget, IComparable<SettlementNameplateWidget>`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SettlementNameplateWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs. It is a public class, implementing/inheriting Widget, IComparable<SettlementNameplateWidget>; the inheritance chain is SettlementNameplateWidget → Widget → PropertyOwnerObject. It exposes 20 public/protected members: 2 methods, 16 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`, inheritance chain SettlementNameplateWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 16/20, methods 2/20), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SettlementNameplateWidget` | `public SettlementNameplateWidget(UIContext context) : base(context)` | constructor |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | method |
| `CompareTo` | `public int CompareTo(SettlementNameplateWidget other)` | method |
| `Position` | `public Vec2 Position` | property |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | property |
| `IsTracked` | `public bool IsTracked` | property |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial` | property |
| `IsInsideWindow` | `public bool IsInsideWindow` | property |
| `IsInRange` | `public bool IsInRange` | property |
| `CanParley` | `public bool CanParley` | property |
| `HasPort` | `public bool HasPort` | property |
| `RelationType` | `public int RelationType` | property |
| `WSign` | `public int WSign` | property |
| `WPos` | `public float WPos` | property |
| `DistanceToCamera` | `public float DistanceToCamera` | property |
| `NameplateItem` | `public SettlementNameplateItemWidget NameplateItem` | property |
| `NotificationListPanel` | `public ListPanel NotificationListPanel` | property |
| `EventsListPanel` | `public ListPanel EventsListPanel` | property |
| `TutorialAnimState` | `public enum TutorialAnimState` | property |
| `TutorialAnimState` | `public enum TutorialAnimState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyNameplateWidget](../PartyNameplateWidget/)
- [same namespace PartyPlayerNameplateWidget](../PartyPlayerNameplateWidget/)
- [same namespace SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget/)
- [same namespace SettlementNameplateItemWidget](../SettlementNameplateItemWidget/)
