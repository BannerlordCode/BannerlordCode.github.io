---
title: "KingdomState"
description: "KingdomState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 14 exposed members (0 methods, 8 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/KingdomState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/KingdomState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

KingdomState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/KingdomState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is KingdomState → GameState → MBObjectBase. It exposes 14 public/protected members: 8 properties, 6 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain KingdomState → GameState → MBObjectBase. The surface is property-led (properties 8/14, methods 0/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/KingdomState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
