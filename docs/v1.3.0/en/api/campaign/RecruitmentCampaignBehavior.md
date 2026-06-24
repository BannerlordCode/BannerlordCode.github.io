<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitmentCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitmentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs`

## Overview

`RecruitmentCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetMercenaryData
`public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)`

**Purpose:** Gets the current value of `mercenary data`.

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### OnBeforeSettlementEntered
`public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `before settlement entered` event is raised.

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**Purpose:** Handles logic related to `change mercenary type`.

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**Purpose:** Handles logic related to `change mercenary count`.

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**Purpose:** Checks whether the current object has/contains `available mercenary`.

## Usage Example

```csharp
var value = new RecruitmentCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)