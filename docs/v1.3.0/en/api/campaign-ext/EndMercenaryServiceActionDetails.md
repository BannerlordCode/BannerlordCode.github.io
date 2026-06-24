<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndMercenaryServiceActionDetails`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EndMercenaryServiceActionDetails

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum EndMercenaryServiceActionDetails`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

## Overview

`EndMercenaryServiceActionDetails` lives in `TaleWorlds.CampaignSystem.Actions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
EndMercenaryServiceActionDetails example = EndMercenaryServiceActionDetails.Value;
```

## See Also

- [Complete Class Catalog](../catalog)