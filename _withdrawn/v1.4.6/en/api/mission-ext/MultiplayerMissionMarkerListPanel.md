---
title: "MultiplayerMissionMarkerListPanel"
description: "MultiplayerMissionMarkerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker, inheriting ListPanel; 17 exposed members (1 methods, 14 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerMissionMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerMissionMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerMissionMarkerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is MultiplayerMissionMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 17 public/protected members: 1 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerMissionMarkerListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker`, inheritance chain MultiplayerMissionMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 14/17, methods 1/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FarAlphaTarget` | `public float FarAlphaTarget` | property |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | property |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | property |
| `MultiplayerMissionMarkerListPanel` | `public MultiplayerMissionMarkerListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `FlagWidget` | `public Widget FlagWidget` | property |
| `RemovalTimeVisiblityWidget` | `public Widget RemovalTimeVisiblityWidget` | property |
| `SpawnFlagIconWidget` | `public Widget SpawnFlagIconWidget` | property |
| `PeerWidget` | `public Widget PeerWidget` | property |
| `SiegeEngineWidget` | `public Widget SiegeEngineWidget` | property |
| `Position` | `public Vec2 Position` | property |
| `Distance` | `public int Distance` | property |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | property |
| `IsSpawnFlag` | `public bool IsSpawnFlag` | property |
| `MarkerType` | `public int MarkerType` | property |
| `MissionMarkerType` | `public enum MissionMarkerType` | property |
| `MissionMarkerType` | `public enum MissionMarkerType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace SiegeEngineVisualWidget](../SiegeEngineVisualWidget/)
