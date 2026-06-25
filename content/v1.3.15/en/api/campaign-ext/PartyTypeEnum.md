---
title: "PartyTypeEnum"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTypeEnum`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTypeEnum

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PartyTypeEnum`
**Area:** campaign-ext

## Overview

`PartyTypeEnum` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Default` |
| `Lord` |
| `Bandit` |
| `Villager` |
| `GarrisonParty` |
| `PartyTypesCount` |

## Usage Example

```csharp
PartyTypeEnum example = PartyTypeEnum.Default;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
