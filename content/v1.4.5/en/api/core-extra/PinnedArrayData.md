---
title: "PinnedArrayData"
description: "Auto-generated class reference for PinnedArrayData."
---
# PinnedArrayData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PinnedArrayData<T>`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PinnedArrayData.cs`

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

## Key Methods

### CheckIfTypeRequiresManualPinning
`public static bool CheckIfTypeRequiresManualPinning(Type type)`

**Purpose:** Verifies whether `if type requires manual pinning` holds true for the current object.

```csharp
// Static call; no instance required
PinnedArrayData.CheckIfTypeRequiresManualPinning(type);
```

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the current object.

```csharp
// Obtain an instance of PinnedArrayData from the subsystem API first
PinnedArrayData pinnedArrayData = ...;
pinnedArrayData.Dispose();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PinnedArrayData entry = ...;
```

## See Also

- [Area Index](../)