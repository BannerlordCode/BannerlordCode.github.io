<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntCategoryFlag`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TauntCategoryFlag

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum TauntCategoryFlag`
**Area:** mission-ext

## Overview

`TauntCategoryFlag` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `UsableWithMount` |
| `1` |
| `UsableWithOneHanded` |
| `2` |
| `UsableWithTwoHanded` |
| `4` |
| `UsableWithBow` |
| `8` |
| `UsableWithCrossbow` |
| `0x10` |
| `UsableWithShield` |
| `0x20` |
| `All` |

## Usage Example

```csharp
TauntCategoryFlag example = TauntCategoryFlag.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
