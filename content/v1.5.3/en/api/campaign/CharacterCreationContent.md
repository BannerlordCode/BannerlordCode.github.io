---
title: "CharacterCreationContent"
description: "Auto-generated class reference for CharacterCreationContent."
---
# CharacterCreationContent

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterCreationContent `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs

## Overview

Auto-generated stub for `CharacterCreationContent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddCharacterCreationCulture
`public void AddCharacterCreationCulture(CultureObject culture,int focusToAddByCulture,int skillLevelToAddByCulture)`

### GetFocusToAddByCulture
`public int GetFocusToAddByCulture(CultureObject culture)`

### GetSkillLevelToAddByCulture
`public int GetSkillLevelToAddByCulture(CultureObject culture)`

### ChangeReviewPageDescription
`public void ChangeReviewPageDescription(TextObject reviewPageDescription)`

### SetMainCharacterName
`public void SetMainCharacterName(string name)`

### SetParentOccupation
`public void SetParentOccupation(string occupationType)`

### ApplySkillAndAttributeEffects
`public void ApplySkillAndAttributeEffects(List<SkillObject> skills,int focusToAdd,int skillLevelToAdd,CharacterAttribute attribute,int attributeLevelToAdd,List<TraitObject> traits = null,int traitLevelToAdd = 0,int renownToAdd = 0,int goldToAdd = 0,int unspentFocusPoints = 0,int unspentAttributePoints = 0)`

### SetMainClanBanner
`public void SetMainClanBanner(Banner banner)`

### SetSelectedCulture
`public void SetSelectedCulture(CultureObject culture,CharacterCreationManager characterCreationManager)`

### ApplyCulture
`public void ApplyCulture(CharacterCreationManager characterCreationManager)`

### GetCultures
`public IEnumerable<CultureObject> GetCultures()`

### AddEquipmentToUseGetter
`public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)`

### TryGetEquipmentToUse
`public bool TryGetEquipmentToUse(string occupationId,out string equipmentId)`

### TryGetEquipmentIdDelegate
`public delegate bool TryGetEquipmentIdDelegate(string occupationId,out string equipmentId)`

## See Also

- [Section index](../)
