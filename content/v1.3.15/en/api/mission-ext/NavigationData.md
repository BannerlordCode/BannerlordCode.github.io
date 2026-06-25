---
title: "NavigationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct NavigationData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/NavigationData.cs`

## Overview

`NavigationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NavigationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TickDebug
`public void TickDebug()`

**Purpose:** Handles logic related to `tick debug`.

## Usage Example

```csharp
var value = new NavigationData();
```

## See Also

- [Complete Class Catalog](../catalog)