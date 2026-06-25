---
title: "WidgetCreationData"
description: "Auto-generated class reference for WidgetCreationData."
---
# WidgetCreationData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCreationData`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## Overview

`WidgetCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WidgetCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Parent` | `public Widget Parent { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |

## Key Methods

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**Purpose:** Adds `extension data` to the current collection or state.

```csharp
// Obtain an instance of WidgetCreationData from the subsystem API first
WidgetCreationData widgetCreationData = ...;
widgetCreationData.AddExtensionData("example", data);
```

### AddExtensionData
`public void AddExtensionData(object data)`

**Purpose:** Adds `extension data` to the current collection or state.

```csharp
// Obtain an instance of WidgetCreationData from the subsystem API first
WidgetCreationData widgetCreationData = ...;
widgetCreationData.AddExtensionData(data);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WidgetCreationData entry = ...;
```

## See Also

- [Area Index](../)