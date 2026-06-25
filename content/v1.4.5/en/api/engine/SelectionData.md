---
title: "SelectionData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectionData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SelectionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public struct SelectionData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/SelectionData.cs`

## Overview

`SelectionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SelectionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SelectionData
`public struct SelectionData(bool isLocalizationId, string data)`

**Purpose:** Handles logic related to `selection data`.

## Usage Example

```csharp
var value = new SelectionData();
```

## See Also

- [Complete Class Catalog](../catalog)