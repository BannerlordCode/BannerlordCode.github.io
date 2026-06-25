---
title: "FieldLoadData"
description: "Auto-generated class reference for FieldLoadData."
---
# FieldLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class FieldLoadData : MemberLoadData`
**Base:** `MemberLoadData`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/FieldLoadData.cs`

## Overview

`FieldLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FieldLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FillObject
`public void FillObject()`

**Purpose:** Executes the FillObject logic.

```csharp
// Obtain an instance of FieldLoadData from the subsystem API first
FieldLoadData fieldLoadData = ...;
fieldLoadData.FillObject();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FieldLoadData entry = ...;
```

## See Also

- [Area Index](../)