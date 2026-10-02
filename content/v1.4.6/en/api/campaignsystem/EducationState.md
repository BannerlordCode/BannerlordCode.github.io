---
title: "EducationState"
description: "EducationState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 5 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/EducationState.cs."
---
# EducationState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EducationState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/EducationState.cs`

## Overview

EducationState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/EducationState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is EducationState → GameState. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain EducationState → GameState. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/EducationState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Child` | `public Hero Child` | property |
| `Handler` | `public IEducationStateHandler Handler` | property |
| `EducationState` | `public EducationState()` | constructor |
| `EducationState` | `public EducationState(Hero child)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
