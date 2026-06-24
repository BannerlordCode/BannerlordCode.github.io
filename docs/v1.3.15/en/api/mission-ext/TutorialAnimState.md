<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialAnimState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialAnimState

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum TutorialAnimState`
**Area:** mission-ext

## Overview

`TutorialAnimState` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Idle` |
| `Start` |
| `FirstFrame` |

## Usage Example

```csharp
TutorialAnimState example = TutorialAnimState.Idle;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
