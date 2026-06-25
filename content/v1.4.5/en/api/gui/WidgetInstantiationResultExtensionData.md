---
title: "WidgetInstantiationResultExtensionData"
description: "Auto-generated class reference for WidgetInstantiationResultExtensionData."
---
# WidgetInstantiationResultExtensionData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `internal struct WidgetInstantiationResultExtensionData`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResultExtensionData.cs`

## Overview

`WidgetInstantiationResultExtensionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WidgetInstantiationResultExtensionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `PassToChildWidgetCreation` | `public bool PassToChildWidgetCreation { get; set; }` |
| `Data` | `public object Data { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WidgetInstantiationResultExtensionData entry = ...;
```

## See Also

- [Area Index](../)