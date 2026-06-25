---
title: "PropertyLoadData"
description: "Auto-generated class reference for PropertyLoadData."
---
# PropertyLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class PropertyLoadData : MemberLoadData`
**Base:** `MemberLoadData`
**File:** `TaleWorlds.SaveSystem/Load/PropertyLoadData.cs`

## Overview

`PropertyLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PropertyLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FillObject
`public void FillObject()`

**Purpose:** Executes the FillObject logic.

```csharp
// Obtain an instance of PropertyLoadData from the subsystem API first
PropertyLoadData propertyLoadData = ...;
propertyLoadData.FillObject();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PropertyLoadData entry = ...;
```

## See Also

- [Area Index](../)