<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipMode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipMode

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public enum TooltipMode`
**Area:** core-extra

## Overview

`TooltipMode` lives in `TaleWorlds.Core.ViewModelCollection.Information`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `DefaultGame` |
| `DefaultCampaign` |
| `Ally` |
| `Enemy` |

## Usage Example

```csharp
TooltipMode example = TooltipMode.DefaultGame;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
