---
title: "BarberState"
description: "BarberState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 4 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/BarberState.cs."
---
# BarberState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarberState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BarberState.cs`

## Overview

BarberState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/BarberState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is BarberState → GameState. It exposes 4 public/protected members: 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarberState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain BarberState → GameState. The surface is property-led (properties 2/4, methods 0/4), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/BarberState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Filter` | `public IFaceGeneratorCustomFilter Filter` | property |
| `BarberState` | `public BarberState()` | constructor |
| `BarberState` | `public BarberState(BasicCharacterObject character, IFaceGeneratorCustomFilter filter)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
- [same namespace CraftingState](../CraftingState)
