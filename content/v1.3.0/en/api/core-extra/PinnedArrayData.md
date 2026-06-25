---
title: "PinnedArrayData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PinnedArrayData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PinnedArrayData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PinnedArrayData<T>`
**Base:** none
**File:** `TaleWorlds.Library/PinnedArrayData.cs`

## Overview

`PinnedArrayData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PinnedArrayData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pinned` | `public bool Pinned { get; }` |
| `Pointer` | `public IntPtr Pointer { get; }` |
| `Array` | `public T Array { get; }` |
| `Array2D` | `public T Array2D { get; }` |
| `Handle` | `public GCHandle Handle { get; }` |

## Key Methods

### CheckIfTypeRequiresManualPinning
`public static bool CheckIfTypeRequiresManualPinning(Type type)`

**Purpose:** Handles logic related to `check if type requires manual pinning`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

## Usage Example

```csharp
var value = new PinnedArrayData();
```

## See Also

- [Complete Class Catalog](../catalog)