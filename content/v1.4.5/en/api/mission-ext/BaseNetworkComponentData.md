---
title: "BaseNetworkComponentData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BaseNetworkComponentData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BaseNetworkComponentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## Overview

`BaseNetworkComponentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BaseNetworkComponentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentBattleIndex` | `public int CurrentBattleIndex { get; }` |

## Key Methods

### UpdateCurrentBattleIndex
`public void UpdateCurrentBattleIndex(int currentBattleIndex)`

**Purpose:** Updates the state or data of `current battle index`.

## Usage Example

```csharp
var value = new BaseNetworkComponentData();
```

## See Also

- [Complete Class Catalog](../catalog)