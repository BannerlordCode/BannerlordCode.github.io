---
title: "MultiplayerMissionMarkerListPanel"
description: "MultiplayerMissionMarkerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 17 exposed members (1 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs."
---
# MultiplayerMissionMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerMissionMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs`

## Overview

MultiplayerMissionMarkerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is MultiplayerMissionMarkerListPanel → ListPanel. It exposes 17 public/protected members: 1 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerMissionMarkerListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker) the module directory; inheritance chain MultiplayerMissionMarkerListPanel → ListPanel. The surface is property-led (properties 14/17, methods 1/17), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SiegeEngineVisualWidget](../SiegeEngineVisualWidget)
