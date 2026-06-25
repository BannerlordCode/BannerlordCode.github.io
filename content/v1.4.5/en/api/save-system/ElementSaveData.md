---
title: "ElementSaveData"
description: "Auto-generated class reference for ElementSaveData."
---
# ElementSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ElementSaveData : VariableSaveData`
**Base:** `VariableSaveData`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/ElementSaveData.cs`

## Overview

`ElementSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ElementSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElementValue` | `public object ElementValue { get; }` |
| `ElementIndex` | `public int ElementIndex { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ElementSaveData entry = ...;
```

## See Also

- [Area Index](../)