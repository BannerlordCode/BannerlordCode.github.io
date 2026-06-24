<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SupportWeights`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SupportWeights

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum SupportWeights`
**Area:** campaign-ext

## Overview

`SupportWeights` lives in `TaleWorlds.CampaignSystem.Election`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Choose` |
| `StayNeutral` |
| `SlightlyFavor` |
| `StronglyFavor` |

## Usage Example

```csharp
SupportWeights example = SupportWeights.Choose;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
