---
title: "MemberLoadData"
description: "Auto-generated class reference for MemberLoadData."
---
# MemberLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class MemberLoadData : VariableLoadData`
**Base:** `VariableLoadData`
**File:** `TaleWorlds.SaveSystem/Load/MemberLoadData.cs`

## Overview

`MemberLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MemberLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectLoadData` | `public ObjectLoadData ObjectLoadData { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MemberLoadData instance = ...;
```

## See Also

- [Area Index](../)