---
title: "CharacterCreationContent"
description: "Auto-generated class reference for CharacterCreationContent."
---
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

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.AddCharacterCreationCulture(culture, 0, 0);
```

### GetFocusToAddByCulture
`public int GetFocusToAddByCulture(CultureObject culture)`

**Purpose:** Reads and returns the `focus to add by culture` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.GetFocusToAddByCulture(culture);
```

### GetSkillLevelToAddByCulture
`public int GetSkillLevelToAddByCulture(CultureObject culture)`

**Purpose:** Reads and returns the `skill level to add by culture` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.GetSkillLevelToAddByCulture(culture);
```

### ChangeReviewPageDescription
`public void ChangeReviewPageDescription(TextObject reviewPageDescription)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.ChangeReviewPageDescription(reviewPageDescription);
```

### SetMainCharacterName
`public void SetMainCharacterName(string name)`

**Purpose:** Assigns a new value to `main character name` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetMainCharacterName("example");
```

### SetParentOccupation
`public void SetParentOccupation(string occupationType)`

**Purpose:** Assigns a new value to `parent occupation` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetParentOccupation("example");
```

### ApplySkillAndAttributeEffects
`public void ApplySkillAndAttributeEffects(List<SkillObject> skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject> traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)`

**Purpose:** Applies the effect of `skill and attribute effects` to the current object.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.ApplySkillAndAttributeEffects(skills, 0, 0, attribute, 0, null, 0, 0, 0, 0, 0);
```

### SetMainClanBanner
`public void SetMainClanBanner(Banner banner)`

**Purpose:** Assigns a new value to `main clan banner` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetMainClanBanner(banner);
```

### SetSelectedCulture
`public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)`

**Purpose:** Assigns a new value to `selected culture` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetSelectedCulture(culture, characterCreationManager);
```

### ApplyCulture
`public void ApplyCulture(CharacterCreationManager characterCreationManager)`

**Purpose:** Applies the effect of `culture` to the current object.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.ApplyCulture(characterCreationManager);
```

### GetCultures
`public IEnumerable<CultureObject> GetCultures()`

**Purpose:** Reads and returns the `cultures` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.GetCultures();
```

### AddEquipmentToUseGetter
`public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)`

**Purpose:** Adds `equipment to use getter` to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.AddEquipmentToUseGetter(tryGetEquipmentIdDelegate);
```

### TryGetEquipmentToUse
`public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)`

**Purpose:** Attempts to retrieve `get equipment to use`, usually returning success through an out parameter.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.TryGetEquipmentToUse("example", equipmentId);
```

### TryGetEquipmentIdDelegate
`public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)`

**Purpose:** Attempts to retrieve `get equipment id delegate`, usually returning success through an out parameter.

```csharp
// Obtain an instance of CharacterCreationContent from the subsystem API first
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.TryGetEquipmentIdDelegate("example", equipmentId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.AddCharacterCreationCulture(culture, 0, 0);
```

## See Also

- [Area Index](../)