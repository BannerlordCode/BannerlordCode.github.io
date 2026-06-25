---
title: "ItemObjectExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemObjectExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemObjectExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ItemObjectExtensions`
**Area:** campaign-ext

## Overview

`ItemObjectExtensions` lives in `TaleWorlds.CampaignSystem.Extensions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemCategory
`public static ItemCategory GetItemCategory(this ItemObject item)`

**Purpose:** Gets the current value of `item category`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ItemObjectExtensions.GetItemCategory(item);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
