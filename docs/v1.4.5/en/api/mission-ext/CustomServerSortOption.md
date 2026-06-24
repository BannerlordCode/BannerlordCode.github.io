<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomServerSortOption`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomServerSortOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CustomServerSortOption`
**Area:** mission-ext

## Overview

`CustomServerSortOption` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `SortOptionsBeginExclusive` |
| `1` |
| `Name` |
| `GameType` |
| `PlayerCount` |
| `PasswordProtection` |
| `FirstFaction` |
| `SecondFaction` |
| `Region` |
| `PremadeMatchType` |
| `Host` |
| `Ping` |
| `Favorite` |

## Usage Example

```csharp
CustomServerSortOption example = CustomServerSortOption.SortOptionsBeginExclusive;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
