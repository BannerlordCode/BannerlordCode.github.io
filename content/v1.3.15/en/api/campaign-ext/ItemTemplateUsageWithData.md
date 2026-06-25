---
title: "ItemTemplateUsageWithData"
description: "Auto-generated class reference for ItemTemplateUsageWithData."
---
# ItemTemplateUsageWithData

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ItemTemplateUsageWithData`
**Base:** none
**File:** `TaleWorlds.GauntletUI.Data/ItemTemplateUsageWithData.cs`

## Overview

`ItemTemplateUsageWithData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ItemTemplateUsageWithData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `ItemTemplateUsage` | `public ItemTemplateUsage ItemTemplateUsage { get; }` |
| `DefaultItemTemplate` | `public WidgetTemplate DefaultItemTemplate { get; }` |
| `FirstItemTemplate` | `public WidgetTemplate FirstItemTemplate { get; }` |
| `LastItemTemplate` | `public WidgetTemplate LastItemTemplate { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ItemTemplateUsageWithData entry = ...;
```

## See Also

- [Area Index](../)