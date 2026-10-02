---
title: "ClanState"
description: "ClanState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 13 exposed members (0 methods, 7 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/ClanState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ClanState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/ClanState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ClanState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/ClanState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is ClanState → GameState → MBObjectBase. It exposes 13 public/protected members: 7 properties, 6 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain ClanState → GameState → MBObjectBase. The surface is property-led (properties 7/13, methods 0/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/ClanState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `InitialSelectedHero` | `public Hero InitialSelectedHero` | property |
| `InitialSelectedParty` | `public PartyBase InitialSelectedParty` | property |
| `InitialSelectedSettlement` | `public Settlement InitialSelectedSettlement` | property |
| `InitialSelectedWorkshop` | `public Workshop InitialSelectedWorkshop` | property |
| `InitialSelectedAlley` | `public Alley InitialSelectedAlley` | property |
| `Handler` | `public IClanStateHandler Handler` | property |
| `ClanState` | `public ClanState()` | constructor |
| `ClanState` | `public ClanState(Hero initialSelectedHero)` | constructor |
| `ClanState` | `public ClanState(PartyBase initialSelectedParty)` | constructor |
| `ClanState` | `public ClanState(Settlement initialSelectedSettlement)` | constructor |
| `ClanState` | `public ClanState(Workshop initialSelectedWorkshop)` | constructor |
| `ClanState` | `public ClanState(Alley initialSelectedAlley)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace CraftingState](../CraftingState/)
