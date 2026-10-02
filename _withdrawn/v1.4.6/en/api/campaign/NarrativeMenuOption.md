---
title: "NarrativeMenuOption"
description: "NarrativeMenuOption: a public class in TaleWorlds.CampaignSystem.CharacterCreationContent; 9 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NarrativeMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class NarrativeMenuOption`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

NarrativeMenuOption lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs. It is a public class (sealed); the inheritance chain is NarrativeMenuOption. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NarrativeMenuOption lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterCreationContent`, inheritance chain NarrativeMenuOption. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [same namespace CharacterCreationContent](../CharacterCreationContent/)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage/)
