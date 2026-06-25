---
title: "TauntIndexData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntIndexData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntIndexData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TauntIndexData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntIndexData.cs`

## Overview

`TauntIndexData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TauntIndexData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TauntId` | `public string TauntId { get; set; }` |
| `TauntIndex` | `public int TauntIndex { get; set; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new TauntIndexData();
```

## See Also

- [Complete Class Catalog](../catalog)