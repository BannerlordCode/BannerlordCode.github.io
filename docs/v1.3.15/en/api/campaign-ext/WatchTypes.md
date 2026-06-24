<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WatchTypes`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WatchTypes

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum WatchTypes`
**Area:** campaign-ext

## Overview

`WatchTypes` lives in `TaleWorlds.GauntletUI.ExtraWidgets`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.ExtraWidgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Equal` |
| `BiggerThan` |
| `BiggerThanEqual` |
| `LessThan` |
| `LessThanEqual` |
| `Odd` |

## Usage Example

```csharp
WatchTypes example = WatchTypes.Equal;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
