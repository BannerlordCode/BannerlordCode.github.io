---
title: "CharacterDeveloperState"
description: "CharacterDeveloperState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 5 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDeveloperState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterDeveloperState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

CharacterDeveloperState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is CharacterDeveloperState → GameState → MBObjectBase. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterDeveloperState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain CharacterDeveloperState → GameState → MBObjectBase. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `InitialSelectedHero` | `public Hero InitialSelectedHero` | property |
| `CharacterDeveloperState` | `public CharacterDeveloperState()` | constructor |
| `CharacterDeveloperState` | `public CharacterDeveloperState(Hero initialSelectedHero)` | constructor |
| `Handler` | `public ICharacterDeveloperStateHandler Handler` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace ClanState](../ClanState/)
- [same namespace CraftingState](../CraftingState/)
