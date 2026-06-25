---
title: "ItemMenuTooltipPropertyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemMenuTooltipPropertyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemMenuTooltipPropertyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemMenuTooltipPropertyVM : TooltipProperty`
**Base:** `TooltipProperty`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs`

## Overview

`ItemMenuTooltipPropertyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyHint` | `public HintViewModel PropertyHint { get; set; }` |

## Usage Example

```csharp
var value = new ItemMenuTooltipPropertyVM();
```

## See Also

- [Complete Class Catalog](../catalog)