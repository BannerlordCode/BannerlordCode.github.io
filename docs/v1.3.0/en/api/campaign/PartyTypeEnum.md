<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTypeEnum`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTypeEnum

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PartyTypeEnum`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Track.cs`

## Overview

`PartyTypeEnum` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
PartyTypeEnum example = PartyTypeEnum.Value;
```

## See Also

- [Complete Class Catalog](../catalog)