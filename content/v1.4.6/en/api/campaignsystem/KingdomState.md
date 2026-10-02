---
title: "KingdomState"
description: "KingdomState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 14 exposed members (0 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/KingdomState.cs."
---
# KingdomState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/KingdomState.cs`

## Overview

KingdomState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/KingdomState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is KingdomState → GameState. It exposes 14 public/protected members: 8 properties, 6 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain KingdomState → GameState. The surface is property-led (properties 8/14, methods 0/14), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/KingdomState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `InitialSelectedArmy` | `public Army InitialSelectedArmy` | property |
| `InitialSelectedSettlement` | `public Settlement InitialSelectedSettlement` | property |
| `InitialSelectedClan` | `public Clan InitialSelectedClan` | property |
| `InitialSelectedPolicy` | `public PolicyObject InitialSelectedPolicy` | property |
| `InitialSelectedKingdom` | `public Kingdom InitialSelectedKingdom` | property |
| `InitialSelectedDecision` | `public KingdomDecision InitialSelectedDecision` | property |
| `Handler` | `public IKingdomStateHandler Handler` | property |
| `KingdomState` | `public KingdomState()` | constructor |
| `KingdomState` | `public KingdomState(KingdomDecision initialSelectedDecision)` | constructor |
| `KingdomState` | `public KingdomState(Army initialSelectedArmy)` | constructor |
| `KingdomState` | `public KingdomState(Settlement initialSelectedSettlement)` | constructor |
| `KingdomState` | `public KingdomState(IFaction initialSelectedFaction)` | constructor |
| `KingdomState` | `public KingdomState(PolicyObject initialSelectedPolicy)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
