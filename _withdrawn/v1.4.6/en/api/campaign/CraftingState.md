---
title: "CraftingState"
description: "CraftingState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 4 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/CraftingState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CraftingState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/CraftingState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

CraftingState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/CraftingState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is CraftingState → GameState → MBObjectBase. It exposes 4 public/protected members: 1 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain CraftingState → GameState → MBObjectBase. The surface is property-led (properties 3/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/CraftingState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `CraftingLogic` | `public Crafting CraftingLogic` | property |
| `Handler` | `public ICraftingStateHandler Handler` | property |
| `InitializeLogic` | `public void InitializeLogic(Crafting newCraftingLogic, bool isReplacingWeaponClass = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
