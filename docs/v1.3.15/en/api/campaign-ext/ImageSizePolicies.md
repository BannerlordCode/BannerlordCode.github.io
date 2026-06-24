<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageSizePolicies`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageSizePolicies

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum ImageSizePolicies`
**Area:** campaign-ext

## Overview

`ImageSizePolicies` lives in `TaleWorlds.GauntletUI.BaseTypes`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Stretch` |
| `OriginalSize` |

## Usage Example

```csharp
ImageSizePolicies example = ImageSizePolicies.Stretch;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
