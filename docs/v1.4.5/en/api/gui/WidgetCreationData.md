<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetCreationData`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCreationData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCreationData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

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

### AddExtensionData
`public void AddExtensionData(object data)`

**Purpose:** Adds `extension data` to the current collection or state.

## Usage Example

```csharp
var value = new WidgetCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)