---
title: "AnotherPlayerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnotherPlayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnotherPlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnotherPlayerData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/AnotherPlayerData.cs`

## Overview

`AnotherPlayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AnotherPlayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerState` | `public AnotherPlayerState PlayerState { get; set; }` |
| `Experience` | `public int Experience { get; set; }` |

## Usage Example

```csharp
var value = new AnotherPlayerData();
```

## See Also

- [Complete Class Catalog](../catalog)