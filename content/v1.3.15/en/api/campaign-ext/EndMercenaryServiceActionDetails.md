---
title: "EndMercenaryServiceActionDetails"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndMercenaryServiceActionDetails`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EndMercenaryServiceActionDetails

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum EndMercenaryServiceActionDetails`
**Area:** campaign-ext

## Overview

`EndMercenaryServiceActionDetails` lives in `TaleWorlds.CampaignSystem.Actions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ApplyByDefault` |
| `ApplyByLeavingKingdom` |

## Usage Example

```csharp
EndMercenaryServiceActionDetails example = EndMercenaryServiceActionDetails.ApplyByDefault;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
