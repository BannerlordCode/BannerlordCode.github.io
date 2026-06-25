---
title: "SkillHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SkillHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## Overview

`SkillHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SkillHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddSkillBonusForSkillLevel
`public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)`

**Purpose:** Adds `skill bonus for skill level` to the current collection or state.

### AddSkillBonusForParty
`public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)`

**Purpose:** Adds `skill bonus for party` to the current collection or state.

### AddSkillBonusForTown
`public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Adds `skill bonus for town` to the current collection or state.

### AddSkillBonusForCharacter
`public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)`

**Purpose:** Adds `skill bonus for character` to the current collection or state.

### GetEffectDescriptionForSkillLevel
`public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)`

**Purpose:** Gets the current value of `effect description for skill level`.

### GetEffectivePartyLeaderForSkill
`public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)`

**Purpose:** Gets the current value of `effective party leader for skill`.

## Usage Example

```csharp
SkillHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)