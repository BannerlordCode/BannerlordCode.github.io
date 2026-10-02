---
title: "PartyUpgraderCampaignBehavior"
description: "PartyUpgraderCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/PartyUpgraderCampaignBehavior.cs."
---
# PartyUpgraderCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyUpgraderCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PartyUpgraderCampaignBehavior.cs`

## Overview

PartyUpgraderCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/PartyUpgraderCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is PartyUpgraderCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyUpgraderCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain PartyUpgraderCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/PartyUpgraderCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `DailyTickParty` | `public void DailyTickParty(MobileParty party)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `UpgradeReadyTroops` | `public void UpgradeReadyTroops(PartyBase party)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
