<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AiVisitSettlementBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AiVisitSettlementBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AiVisitSettlementBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs`

## Overview

`AiVisitSettlementBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### CompareTo
`public int CompareTo(AiVisitSettlementBehavior.SettlementNavigationData otherSettlementNavigationData)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new AiVisitSettlementBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)