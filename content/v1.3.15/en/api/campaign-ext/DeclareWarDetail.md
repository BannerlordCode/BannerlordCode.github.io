---
title: "DeclareWarDetail"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeclareWarDetail`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeclareWarDetail

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum DeclareWarDetail`
**Area:** campaign-ext

## Overview

`DeclareWarDetail` lives in `TaleWorlds.CampaignSystem.Actions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Default` |
| `CausedByPlayerHostility` |
| `CausedByKingdomDecision` |
| `CausedByRebellion` |
| `CausedByCrimeRatingChange` |
| `CausedByKingdomCreation` |
| `CausedByClaimOnThrone` |

## Usage Example

```csharp
DeclareWarDetail example = DeclareWarDetail.Default;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
