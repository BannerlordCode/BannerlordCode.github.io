---
title: "CraftingStatData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingStatData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingStatData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct CraftingStatData`
**Base:** none
**File:** `TaleWorlds.Core/CraftingStatData.cs`

## Overview

`CraftingStatData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CraftingStatData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Usage Example

```csharp
var value = new CraftingStatData();
```

## See Also

- [Complete Class Catalog](../catalog)