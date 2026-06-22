<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerJoinGameData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerJoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`

## Overview

`PlayerJoinGameData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PartyId` | `public Guid? PartyId { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `IpAddress` | `public string IpAddress { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## Key Methods

### ToString
```csharp
public override string ToString()
```

## Usage Example

```csharp
// Typical usage of PlayerJoinGameData (Data)
new PlayerJoinGameData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)