<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeAftermath`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeAftermath

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SiegeAftermath`
**Area:** campaign-ext

## Overview

`SiegeAftermath` lives in `TaleWorlds.CampaignSystem.Actions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Devastate` |
| `Pillage` |

## Usage Example

```csharp
var value = new SiegeAftermath();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
