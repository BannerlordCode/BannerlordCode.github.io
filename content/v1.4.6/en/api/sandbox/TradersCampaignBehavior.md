---
title: "TradersCampaignBehavior"
description: "TradersCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/TradersCampaignBehavior.cs."
---
# TradersCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class TradersCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/TradersCampaignBehavior.cs`

## Overview

TradersCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/TradersCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is TradersCampaignBehavior → CampaignBehaviorBase. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TradersCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain TradersCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/TradersCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
