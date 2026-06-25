---
title: "InputData"
description: "Auto-generated class reference for InputData."
---
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

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of InputData from the subsystem API first
InputData inputData = ...;
inputData.Reset();
```

### FillFrom
`public void FillFrom(InputData inputData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of InputData from the subsystem API first
InputData inputData = ...;
inputData.FillFrom(inputData);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
InputData entry = ...;
```

## See Also

- [Area Index](../)