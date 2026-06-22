<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SkillHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### AddSkillBonusForSkillLevel

```csharp
public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)
```

### AddSkillBonusForParty

```csharp
public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)
```

### AddSkillBonusForTown

```csharp
public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)
```

### AddSkillBonusForCharacter

```csharp
public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)
```

### GetEffectDescriptionForSkillLevel

```csharp
public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)
```

### GetEffectivePartyLeaderForSkill

```csharp
public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)