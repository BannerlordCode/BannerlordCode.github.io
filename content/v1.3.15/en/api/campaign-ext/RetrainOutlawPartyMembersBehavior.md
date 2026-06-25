---
title: "RetrainOutlawPartyMembersBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RetrainOutlawPartyMembersBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RetrainOutlawPartyMembersBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetrainOutlawPartyMembersBehavior : CampaignBehaviorBase, IRetrainOutlawPartyMembersCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RetrainOutlawPartyMembersBehavior.cs`

## Overview

`RetrainOutlawPartyMembersBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetRetrainedNumber
`public int GetRetrainedNumber(CharacterObject character)`

**Purpose:** Gets the current value of `retrained number`.

### SetRetrainedNumber
`public void SetRetrainedNumber(CharacterObject character, int number)`

**Purpose:** Sets the value or state of `retrained number`.

## Usage Example

```csharp
var value = new RetrainOutlawPartyMembersBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)