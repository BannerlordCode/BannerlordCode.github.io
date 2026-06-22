<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FavoriteServerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FavoriteServerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs`

## Overview

`FavoriteServerData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### CreateFrom
```csharp
public static FavoriteServerData CreateFrom(GameServerEntry serverEntry)
```

### HasSameContentWith
```csharp
public override bool HasSameContentWith(MultiplayerLocalData other)
```

### HasSameContentWith
```csharp
public bool HasSameContentWith(GameServerEntry serverEntry)
```

## Usage Example

```csharp
// Typical usage of FavoriteServerData (Data)
new FavoriteServerData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)