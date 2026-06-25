---
title: "MenuAndOptionType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuAndOptionType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MenuAndOptionType

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum MenuAndOptionType`
**Area:** campaign-ext

## Overview

`MenuAndOptionType` lives in `TaleWorlds.CampaignSystem.GameMenus`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `RegularMenuOption` |
| `WaitMenuShowProgressAndHoursOption` |
| `WaitMenuShowOnlyProgressOption` |

## Usage Example

```csharp
MenuAndOptionType example = MenuAndOptionType.RegularMenuOption;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
