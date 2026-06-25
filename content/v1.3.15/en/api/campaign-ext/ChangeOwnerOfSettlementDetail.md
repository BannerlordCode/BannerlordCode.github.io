---
title: "ChangeOwnerOfSettlementDetail"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeOwnerOfSettlementDetail`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeOwnerOfSettlementDetail

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum ChangeOwnerOfSettlementDetail`
**Area:** campaign-ext

## Overview

`ChangeOwnerOfSettlementDetail` lives in `TaleWorlds.CampaignSystem.Actions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Default` |
| `BySiege` |
| `ByBarter` |
| `ByLeaveFaction` |
| `ByKingDecision` |
| `ByGift` |
| `ByRebellion` |

## Usage Example

```csharp
ChangeOwnerOfSettlementDetail example = ChangeOwnerOfSettlementDetail.Default;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
