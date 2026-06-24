<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyCampaignBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyCampaignBehaviorTypeDefiner

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class AlleyCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`AlleyCampaignBehaviorTypeDefiner` lives in `SandBox.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session launched` event is raised.

### GetIsPlayerAlleyUnderAttack
`public bool GetIsPlayerAlleyUnderAttack(Alley alley)`

**Purpose:** Gets the current value of `is player alley under attack`.

### GetPlayerOwnedAlleyTroopCount
`public int GetPlayerOwnedAlleyTroopCount(Alley alley)`

**Purpose:** Gets the current value of `player owned alley troop count`.

### GetResponseTimeLeftForAttackInDays
`public int GetResponseTimeLeftForAttackInDays(Alley alley)`

**Purpose:** Gets the current value of `response time left for attack in days`.

### AbandonAlleyFromClanMenu
`public void AbandonAlleyFromClanMenu(Alley alley)`

**Purpose:** Handles logic related to `abandon alley from clan menu`.

### IsHeroAlleyLeaderOfAnyPlayerAlley
`public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero)`

**Purpose:** Handles logic related to `is hero alley leader of any player alley`.

### GetAllAssignedClanMembersForOwnedAlleys
`public List<Hero> GetAllAssignedClanMembersForOwnedAlleys()`

**Purpose:** Gets the current value of `all assigned clan members for owned alleys`.

### ChangeAlleyMember
`public void ChangeAlleyMember(Alley alley, Hero newAlleyLead)`

**Purpose:** Handles logic related to `change alley member`.

### OnPlayerRetreatedFromMission
`public void OnPlayerRetreatedFromMission()`

**Purpose:** Called when the `player retreated from mission` event is raised.

### OnPlayerDiedInMission
`public void OnPlayerDiedInMission()`

**Purpose:** Called when the `player died in mission` event is raised.

### GetAssignedClanMemberOfAlley
`public Hero GetAssignedClanMemberOfAlley(Alley alley)`

**Purpose:** Gets the current value of `assigned clan member of alley`.

### alley_related_menu_on_init
`public static void alley_related_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `alley_related_menu_on_init`.

## Usage Example

```csharp
// First obtain a AlleyCampaignBehaviorTypeDefiner instance from game state, then call one of its public methods
var value = new AlleyCampaignBehaviorTypeDefiner();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
