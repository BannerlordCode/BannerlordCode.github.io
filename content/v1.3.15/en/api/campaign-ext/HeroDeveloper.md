---
title: "HeroDeveloper"
description: "Auto-generated class reference for HeroDeveloper."
---
# HeroDeveloper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroDeveloper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

## Overview

`HeroDeveloper` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UnspentFocusPoints` | `public int UnspentFocusPoints { get; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; }` |
| `IsDeveloperInitialized` | `public bool IsDeveloperInitialized { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `TotalXp` | `public int TotalXp { get; }` |

## Key Methods

### GetSkillXpProgress
`public int GetSkillXpProgress(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the skill xp progress value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetSkillXpProgress(skill);
```

### GetSkillXp
`public float GetSkillXp(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the skill xp value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetSkillXp(skill);
```

### ClearUnspentPoints
`public void ClearUnspentPoints()`

**Purpose:** **Purpose:** Removes all unspent points from the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ClearUnspentPoints();
```

### ClearHero
`public void ClearHero()`

**Purpose:** **Purpose:** Removes all hero from the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ClearHero();
```

### InitializeHeroDeveloper
`public void InitializeHeroDeveloper()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by hero developer.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.InitializeHeroDeveloper();
```

### DevelopCharacterStats
`public void DevelopCharacterStats()`

**Purpose:** **Purpose:** Executes the DevelopCharacterStats logic.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.DevelopCharacterStats();
```

### GetTotalSkillPoints
`public int GetTotalSkillPoints()`

**Purpose:** **Purpose:** Reads and returns the total skill points value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetTotalSkillPoints();
```

### ChangeSkillLevel
`public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)`

**Purpose:** **Purpose:** Executes the ChangeSkillLevel logic.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ChangeSkillLevel(skill, 0, false);
```

### SetInitialSkillLevel
`public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)`

**Purpose:** **Purpose:** Assigns a new value to initial skill level and updates the object's internal state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.SetInitialSkillLevel(skill, 0);
```

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)`

**Purpose:** **Purpose:** Adds skill xp to the current collection or state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddSkillXp(skill, 0, false, false);
```

### GetFocusFactor
`public float GetFocusFactor(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the focus factor value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetFocusFactor(skill);
```

### CheckLevel
`public void CheckLevel(bool shouldNotify)`

**Purpose:** **Purpose:** Verifies whether level holds true for the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.CheckLevel(false);
```

### SetInitialLevel
`public void SetInitialLevel(int level)`

**Purpose:** **Purpose:** Assigns a new value to initial level and updates the object's internal state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.SetInitialLevel(0);
```

### AddPerk
`public void AddPerk(PerkObject perk)`

**Purpose:** **Purpose:** Adds perk to the current collection or state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddPerk(perk);
```

### GetXpRequiredForLevel
`public int GetXpRequiredForLevel(int level)`

**Purpose:** **Purpose:** Reads and returns the xp required for level value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetXpRequiredForLevel(0);
```

### RemoveAttribute
`public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)`

**Purpose:** **Purpose:** Removes attribute from the current collection or state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.RemoveAttribute(attrib, 0);
```

### AddAttribute
`public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)`

**Purpose:** **Purpose:** Adds attribute to the current collection or state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddAttribute(attrib, 0, false);
```

### AddFocus
`public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)`

**Purpose:** **Purpose:** Adds focus to the current collection or state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddFocus(skill, 0, false);
```

### RemoveFocus
`public void RemoveFocus(SkillObject skill, int changeAmount)`

**Purpose:** **Purpose:** Removes focus from the current collection or state.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.RemoveFocus(skill, 0);
```

### CanAddFocusToSkill
`public bool CanAddFocusToSkill(SkillObject skill)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for add focus to skill.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.CanAddFocusToSkill(skill);
```

### GetRequiredFocusPointsToAddFocus
`public int GetRequiredFocusPointsToAddFocus(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the required focus points to add focus value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetRequiredFocusPointsToAddFocus(skill);
```

### GetFocus
`public int GetFocus(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the focus value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetFocus(skill);
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** **Purpose:** Reads and returns the perk value value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetPerkValue(perk);
```

### InitializeSkillXp
`public void InitializeSkillXp(SkillObject skill)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by skill xp.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.InitializeSkillXp(skill);
```

### AfterLoad
`public void AfterLoad()`

**Purpose:** **Purpose:** Executes the AfterLoad logic.

```csharp
// Obtain an instance of HeroDeveloper from the subsystem API first
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AfterLoad();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeroDeveloper heroDeveloper = ...;
heroDeveloper.GetSkillXpProgress(skill);
```

## See Also

- [Area Index](../)