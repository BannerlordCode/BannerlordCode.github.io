<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameGenerator`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NameGenerator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NameGenerator`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/NameGenerator.cs`

## Overview

`NameGenerator` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GenerateHeroNameAndHeroFullName
`public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)`

**Purpose:** Handles logic related to `generate hero name and hero full name`.

### GenerateHeroFirstName
`public TextObject GenerateHeroFirstName(Hero hero)`

**Purpose:** Handles logic related to `generate hero first name`.

### GenerateFirstNameForPlayer
`public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)`

**Purpose:** Handles logic related to `generate first name for player`.

### GenerateClanName
`public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)`

**Purpose:** Handles logic related to `generate clan name`.

### GetNameListForCulture
`public MBReadOnlyList<TextObject> GetNameListForCulture(CultureObject npcCulture, bool isFemale)`

**Purpose:** Gets the current value of `name list for culture`.

### AddName
`public void AddName(TextObject name)`

**Purpose:** Adds `name` to the current collection or state.

## Usage Example

```csharp
var value = new NameGenerator();
value.GenerateHeroNameAndHeroFullName(hero, firstName, fullName, false);
```

## See Also

- [Complete Class Catalog](../catalog)