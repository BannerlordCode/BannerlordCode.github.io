---
title: "KillData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KillData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KillData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct KillData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/KillData.cs`

## Overview

`KillData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `KillData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var value = new KillData();
```

## See Also

- [Complete Class Catalog](../catalog)