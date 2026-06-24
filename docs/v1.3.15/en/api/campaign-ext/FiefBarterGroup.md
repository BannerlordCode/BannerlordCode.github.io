<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FiefBarterGroup`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FiefBarterGroup

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FiefBarterGroup : BarterGroup`
**Base:** `BarterGroup`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/FiefBarterGroup.cs`

## Overview

`FiefBarterGroup` lives in `TaleWorlds.CampaignSystem.BarterSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AIDecisionWeight` | `public override float AIDecisionWeight { get; }` |

## Usage Example

```csharp
var value = new FiefBarterGroup();
```

## See Also

- [Complete Class Catalog](../catalog)