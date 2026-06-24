<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyObjective`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyObjective

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PartyObjective`
**Area:** campaign-ext

## Overview

`PartyObjective` lives in `TaleWorlds.CampaignSystem.Party`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Neutral` |
| `Defensive` |
| `Aggressive` |

## Usage Example

```csharp
PartyObjective example = PartyObjective.Neutral;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
