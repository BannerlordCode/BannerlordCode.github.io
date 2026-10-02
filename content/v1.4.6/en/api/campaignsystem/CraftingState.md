---
title: "CraftingState"
description: "CraftingState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 4 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/CraftingState.cs."
---
# CraftingState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CraftingState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/CraftingState.cs`

## Overview

CraftingState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/CraftingState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is CraftingState → GameState. It exposes 4 public/protected members: 1 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain CraftingState → GameState. The surface is property-led (properties 3/4, methods 1/4), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/CraftingState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `CraftingLogic` | `public Crafting CraftingLogic` | property |
| `Handler` | `public ICraftingStateHandler Handler` | property |
| `InitializeLogic` | `public void InitializeLogic(Crafting newCraftingLogic, bool isReplacingWeaponClass = false)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
