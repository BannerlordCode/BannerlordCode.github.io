<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkirmishScoreboardData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkirmishScoreboardData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkirmishScoreboardData : IScoreboardData`
**Base:** `IScoreboardData`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/SkirmishScoreboardData.cs`

## Overview

`SkirmishScoreboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SkirmishScoreboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetScoreboardHeaders
`public ScoreboardHeader GetScoreboardHeaders()`

**Purpose:** Gets the current value of `scoreboard headers`.

## Usage Example

```csharp
var value = new SkirmishScoreboardData();
```

## See Also

- [Complete Class Catalog](../catalog)