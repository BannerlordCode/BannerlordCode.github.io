---
title: "CharacterCreationContent"
description: "CharacterCreationContent: a public class in TaleWorlds.CampaignSystem.CharacterCreationContent; 27 exposed members (14 methods, 7 properties, 4 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationContent

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class CharacterCreationContent`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

CharacterCreationContent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs. It is a public class (sealed); the inheritance chain is CharacterCreationContent. It exposes 27 public/protected members: 14 methods, 7 properties, 4 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationContent lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterCreationContent`, inheritance chain CharacterCreationContent. The surface is method-led (methods 14/27, properties 7/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectedTitleType` | `public string SelectedTitleType` | property |
| `SelectedParentOccupation` | `public string SelectedParentOccupation` | property |
| `DefaultSelectedTitleType` | `public string DefaultSelectedTitleType` | property |
| `ReviewPageDescription` | `public TextObject ReviewPageDescription` | property |
| `MainCharacterName` | `public string MainCharacterName` | property |
| `SelectedCulture` | `public CultureObject SelectedCulture` | property |
| `SelectedBanner` | `public Banner SelectedBanner` | property |
| `CharacterCreationContent` | `public CharacterCreationContent()` | constructor |
| `AddCharacterCreationCulture` | `public void AddCharacterCreationCulture(CultureObject culture, int focusToAddByCulture, int skillLevelToAddByCulture)` | method |
| `GetFocusToAddByCulture` | `public int GetFocusToAddByCulture(CultureObject culture)` | method |
| `GetSkillLevelToAddByCulture` | `public int GetSkillLevelToAddByCulture(CultureObject culture)` | method |
| `ChangeReviewPageDescription` | `public void ChangeReviewPageDescription(TextObject reviewPageDescription)` | method |
| `SetMainCharacterName` | `public void SetMainCharacterName(string name)` | method |
| `SetParentOccupation` | `public void SetParentOccupation(string occupationType)` | method |
| `ApplySkillAndAttributeEffects` | `public void ApplySkillAndAttributeEffects(List<SkillObject>skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject>traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)` | method |
| `SetMainClanBanner` | `public void SetMainClanBanner(Banner banner)` | method |
| `SetSelectedCulture` | `public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)` | method |
| `ApplyCulture` | `public void ApplyCulture(CharacterCreationManager characterCreationManager)` | method |
| `IEnumerable` | `public IEnumerable<CultureObject>GetCultures()` | method |
| `AddEquipmentToUseGetter` | `public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)` | method |
| `TryGetEquipmentToUse` | `public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)` | method |
| `FocusToAdd` | `public int FocusToAdd` | field |
| `SkillLevelToAdd` | `public int SkillLevelToAdd` | field |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd` | field |
| `StartingAge` | `public int StartingAge` | field |
| `TryGetEquipmentIdDelegate` | `public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId);` | method |
| `TryGetEquipmentIdDelegate` | `public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage/)
- [same namespace CharacterCreationFaceGeneratorStage](../CharacterCreationFaceGeneratorStage/)
