<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerLeaderboardData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerLeaderboardData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerLeaderboardData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerLeaderboardData.cs`

## Overview

`PlayerLeaderboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerLeaderboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `RankId` | `public string RankId { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Usage Example

```csharp
var value = new PlayerLeaderboardData();
```

## See Also

- [Complete Class Catalog](../catalog)