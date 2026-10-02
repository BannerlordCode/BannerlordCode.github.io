---
title: "ClanMemberRolesCampaignBehavior"
description: "ClanMemberRolesCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase, IMissionPlayerFollowerHandler; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs."
---
# ClanMemberRolesCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class ClanMemberRolesCampaignBehavior : CampaignBehaviorBase, IMissionPlayerFollowerHandler`
**File:** `SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs`

## Overview

ClanMemberRolesCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IMissionPlayerFollowerHandler; the inheritance chain is ClanMemberRolesCampaignBehavior → CampaignBehaviorBase. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMemberRolesCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain ClanMemberRolesCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IsFollowingPlayer` | `public bool IsFollowingPlayer(Hero hero)` | method |
| `RemoveFollowingHero` | `public void RemoveFollowingHero(Hero hero)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
