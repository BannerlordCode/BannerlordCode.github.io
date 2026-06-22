<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingStatData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingStatData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct CraftingStatData`
**Base:** none
**File:** `TaleWorlds.Core/CraftingStatData.cs`

## Overview

`CraftingStatData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get { return this.MaxValue >= 0f; }` |

## Usage Example

```csharp
// Typical usage of CraftingStatData (Data)
new CraftingStatData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)