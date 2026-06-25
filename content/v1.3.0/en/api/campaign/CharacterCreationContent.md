---
title: "CharacterCreationContent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationContent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationContent

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterCreationContent`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs`

## Overview

`CharacterCreationContent` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedTitleType` | `public string SelectedTitleType { get; }` |
| `SelectedParentOccupation` | `public string SelectedParentOccupation { get; }` |
| `DefaultSelectedTitleType` | `public string DefaultSelectedTitleType { get; }` |
| `ReviewPageDescription` | `public TextObject ReviewPageDescription { get; }` |
| `MainCharacterName` | `public string MainCharacterName { get; }` |
| `SelectedCulture` | `public CultureObject SelectedCulture { get; }` |
| `SelectedBanner` | `public Banner SelectedBanner { get; }` |

## Key Methods

### AddCharacterCreationCulture
`public void AddCharacterCreationCulture(CultureObject culture, int focusToAddByCulture, int skillLevelToAddByCulture)`

**Purpose:** Adds `character creation culture` to the current collection or state.

### GetFocusToAddByCulture
`public int GetFocusToAddByCulture(CultureObject culture)`

**Purpose:** Gets the current value of `focus to add by culture`.

### GetSkillLevelToAddByCulture
`public int GetSkillLevelToAddByCulture(CultureObject culture)`

**Purpose:** Gets the current value of `skill level to add by culture`.

### ChangeReviewPageDescription
`public void ChangeReviewPageDescription(TextObject reviewPageDescription)`

**Purpose:** Handles logic related to `change review page description`.

### SetMainCharacterName
`public void SetMainCharacterName(string name)`

**Purpose:** Sets the value or state of `main character name`.

### SetParentOccupation
`public void SetParentOccupation(string occupationType)`

**Purpose:** Sets the value or state of `parent occupation`.

### ApplySkillAndAttributeEffects
`public void ApplySkillAndAttributeEffects(List<SkillObject> skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject> traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)`

**Purpose:** Applies `skill and attribute effects` to the current object.

### SetMainClanBanner
`public void SetMainClanBanner(Banner banner)`

**Purpose:** Sets the value or state of `main clan banner`.

### SetSelectedCulture
`public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)`

**Purpose:** Sets the value or state of `selected culture`.

### ApplyCulture
`public void ApplyCulture(CharacterCreationManager characterCreationManager)`

**Purpose:** Applies `culture` to the current object.

### GetCultures
`public IEnumerable<CultureObject> GetCultures()`

**Purpose:** Gets the current value of `cultures`.

### AddEquipmentToUseGetter
`public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)`

**Purpose:** Adds `equipment to use getter` to the current collection or state.

### TryGetEquipmentToUse
`public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)`

**Purpose:** Attempts to get `get equipment to use`, usually returning the result in an out parameter.

### TryGetEquipmentIdDelegate
`public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)`

**Purpose:** Attempts to get `get equipment id delegate`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new CharacterCreationContent();
value.AddCharacterCreationCulture(culture, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)