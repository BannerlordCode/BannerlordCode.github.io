<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AiArmyMemberBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AiArmyMemberBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AiArmyMemberBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiArmyMemberBehavior.cs`

## Overview

`AiArmyMemberBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### AiHourlyTick
`public void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`

**Purpose:** Handles logic related to `ai hourly tick`.

## Usage Example

```csharp
var value = new AiArmyMemberBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)