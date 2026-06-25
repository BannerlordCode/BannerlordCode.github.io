---
title: "ClanPartyType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartyType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyType

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum ClanPartyType`
**Area:** campaign-ext

## Overview

`ClanPartyType` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Main` |
| `Member` |
| `Caravan` |

## Usage Example

```csharp
ClanPartyType example = ClanPartyType.Main;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
