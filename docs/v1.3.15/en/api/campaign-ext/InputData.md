<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputData

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class InputData`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/InputData.cs`

## Overview

`InputData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InputData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeyData` | `public bool KeyData { get; set; }` |
| `LeftMouse` | `public bool LeftMouse { get; set; }` |
| `RightMouse` | `public bool RightMouse { get; set; }` |
| `CursorX` | `public int CursorX { get; set; }` |
| `CursorY` | `public int CursorY { get; set; }` |
| `MouseMove` | `public bool MouseMove { get; set; }` |
| `MouseScrollDelta` | `public float MouseScrollDelta { get; set; }` |

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### FillFrom
`public void FillFrom(InputData inputData)`

**Purpose:** Handles logic related to `fill from`.

## Usage Example

```csharp
var value = new InputData();
```

## See Also

- [Complete Class Catalog](../catalog)