---
title: "GuardsCampaignBehavior"
description: "GuardsCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase; 5 exposed members (4 methods, 0 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GuardsCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class GuardsCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GuardsCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is GuardsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 4 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GuardsCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain GuardsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `UnarmedTownGuardSpawnRate` | `public const float UnarmedTownGuardSpawnRate` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
