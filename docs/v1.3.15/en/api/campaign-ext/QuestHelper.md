<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `QuestHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### AddMapArrowFromPointToTarget

```csharp
public static void AddMapArrowFromPointToTarget(TextObject name, CampaignVec2 sourcePosition, CampaignVec2 targetPosition, float life, float error)
```

### CheckGoldForAlternativeSolution

```csharp
public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)
```

### GetAlternativeSolutionMeleeSkills

```csharp
public static List<SkillObject> GetAlternativeSolutionMeleeSkills()
```

### CheckRosterForAlternativeSolution

```csharp
public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)
```

### GetAlternativeSolutionRangedSkills

```csharp
public static List<SkillObject> GetAlternativeSolutionRangedSkills()
```

### CheckMinorMajorCoercion

```csharp
public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)
```

### ApplyGenericMinorMajorCoercionConsequences

```csharp
public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)
```

### GetAveragePriceOfItemInTheWorld

```csharp
public static int GetAveragePriceOfItemInTheWorld(ItemObject item)
```

### CheckWarDeclarationAndFailOrCancelTheQuest

```csharp
public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)