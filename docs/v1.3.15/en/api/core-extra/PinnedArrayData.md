<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PinnedArrayData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PinnedArrayData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PinnedArrayData<T>`
**Base:** none
**File:** `TaleWorlds.Library/PinnedArrayData.cs`

## Overview

`PinnedArrayData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Handle` | `public GCHandle Handle { get { return this._handle; }` |

## Key Methods

### CheckIfTypeRequiresManualPinning
```csharp
public static bool CheckIfTypeRequiresManualPinning(Type type)
```

### Dispose
```csharp
public void Dispose()
```

## Usage Example

```csharp
// Typical usage of PinnedArrayData (Data)
new PinnedArrayData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)