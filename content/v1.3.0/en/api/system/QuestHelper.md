---
title: "QuestHelper"
description: "Auto-generated class reference for QuestHelper."
---
# QuestHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class QuestHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/QuestHelper.cs`

## Overview

`QuestHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `QuestHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddMapArrowFromPointToTarget
`public static void AddMapArrowFromPointToTarget(TextObject name, CampaignVec2 sourcePosition, CampaignVec2 targetPosition, float life, float error)`

**Purpose:** **Purpose:** Adds map arrow from point to target to the current collection or state.

```csharp
// Static call; no instance required
QuestHelper.AddMapArrowFromPointToTarget(name, sourcePosition, targetPosition, 0, 0);
```

### CheckGoldForAlternativeSolution
`public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)`

**Purpose:** **Purpose:** Verifies whether gold for alternative solution holds true for the this instance.

```csharp
// Static call; no instance required
QuestHelper.CheckGoldForAlternativeSolution(0, explanation);
```

### GetAlternativeSolutionMeleeSkills
`public static List<SkillObject> GetAlternativeSolutionMeleeSkills()`

**Purpose:** **Purpose:** Reads and returns the alternative solution melee skills value held by the this instance.

```csharp
// Static call; no instance required
QuestHelper.GetAlternativeSolutionMeleeSkills();
```

### CheckRosterForAlternativeSolution
`public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)`

**Purpose:** **Purpose:** Verifies whether roster for alternative solution holds true for the this instance.

```csharp
// Static call; no instance required
QuestHelper.CheckRosterForAlternativeSolution(troopRoster, 0, explanation, 0, false);
```

### GetAlternativeSolutionRangedSkills
`public static List<SkillObject> GetAlternativeSolutionRangedSkills()`

**Purpose:** **Purpose:** Reads and returns the alternative solution ranged skills value held by the this instance.

```csharp
// Static call; no instance required
QuestHelper.GetAlternativeSolutionRangedSkills();
```

### CheckMinorMajorCoercion
`public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)`

**Purpose:** **Purpose:** Verifies whether minor major coercion holds true for the this instance.

```csharp
// Static call; no instance required
QuestHelper.CheckMinorMajorCoercion(questToCheck, mapEvent, attackerParty);
```

### ApplyGenericMinorMajorCoercionConsequences
`public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)`

**Purpose:** **Purpose:** Applies the effect of generic minor major coercion consequences to the this instance.

```csharp
// Static call; no instance required
QuestHelper.ApplyGenericMinorMajorCoercionConsequences(quest, mapEvent);
```

### GetAveragePriceOfItemInTheWorld
`public static int GetAveragePriceOfItemInTheWorld(ItemObject item)`

**Purpose:** **Purpose:** Reads and returns the average price of item in the world value held by the this instance.

```csharp
// Static call; no instance required
QuestHelper.GetAveragePriceOfItemInTheWorld(item);
```

### CheckWarDeclarationAndFailOrCancelTheQuest
`public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)`

**Purpose:** **Purpose:** Verifies whether war declaration and fail or cancel the quest holds true for the this instance.

```csharp
// Static call; no instance required
QuestHelper.CheckWarDeclarationAndFailOrCancelTheQuest(questToCheck, faction1, faction2, detail, failLog, cancelLog, false);
```

## Usage Example

```csharp
QuestHelper.Initialize();
```

## See Also

- [Area Index](../)