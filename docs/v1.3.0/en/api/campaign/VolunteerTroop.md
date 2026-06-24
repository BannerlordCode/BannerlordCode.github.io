<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VolunteerTroop`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VolunteerTroop

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct VolunteerTroop : IComparable`
**Base:** `IComparable`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs`

## Overview

`VolunteerTroop` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new VolunteerTroop();
value.CompareTo(obj);
```

## See Also

- [Complete Class Catalog](../catalog)