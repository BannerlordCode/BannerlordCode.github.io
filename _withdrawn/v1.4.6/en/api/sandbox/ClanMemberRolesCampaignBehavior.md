---
title: "ClanMemberRolesCampaignBehavior"
description: "ClanMemberRolesCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase, IMissionPlayerFollowerHandler; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanMemberRolesCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class ClanMemberRolesCampaignBehavior : CampaignBehaviorBase, IMissionPlayerFollowerHandler`
**File:** `SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ClanMemberRolesCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IMissionPlayerFollowerHandler; the inheritance chain is ClanMemberRolesCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMemberRolesCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain ClanMemberRolesCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IsFollowingPlayer` | `public bool IsFollowingPlayer(Hero hero)` | method |
| `RemoveFollowingHero` | `public void RemoveFollowingHero(Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
