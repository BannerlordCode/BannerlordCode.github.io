---
title: "SkillHelper"
description: "Auto-generated class reference for SkillHelper."
---
# SkillHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SkillHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## Overview

`SkillHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SkillHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddSkillBonusForSkillLevel
`public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)`

**Purpose:** Adds skill bonus for skill level to the current collection or state.

```csharp
// Static call; no instance required
SkillHelper.AddSkillBonusForSkillLevel(skillEffect, explainedNumber, 0);
```

### AddSkillBonusForParty
`public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)`

**Purpose:** Adds skill bonus for party to the current collection or state.

```csharp
// Static call; no instance required
SkillHelper.AddSkillBonusForParty(skillEffect, party, explainedNumber);
```

### AddSkillBonusForTown
`public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Adds skill bonus for town to the current collection or state.

```csharp
// Static call; no instance required
SkillHelper.AddSkillBonusForTown(skillEffect, town, explainedNumber);
```

### AddSkillBonusForCharacter
`public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)`

**Purpose:** Adds skill bonus for character to the current collection or state.

```csharp
// Static call; no instance required
SkillHelper.AddSkillBonusForCharacter(skillEffect, character, explainedNumber);
```

### GetEffectDescriptionForSkillLevel
`public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)`

**Purpose:** Reads and returns the effect description for skill level value held by the this instance.

```csharp
// Static call; no instance required
SkillHelper.GetEffectDescriptionForSkillLevel(effect, 0);
```

### GetEffectivePartyLeaderForSkill
`public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)`

**Purpose:** Reads and returns the effective party leader for skill value held by the this instance.

```csharp
// Static call; no instance required
SkillHelper.GetEffectivePartyLeaderForSkill(party);
```

## Usage Example

```csharp
SkillHelper.Initialize();
```

## See Also

- [Area Index](../)