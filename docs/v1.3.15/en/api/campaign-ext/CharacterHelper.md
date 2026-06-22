<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetDeathNotification

```csharp
public static TextObject GetDeathNotification(Hero victimHero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail)
```

### GetDynamicBodyPropertiesBetweenMinMaxRange

```csharp
public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)
```

### GetReputationDescription

```csharp
public static TextObject GetReputationDescription(CharacterObject character)
```

### GetDeterministicColorsForCharacter

```csharp
public static ValueTuple<uint, uint> GetDeterministicColorsForCharacter(CharacterObject character)
```

### GetFaceGeneratorFilter

```csharp
public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()
```

### GetNonconversationPose

```csharp
public static string GetNonconversationPose(CharacterObject character)
```

### GetNonconversationFacialIdle

```csharp
public static string GetNonconversationFacialIdle(CharacterObject character)
```

### GetStandingBodyIdle

```csharp
public static string GetStandingBodyIdle(CharacterObject character, PartyBase party)
```

### GetDefaultFaceIdle

```csharp
public static string GetDefaultFaceIdle(CharacterObject character)
```

### FindUpgradeRootOf

```csharp
public static CharacterObject FindUpgradeRootOf(CharacterObject character)
```

### GetDefaultWeapon

```csharp
public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)
```

### CanUseItemBasedOnSkill

```csharp
public static bool CanUseItemBasedOnSkill(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)
```

### GetPartyMemberFaceSeed

```csharp
public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)
```

### GetDefaultFaceSeed

```csharp
public static int GetDefaultFaceSeed(BasicCharacterObject character, int rank)
```

### SearchForFormationInTroopTree

```csharp
public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)
```

### GetTroopTree

```csharp
public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = 3.4028235E+38f)
```

### DeleteQuestCharacter

```csharp
public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)
```

### GetRandomCompanionTemplateWithPredicate

```csharp
public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)