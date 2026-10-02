---
title: "WorkshopsCampaignBehavior"
description: "WorkshopsCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, IWorkshopWarehouseCampaignBehavior; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs."
---
# WorkshopsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class WorkshopsCampaignBehavior : CampaignBehaviorBase, IWorkshopWarehouseCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs`

## Overview

WorkshopsCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IWorkshopWarehouseCampaignBehavior; the inheritance chain is WorkshopsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 7 public/protected members: 5 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorkshopsCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain WorkshopsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `InitializeGameMenus` | `protected void InitializeGameMenus(CampaignGameStarter campaignGameStarter)` | method |
| `GetWarehouseItemRosterWeight` | `public float GetWarehouseItemRosterWeight(Settlement settlement)` | method |
| `TransferWarehouseToPlayerParty` | `public void TransferWarehouseToPlayerParty(Settlement settlement)` | method |
| `SaveableTypeDefiner` | `public class WorkshopsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class WorkshopsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IWorkshopWarehouseCampaignBehavior](../IWorkshopWarehouseCampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
