---
title: "NarrativeMenuOption"
description: "NarrativeMenuOption: a public class in TaleWorlds.CampaignSystem; 9 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs."
---
# NarrativeMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class NarrativeMenuOption`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs`

## Overview

NarrativeMenuOption lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs. It is a public class (sealed); the inheritance chain is NarrativeMenuOption. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NarrativeMenuOption is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CharacterCreationContent) the module directory; inheritance chain NarrativeMenuOption. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PositiveEffectText` | `public TextObject PositiveEffectText` | property |
| `NarrativeMenuOption` | `public NarrativeMenuOption(string stringId, TextObject text, TextObject descriptionText, GetNarrativeMenuOptionArgsDelegate getNarrativeMenuOptionArgs, NarrativeMenuOptionOnConditionDelegate onCondition, NarrativeMenuOptionOnSelectDelegate onSelect, NarrativeMenuOptionOnConsequenceDelegate onConsequence)` | constructor |
| `OnCondition` | `public bool OnCondition(CharacterCreationManager characterCreationManager)` | method |
| `OnSelect` | `public void OnSelect(CharacterCreationManager characterCreationManager)` | method |
| `OnConsequence` | `public void OnConsequence(CharacterCreationManager characterCreationManager)` | method |
| `SetOnCondition` | `public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)` | method |
| `SetOnSelect` | `public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)` | method |
| `SetOnConsequence` | `public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)` | method |
| `ApplyFinalEffects` | `public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [same namespace CharacterCreationContent](../CharacterCreationContent)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage)
