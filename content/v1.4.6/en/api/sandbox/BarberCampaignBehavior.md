---
title: "BarberCampaignBehavior"
description: "BarberCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase, IFacegenCampaignBehavior; 3 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/BarberCampaignBehavior.cs."
---
# BarberCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**File:** `SandBox/CampaignBehaviors/BarberCampaignBehavior.cs`

## Overview

BarberCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/BarberCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior; the inheritance chain is BarberCampaignBehavior → CampaignBehaviorBase. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarberCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain BarberCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/BarberCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore store)` | method |
| `GetFaceGenFilter` | `public IFaceGeneratorCustomFilter GetFaceGenFilter()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
- [same namespace CheckpointCampaignBehavior](../CheckpointCampaignBehavior)
