---
title: "TroopType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopType

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum TroopType`
**Area:** campaign-ext

## Overview

`TroopType` lives in `TaleWorlds.CampaignSystem.Party`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Member` |
| `1` |
| `Prisoner` |
| `2` |
| `None` |

## Usage Example

```csharp
TroopType example = TroopType.Member;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
