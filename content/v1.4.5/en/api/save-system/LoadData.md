---
title: "LoadData"
description: "Auto-generated class reference for LoadData."
---
# LoadData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/LoadData.cs`

## Overview

`LoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MetaData` | `public MetaData MetaData { get; }` |
| `GameData` | `public GameData GameData { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
LoadData entry = ...;
```

## See Also

- [Area Index](../)