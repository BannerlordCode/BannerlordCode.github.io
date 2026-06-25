---
title: "ElementLoadData"
description: "Auto-generated class reference for ElementLoadData."
---
# ElementLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ElementLoadData : VariableLoadData`
**Base:** `VariableLoadData`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ElementLoadData.cs`

## Overview

`ElementLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ElementLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ContainerLoadData` | `public ContainerLoadData ContainerLoadData { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ElementLoadData entry = ...;
```

## See Also

- [Area Index](../)