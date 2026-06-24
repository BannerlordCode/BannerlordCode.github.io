<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BotData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BotData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BotData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BotData.cs`

## Overview

`BotData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BotData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `IsAnyValid` | `public bool IsAnyValid { get; }` |

## Key Methods

### ResetKillDeathAssist
`public void ResetKillDeathAssist()`

**Purpose:** Resets `kill death assist` to its initial state.

## Usage Example

```csharp
var value = new BotData();
```

## See Also

- [Complete Class Catalog](../catalog)