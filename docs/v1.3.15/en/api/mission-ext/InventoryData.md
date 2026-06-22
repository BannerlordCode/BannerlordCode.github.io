<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/InventoryData.cs`

## Overview

`InventoryData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Items` | `public List<ItemData> Items { get; }` |

## Key Methods

### GetItemWithIndex
```csharp
public ItemData GetItemWithIndex(int itemIndex)
```

### DebugPrint
```csharp
public void DebugPrint()
```

## Usage Example

```csharp
// Typical usage of InventoryData (Data)
new InventoryData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)