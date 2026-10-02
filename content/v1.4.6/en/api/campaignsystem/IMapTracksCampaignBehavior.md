---
title: "IMapTracksCampaignBehavior"
description: "IMapTracksCampaignBehavior: a public interface in TaleWorlds.CampaignSystem, inheriting ICampaignBehavior; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IMapTracksCampaignBehavior.cs."
---
# IMapTracksCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapTracksCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IMapTracksCampaignBehavior.cs`

## Overview

IMapTracksCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IMapTracksCampaignBehavior.cs. It is a public interface, implementing/inheriting ICampaignBehavior; the inheritance chain is IMapTracksCampaignBehavior → ICampaignBehavior. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMapTracksCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain IMapTracksCampaignBehavior → ICampaignBehavior. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IMapTracksCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `MBReadOnlyList<Track>DetectedTracks` | property |
| `AddTrack` | `void AddTrack(MobileParty target, CampaignVec2 trackPosition, Vec2 trackDirection);` | method |
| `AddMapArrow` | `void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ICampaignBehavior](../ICampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
