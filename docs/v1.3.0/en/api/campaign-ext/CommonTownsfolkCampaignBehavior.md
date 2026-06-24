<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommonTownsfolkCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommonTownsfolkCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`

## Overview

`CommonTownsfolkCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetActionSetSuffixAndMonsterForItem
`public static string GetActionSetSuffixAndMonsterForItem(string itemId, int race, bool isFemale, out Monster monster)`

**Purpose:** Gets the current value of `action set suffix and monster for item`.

### GetRandomTownsManActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsManActionSetAndMonster(int race)`

**Purpose:** Gets the current value of `random towns man action set and monster`.

### GetRandomTownsWomanActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsWomanActionSetAndMonster(int race)`

**Purpose:** Gets the current value of `random towns woman action set and monster`.

### CreateBroomsWoman
`public static LocationCharacter CreateBroomsWoman(CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Creates a new `brooms woman` instance or object.

### CreateMaleBeggar
`public static LocationCharacter CreateMaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Creates a new `male beggar` instance or object.

### CreateFemaleBeggar
`public static LocationCharacter CreateFemaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Creates a new `female beggar` instance or object.

## Usage Example

```csharp
var value = new CommonTownsfolkCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)