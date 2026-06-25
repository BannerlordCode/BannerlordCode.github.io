---
title: "SelectionData"
description: "Auto-generated class reference for SelectionData."
---
# SelectionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public struct SelectionData`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/SelectionData.cs`

## Overview

`SelectionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SelectionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SelectionData
`public struct SelectionData(bool isLocalizationId, string data)`

**Purpose:** **Purpose:** Executes the SelectionData logic.

```csharp
// Obtain an instance of SelectionData from the subsystem API first
SelectionData selectionData = ...;
var result = selectionData.SelectionData(false, "example");
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SelectionData entry = ...;
```

## See Also

- [Area Index](../)