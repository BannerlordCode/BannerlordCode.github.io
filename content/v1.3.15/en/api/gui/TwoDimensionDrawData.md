---
title: "TwoDimensionDrawData"
description: "Auto-generated class reference for TwoDimensionDrawData."
---
# TwoDimensionDrawData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal struct TwoDimensionDrawData`
**Base:** none
**File:** `TaleWorlds.TwoDimension/TwoDimensionDrawData.cs`

## Overview

`TwoDimensionDrawData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TwoDimensionDrawData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext, int layer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TwoDimensionDrawData from the subsystem API first
TwoDimensionDrawData twoDimensionDrawData = ...;
twoDimensionDrawData.DrawTo(twoDimensionContext, 0);
```

### UpdateVisualRect
`public void UpdateVisualRect()`

**Purpose:** Recalculates and stores the latest representation of `visual rect`.

```csharp
// Obtain an instance of TwoDimensionDrawData from the subsystem API first
TwoDimensionDrawData twoDimensionDrawData = ...;
twoDimensionDrawData.UpdateVisualRect();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TwoDimensionDrawData entry = ...;
```

## See Also

- [Area Index](../)