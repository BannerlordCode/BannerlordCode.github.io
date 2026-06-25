---
title: "ResultData"
description: "Auto-generated class reference for ResultData."
---
# ResultData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResultData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/ResultData.cs`

## Overview

`ResultData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ResultData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Errors` | `public string Errors { get; set; }` |
| `DLLs` | `public List<DLLResult> DLLs { get; set; }` |

## Key Methods

### AddDLLResult
`public void AddDLLResult(string dllName, bool isSafe, string information)`

**Purpose:** Adds `d l l result` to the current collection or state.

```csharp
// Obtain an instance of ResultData from the subsystem API first
ResultData resultData = ...;
resultData.AddDLLResult("example", false, "example");
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of ResultData from the subsystem API first
ResultData resultData = ...;
var result = resultData.ToString();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ResultData entry = ...;
```

## See Also

- [Area Index](../)