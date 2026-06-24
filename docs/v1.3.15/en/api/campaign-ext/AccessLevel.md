<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AccessLevel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessLevel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum AccessLevel`
**Area:** campaign-ext

## Overview

`AccessLevel` lives in `TaleWorlds.CampaignSystem.ComponentInterfaces`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ComponentInterfaces` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NoAccess` |
| `LimitedAccess` |

## Usage Example

```csharp
AccessLevel example = AccessLevel.NoAccess;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
