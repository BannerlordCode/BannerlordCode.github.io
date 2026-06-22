<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KillData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KillData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct KillData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs`

## Overview

`KillData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `KillerId` | `public PlayerId KillerId { get; set; }` |
| `VictimId` | `public PlayerId VictimId { get; set; }` |
| `KillerFaction` | `public string KillerFaction { get; set; }` |
| `VictimFaction` | `public string VictimFaction { get; set; }` |
| `KillerTroop` | `public string KillerTroop { get; set; }` |
| `VictimTroop` | `public string VictimTroop { get; set; }` |

## Usage Example

```csharp
// Typical usage of KillData (Data)
new KillData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)