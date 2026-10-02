---
title: "GuardsCampaignBehavior"
description: "GuardsCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 5 exposed members (4 methods, 0 properties, 1 fields). Source: SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs."
---
# GuardsCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class GuardsCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs`

## Overview

GuardsCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is GuardsCampaignBehavior → CampaignBehaviorBase. It exposes 5 public/protected members: 4 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GuardsCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain GuardsCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `UnarmedTownGuardSpawnRate` | `public const float UnarmedTownGuardSpawnRate` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
