---
title: "PrisonBreakCampaignBehavior"
description: "PrisonBreakCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/PrisonBreakCampaignBehavior.cs."
---
# PrisonBreakCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class PrisonBreakCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/PrisonBreakCampaignBehavior.cs`

## Overview

PrisonBreakCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/PrisonBreakCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is PrisonBreakCampaignBehavior → CampaignBehaviorBase. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonBreakCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain PrisonBreakCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/PrisonBreakCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `CreatePrisonBreakGuard` | `public LocationCharacter CreatePrisonBreakGuard()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `game_menu_prison_menu_on_init` | `public static void game_menu_prison_menu_on_init(MenuCallbackArgs args)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
