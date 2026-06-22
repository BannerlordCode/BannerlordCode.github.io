<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetCreationData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetCreationData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCreationData`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## Overview

`WidgetCreationData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `BrushFactory` | `public BrushFactory BrushFactory { get { return this.Context.BrushFactory; }` |
| `SpriteData` | `public SpriteData SpriteData { get { return this.Context.SpriteData; }` |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get { return this.WidgetFactory.PrefabExtensionContext; }` |

## Key Methods

### AddExtensionData
```csharp
public void AddExtensionData(string name, object data)
```

### AddExtensionData
```csharp
public void AddExtensionData(object data)
```

## Usage Example

```csharp
// Typical usage of WidgetCreationData (Data)
new WidgetCreationData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)