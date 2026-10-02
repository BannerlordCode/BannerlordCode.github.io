---
title: "BannerEditorState"
description: "BannerEditorState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 7 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerEditorState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerEditorState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

BannerEditorState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is BannerEditorState → GameState → MBObjectBase. It exposes 7 public/protected members: 3 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerEditorState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain BannerEditorState → GameState → MBObjectBase. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Handler` | `public IBannerEditorStateHandler Handler` | property |
| `BannerEditorState` | `public BannerEditorState()` | constructor |
| `BannerEditorState` | `public BannerEditorState(Action endAction)` | constructor |
| `GetClan` | `public Clan GetClan()` | method |
| `GetCharacter` | `public CharacterObject GetCharacter()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
- [same namespace CraftingState](../CraftingState/)
