<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeleportationCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeleportationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TeleportationCampaignBehavior : CampaignBehaviorBase, ITeleportationCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TeleportationCampaignBehavior.cs`

## Overview

`TeleportationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetTargetOfTeleportingHero
`public bool GetTargetOfTeleportingHero(Hero teleportingHero, out bool isGovernor, out bool isPartyLeader, out IMapPoint target)`

**Purpose:** Gets the current value of `target of teleporting hero`.

### GetHeroArrivalTimeToDestination
`public CampaignTime GetHeroArrivalTimeToDestination(Hero teleportingHero)`

**Purpose:** Gets the current value of `hero arrival time to destination`.

## Usage Example

```csharp
var value = new TeleportationCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)