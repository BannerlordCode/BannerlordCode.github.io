---
title: "QuestHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `map arrow from point to target` to the current collection or state.

### CheckGoldForAlternativeSolution
`public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)`

**Purpose:** Handles logic related to `check gold for alternative solution`.

### GetAlternativeSolutionMeleeSkills
`public static List<SkillObject> GetAlternativeSolutionMeleeSkills()`

**Purpose:** Gets the current value of `alternative solution melee skills`.

### CheckRosterForAlternativeSolution
`public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)`

**Purpose:** Handles logic related to `check roster for alternative solution`.

### GetAlternativeSolutionRangedSkills
`public static List<SkillObject> GetAlternativeSolutionRangedSkills()`

**Purpose:** Gets the current value of `alternative solution ranged skills`.

### CheckMinorMajorCoercion
`public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)`

**Purpose:** Handles logic related to `check minor major coercion`.

### ApplyGenericMinorMajorCoercionConsequences
`public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)`

**Purpose:** Applies `generic minor major coercion consequences` to the current object.

### GetAveragePriceOfItemInTheWorld
`public static int GetAveragePriceOfItemInTheWorld(ItemObject item)`

**Purpose:** Gets the current value of `average price of item in the world`.

### CheckWarDeclarationAndFailOrCancelTheQuest
`public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)`

**Purpose:** Handles logic related to `check war declaration and fail or cancel the quest`.

## Usage Example

```csharp
QuestHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)