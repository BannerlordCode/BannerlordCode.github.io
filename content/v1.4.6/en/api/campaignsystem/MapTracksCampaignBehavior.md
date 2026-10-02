---
title: "MapTracksCampaignBehavior"
description: "MapTracksCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, IMapTracksCampaignBehavior; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/MapTracksCampaignBehavior.cs."
---
# MapTracksCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapTracksCampaignBehavior : CampaignBehaviorBase, IMapTracksCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/MapTracksCampaignBehavior.cs`

## Overview

MapTracksCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/MapTracksCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IMapTracksCampaignBehavior, ICampaignBehavior; the inheritance chain is MapTracksCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTracksCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain MapTracksCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/MapTracksCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Track>DetectedTracks` | property |
| `MapTracksCampaignBehavior` | `public MapTracksCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IsTrackDropped` | `public bool IsTrackDropped(MobileParty mobileParty)` | method |
| `AddTrack` | `public void AddTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)` | method |
| `AddMapArrow` | `public void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMapTracksCampaignBehavior](../IMapTracksCampaignBehavior)
- [base / interface ICampaignBehavior](../ICampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
