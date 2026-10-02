---
title: "TeleportationCampaignBehavior"
description: "TeleportationCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, ITeleportationCampaignBehavior; 6 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/TeleportationCampaignBehavior.cs."
---
# TeleportationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TeleportationCampaignBehavior : CampaignBehaviorBase, ITeleportationCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TeleportationCampaignBehavior.cs`

## Overview

TeleportationCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/TeleportationCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, ITeleportationCampaignBehavior, ICampaignBehavior; the inheritance chain is TeleportationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 6 public/protected members: 4 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeleportationCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain TeleportationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/TeleportationCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `GetTargetOfTeleportingHero` | `public bool GetTargetOfTeleportingHero(Hero teleportingHero, out bool isGovernor, out bool isPartyLeader, out IMapPoint target)` | method |
| `GetHeroArrivalTimeToDestination` | `public CampaignTime GetHeroArrivalTimeToDestination(Hero teleportingHero)` | method |
| `SaveableTypeDefiner` | `public class TeleportationCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class TeleportationCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ITeleportationCampaignBehavior](../ITeleportationCampaignBehavior)
- [base / interface ICampaignBehavior](../ICampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
