---
title: "StealthCharactersCampaignBehavior"
description: "StealthCharactersCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/StealthCharactersCampaignBehavior.cs."
---
# StealthCharactersCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class StealthCharactersCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/StealthCharactersCampaignBehavior.cs`

## Overview

StealthCharactersCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/StealthCharactersCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is StealthCharactersCampaignBehavior → CampaignBehaviorBase. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthCharactersCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain StealthCharactersCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/StealthCharactersCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
