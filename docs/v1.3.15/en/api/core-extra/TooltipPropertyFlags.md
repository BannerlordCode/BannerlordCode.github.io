<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipPropertyFlags`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipPropertyFlags

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public enum TooltipPropertyFlags`
**Area:** core-extra

## Overview

`TooltipPropertyFlags` lives in `TaleWorlds.Core.ViewModelCollection.Information`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `MultiLine` |
| `1` |
| `BattleMode` |
| `2` |
| `BattleModeOver` |
| `4` |
| `WarFirstEnemy` |
| `8` |
| `WarFirstAlly` |
| `16` |
| `WarFirstNeutral` |
| `32` |
| `WarSecondEnemy` |
| `64` |
| `WarSecondAlly` |
| `128` |
| `WarSecondNeutral` |
| `256` |
| `RundownSeperator` |
| `512` |
| `DefaultSeperator` |
| `1024` |
| `Cost` |
| `2048` |
| `Title` |
| `4096` |
| `RundownResult` |

## Usage Example

```csharp
TooltipPropertyFlags example = TooltipPropertyFlags.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
