---
title: "MenuOverlayType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuOverlayType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MenuOverlayType

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum MenuOverlayType`
**Area:** campaign-ext

## Overview

`MenuOverlayType` lives in `TaleWorlds.CampaignSystem.GameMenus`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `SettlementWithParties` |
| `SettlementWithCharacters` |
| `SettlementWithBoth` |

## Usage Example

```csharp
MenuOverlayType example = MenuOverlayType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
