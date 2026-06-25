---
title: "HeroDeveloper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroDeveloper`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/HeroDeveloper](/versions/HeroDeveloper)
<!-- END BREADCRUMB -->
# HeroDeveloper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroDeveloper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/HeroDeveloper.cs`

## Overview

`HeroDeveloper` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UnspentFocusPoints` | `public int UnspentFocusPoints { get; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `TotalXp` | `public int TotalXp { get; }` |

## Key Methods

### GetSkillXpProgress
`public int GetSkillXpProgress(SkillObject skill)`

**Purpose:** Gets the current value of `skill xp progress`.

### GetSkillXp
`public float GetSkillXp(SkillObject skill)`

**Purpose:** Gets the current value of `skill xp`.

### ClearUnspentPoints
`public void ClearUnspentPoints()`

**Purpose:** Handles logic related to `clear unspent points`.

### ResetCharacterStats
`public void ResetCharacterStats()`

**Purpose:** Resets `character stats` to its initial state.

### ClearHero
`public void ClearHero()`

**Purpose:** Handles logic related to `clear hero`.

### InitializeHeroDeveloper
`public void InitializeHeroDeveloper()`

**Purpose:** Initializes the state, resources, or bindings for `hero developer`.

### DevelopCharacterStats
`public void DevelopCharacterStats()`

**Purpose:** Handles logic related to `develop character stats`.

### GetTotalSkillPoints
`public int GetTotalSkillPoints()`

**Purpose:** Gets the current value of `total skill points`.

### ChangeSkillLevel
`public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)`

**Purpose:** Handles logic related to `change skill level`.

### SetInitialSkillLevel
`public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)`

**Purpose:** Sets the value or state of `initial skill level`.

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)`

**Purpose:** Adds `skill xp` to the current collection or state.

### GetFocusFactor
`public float GetFocusFactor(SkillObject skill)`

**Purpose:** Gets the current value of `focus factor`.

### CheckLevel
`public void CheckLevel(bool shouldNotify)`

**Purpose:** Handles logic related to `check level`.

### ResetTotalXpForPlayerCharacter
`public void ResetTotalXpForPlayerCharacter()`

**Purpose:** Resets `total xp for player character` to its initial state.

### SetInitialLevel
`public void SetInitialLevel(int level)`

**Purpose:** Sets the value or state of `initial level`.

### AddPerk
`public void AddPerk(PerkObject perk)`

**Purpose:** Adds `perk` to the current collection or state.

### GetXpRequiredForLevel
`public int GetXpRequiredForLevel(int level)`

**Purpose:** Gets the current value of `xp required for level`.

### RemoveAttribute
`public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)`

**Purpose:** Removes `attribute` from the current collection or state.

### AddAttribute
`public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)`

**Purpose:** Adds `attribute` to the current collection or state.

### AddFocus
`public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)`

**Purpose:** Adds `focus` to the current collection or state.

### RemoveFocus
`public void RemoveFocus(SkillObject skill, int changeAmount)`

**Purpose:** Removes `focus` from the current collection or state.

### CanAddFocusToSkill
`public bool CanAddFocusToSkill(SkillObject skill)`

**Purpose:** Checks whether the current object can `add focus to skill`.

### GetRequiredFocusPointsToAddFocus
`public int GetRequiredFocusPointsToAddFocus(SkillObject skill)`

**Purpose:** Gets the current value of `required focus points to add focus`.

### GetFocus
`public int GetFocus(SkillObject skill)`

**Purpose:** Gets the current value of `focus`.

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** Gets the current value of `perk value`.

### InitializeSkillXp
`public void InitializeSkillXp(SkillObject skill)`

**Purpose:** Initializes the state, resources, or bindings for `skill xp`.

### AfterLoad
`public void AfterLoad()`

**Purpose:** Handles logic related to `after load`.

## Usage Example

```csharp
var value = new HeroDeveloper();
value.GetSkillXpProgress(skill);
```

## See Also

- [Complete Class Catalog](../catalog)