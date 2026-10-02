---
title: "BarberState"
description: "BarberState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 4 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/BarberState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarberState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarberState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BarberState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

BarberState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/BarberState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is BarberState → GameState → MBObjectBase. It exposes 4 public/protected members: 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarberState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain BarberState → GameState → MBObjectBase. The surface is property-led (properties 2/4, methods 0/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/BarberState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Filter` | `public IFaceGeneratorCustomFilter Filter` | property |
| `BarberState` | `public BarberState()` | constructor |
| `BarberState` | `public BarberState(BasicCharacterObject character, IFaceGeneratorCustomFilter filter)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
- [same namespace CraftingState](../CraftingState/)
