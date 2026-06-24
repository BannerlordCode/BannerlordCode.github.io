<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CosmeticObtainState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CosmeticObtainState

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CosmeticObtainState`
**Area:** mission-ext

## Overview

`CosmeticObtainState` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Initialized` |
| `Ongoing` |
| `FinishedSuccessfully` |

## Usage Example

```csharp
CosmeticObtainState example = CosmeticObtainState.Initialized;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
