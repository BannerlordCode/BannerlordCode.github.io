<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerLeaderboardData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerLeaderboardData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerLeaderboardData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerLeaderboardData.cs`

## Overview

`PlayerLeaderboardData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `RankId` | `public string RankId { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Usage Example

```csharp
// Typical usage of PlayerLeaderboardData (Data)
new PlayerLeaderboardData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)