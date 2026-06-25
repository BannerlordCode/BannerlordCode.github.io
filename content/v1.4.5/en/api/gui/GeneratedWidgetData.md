---
title: "GeneratedWidgetData"
description: "Auto-generated class reference for GeneratedWidgetData."
---
# GeneratedWidgetData

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedWidgetData : WidgetComponent`
**Base:** `WidgetComponent`
**File:** `bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/GeneratedWidgetData.cs`

## Overview

`GeneratedWidgetData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `GeneratedWidgetData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public object Data { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
GeneratedWidgetData entry = ...;
```

## See Also

- [Area Index](../)