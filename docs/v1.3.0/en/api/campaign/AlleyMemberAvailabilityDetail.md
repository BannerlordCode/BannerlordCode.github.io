<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyMemberAvailabilityDetail`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyMemberAvailabilityDetail

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum AlleyMemberAvailabilityDetail`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## Overview

`AlleyMemberAvailabilityDetail` lives in `TaleWorlds.CampaignSystem.GameComponents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameComponents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
AlleyMemberAvailabilityDetail example = AlleyMemberAvailabilityDetail.Value;
```

## See Also

- [Complete Class Catalog](../catalog)