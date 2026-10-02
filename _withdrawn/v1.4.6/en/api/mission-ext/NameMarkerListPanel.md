---
title: "NameMarkerListPanel"
description: "NameMarkerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker, inheriting ListPanel; 28 exposed members (2 methods, 25 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NameMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NameMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

NameMarkerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is NameMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 28 public/protected members: 2 methods, 25 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NameMarkerListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`, inheritance chain NameMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 25/28, methods 2/28), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FarAlphaTarget` | `public float FarAlphaTarget` | property |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | property |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | property |
| `HasTypeMarker` | `public bool HasTypeMarker` | property |
| `Rect` | `public MarkerRect Rect` | property |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries` | property |
| `NameMarkerListPanel` | `public NameMarkerListPanel(UIContext context) : base(context)` | constructor |
| `Update` | `public void Update(float dt)` | method |
| `UpdateRectangle` | `public void UpdateRectangle()` | method |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `TypeVisualWidget` | `public BrushWidget TypeVisualWidget` | property |
| `DistanceIconWidget` | `public BrushWidget DistanceIconWidget` | property |
| `DistanceTextWidget` | `public TextWidget DistanceTextWidget` | property |
| `Position` | `public Vec2 Position` | property |
| `IssueNotificationColor` | `public Color IssueNotificationColor` | property |
| `MainQuestNotificationColor` | `public Color MainQuestNotificationColor` | property |
| `EnemyColor` | `public Color EnemyColor` | property |
| `FriendlyColor` | `public Color FriendlyColor` | property |
| `IconType` | `public string IconType` | property |
| `NameType` | `public string NameType` | property |
| `Distance` | `public int Distance` | property |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | property |
| `IsMarkerPersistent` | `public bool IsMarkerPersistent` | property |
| `HasIssue` | `public bool HasIssue` | property |
| `HasMainQuest` | `public bool HasMainQuest` | property |
| `IsEnemy` | `public bool IsEnemy` | property |
| `IsFriendly` | `public bool IsFriendly` | property |
| `IsFocused` | `public new bool IsFocused` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel/)
- [same namespace DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel/)
- [same namespace MarkerRect](../MarkerRect/)
- [same namespace NameMarkerScreenWidget](../NameMarkerScreenWidget/)
