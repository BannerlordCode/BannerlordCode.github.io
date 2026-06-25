---
title: "AnimState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimState

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum AnimState`
**Area:** mission-ext

## Overview

`AnimState` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Idle` |
| `Start` |
| `Starting` |

## Usage Example

```csharp
AnimState example = AnimState.Idle;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
