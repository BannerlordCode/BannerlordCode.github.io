<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PermaMuteList`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PermaMuteList

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PermaMuteList` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded { get; }` |
| `MutedPlayers` | `public static IReadOnlyList<ValueTuple<string, string>> MutedPlayers { get; }` |


## Key Methods

### SetPermanentMuteAvailableCallback

```csharp
public static void SetPermanentMuteAvailableCallback(Func<bool> getPermanentMuteAvailable)
```

### LoadMutedPlayers

```csharp
public static Task LoadMutedPlayers(PlayerId currentPlayerId)
```

### SaveMutedPlayers

```csharp
public static void SaveMutedPlayers()
```

### IsPlayerMuted

```csharp
public static bool IsPlayerMuted(PlayerId player)
```

### MutePlayer

```csharp
public static void MutePlayer(PlayerId player, string name)
```

### RemoveMutedPlayer

```csharp
public static void RemoveMutedPlayer(PlayerId player)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)