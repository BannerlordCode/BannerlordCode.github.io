<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterStates`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterStates

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum CharacterStates`
**Area:** campaign-ext

## Overview

`CharacterStates` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NotSpawned` |
| `Active` |
| `Fugitive` |
| `Prisoner` |
| `Released` |
| `Dead` |
| `Disabled` |

## Usage Example

```csharp
CharacterStates example = CharacterStates.NotSpawned;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
