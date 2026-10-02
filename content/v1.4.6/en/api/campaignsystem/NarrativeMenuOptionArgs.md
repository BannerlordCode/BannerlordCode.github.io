---
title: "NarrativeMenuOptionArgs"
description: "NarrativeMenuOptionArgs: a public class in TaleWorlds.CampaignSystem; 22 exposed members (9 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs."
---
# NarrativeMenuOptionArgs

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NarrativeMenuOptionArgs`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs`

## Overview

NarrativeMenuOptionArgs lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs. It is a public class; the inheritance chain is NarrativeMenuOptionArgs. It exposes 22 public/protected members: 9 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NarrativeMenuOptionArgs is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CharacterCreationContent) the module directory; inheritance chain NarrativeMenuOptionArgs. The surface is property-led (properties 12/22, methods 9/22), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public MBList<SkillObject>AffectedSkills` | property |
| `SkillLevelToAdd` | `public int SkillLevelToAdd` | property |
| `MBList` | `public MBList<TraitObject>AffectedTraits` | property |
| `TraitLevelToAdd` | `public int TraitLevelToAdd` | property |
| `FocusToAdd` | `public int FocusToAdd` | property |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd` | property |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute` | property |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd` | property |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd` | property |
| `RenownToAdd` | `public int RenownToAdd` | property |
| `GoldToAdd` | `public int GoldToAdd` | property |
| `PositiveEffectText` | `public TextObject PositiveEffectText` | property |
| `NarrativeMenuOptionArgs` | `public NarrativeMenuOptionArgs()` | constructor |
| `SetAffectedSkills` | `public void SetAffectedSkills(SkillObject[]affectedSkills)` | method |
| `SetFocusToSkills` | `public void SetFocusToSkills(int focusToAdd)` | method |
| `SetLevelToSkills` | `public void SetLevelToSkills(int levelToAdd)` | method |
| `SetAffectedTraits` | `public void SetAffectedTraits(TraitObject[]affectedTraits)` | method |
| `SetLevelToTraits` | `public void SetLevelToTraits(int levelToAdd)` | method |
| `SetLevelToAttribute` | `public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)` | method |
| `SetRenownToAdd` | `public void SetRenownToAdd(int value)` | method |
| `SetUnspentFocusToAdd` | `public void SetUnspentFocusToAdd(int value)` | method |
| `SetUnspentAttributeToAdd` | `public void SetUnspentAttributeToAdd(int value)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [same namespace CharacterCreationContent](../CharacterCreationContent)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage)
