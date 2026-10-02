---
title: "CaravansCampaignBehavior"
description: "CaravansCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 13 exposed members (9 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs."
---
# CaravansCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CaravansCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs`

## Overview

CaravansCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CaravansCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 13 public/protected members: 9 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CaravansCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain CaravansCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 9/13, properties 2/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior` | property |
| `CaravansCampaignBehavior` | `public CaravansCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `SpawnCaravan` | `public void SpawnCaravan(Hero hero, bool initialSpawn = false)` | method |
| `DailyTick` | `public void DailyTick()` | method |
| `HourlyTickParty` | `public void HourlyTickParty(MobileParty mobileParty)` | method |
| `OnSettlementEntered` | `public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | method |
| `OnSettlementLeft` | `public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter starter)` | method |
| `SaveableTypeDefiner` | `public class CaravansCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class CaravansCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
