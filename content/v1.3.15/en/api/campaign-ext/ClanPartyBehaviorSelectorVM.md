---
title: "ClanPartyBehaviorSelectorVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartyBehaviorSelectorVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyBehaviorSelectorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartyBehaviorSelectorVM : SelectorVM<SelectorItemVM>`
**Base:** `SelectorVM<SelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs`

## Overview

`ClanPartyBehaviorSelectorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanUseActions` | `public bool CanUseActions { get; set; }` |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint { get; set; }` |

## Usage Example

```csharp
var value = new ClanPartyBehaviorSelectorVM();
```

## See Also

- [Complete Class Catalog](../catalog)