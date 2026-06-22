<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BotData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BotData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BotData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BotData.cs`

## Overview

`BotData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `IsAnyValid` | `public bool IsAnyValid { get; }` |

## Key Methods

### ResetKillDeathAssist
```csharp
public void ResetKillDeathAssist()
```

## Usage Example

```csharp
// Typical usage of BotData (Data)
new BotData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)