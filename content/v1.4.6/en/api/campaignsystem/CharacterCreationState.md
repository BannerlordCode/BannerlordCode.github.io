---
title: "CharacterCreationState"
description: "CharacterCreationState: a public class in TaleWorlds.CampaignSystem, inheriting PlayerGameState; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs."
---
# CharacterCreationState

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterCreationState : PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs`

## Overview

CharacterCreationState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs. It is a public class, implementing/inheriting PlayerGameState; the inheritance chain is CharacterCreationState → PlayerGameState. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CharacterCreationContent) the module directory; inheritance chain CharacterCreationState → PlayerGameState. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. PlayerGameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationManager` | `public CharacterCreationManager CharacterCreationManager` | property |
| `Handler` | `public ICharacterCreationStateHandler Handler` | property |
| `CharacterCreationState` | `public CharacterCreationState()` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `FinalizeCharacterCreationState` | `public void FinalizeCharacterCreationState()` | method |
| `Refresh` | `public void Refresh()` | method |
| `OnStageActivated` | `public void OnStageActivated(CharacterCreationStageBase stage)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [same namespace CharacterCreationContent](../CharacterCreationContent)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage)
