<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RomanticPreference`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RomanticPreference

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum RomanticPreference`
**Area:** campaign-ext

## Overview

`RomanticPreference` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Conventional` |
| `Moralist` |
| `AttractedToBravery` |
| `Macchiavellian` |
| `Romantic` |
| `Companionship` |
| `MadAndBad` |
| `Security` |

## Usage Example

```csharp
RomanticPreference example = RomanticPreference.Conventional;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
