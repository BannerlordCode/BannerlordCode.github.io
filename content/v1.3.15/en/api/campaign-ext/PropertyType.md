---
title: "PropertyType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyType

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PropertyType`
**Area:** campaign-ext

## Overview

`PropertyType` lives in `TaleWorlds.CampaignSystem.ViewModelCollection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Tax` |
| `Tariff` |
| `Garrison` |
| `Village` |

## Usage Example

```csharp
PropertyType example = PropertyType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
