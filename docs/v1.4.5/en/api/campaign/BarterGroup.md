<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterGroup`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterGroup

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterGroup`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs`

## Overview

`BarterGroup` lives in `TaleWorlds.CampaignSystem.BarterSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AIDecisionWeight` | `public abstract float AIDecisionWeight { get; }` |

## Usage Example

```csharp
var implementation = new CustomBarterGroup();
```

## See Also

- [Complete Class Catalog](../catalog)