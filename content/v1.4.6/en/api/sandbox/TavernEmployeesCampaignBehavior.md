---
title: "TavernEmployeesCampaignBehavior"
description: "TavernEmployeesCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 9 exposed members (8 methods, 0 properties, 1 fields). Source: SandBox/CampaignBehaviors/TavernEmployeesCampaignBehavior.cs."
---
# TavernEmployeesCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class TavernEmployeesCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/TavernEmployeesCampaignBehavior.cs`

## Overview

TavernEmployeesCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/TavernEmployeesCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is TavernEmployeesCampaignBehavior → CampaignBehaviorBase. It exposes 9 public/protected members: 8 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TavernEmployeesCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain TavernEmployeesCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/TavernEmployeesCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `DailyTick` | `public void DailyTick()` | method |
| `WeeklyTick` | `public void WeeklyTick()` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `OnMissionStarted` | `public void OnMissionStarted(IMission mission)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter cgs)` | method |
| `FindCompanionWithType` | `public void FindCompanionWithType(PartyRole role)` | method |
| `TavernCompanionInquiryCost` | `public const int TavernCompanionInquiryCost` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
