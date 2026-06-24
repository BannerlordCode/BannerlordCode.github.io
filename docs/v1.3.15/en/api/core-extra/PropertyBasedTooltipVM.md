<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyBasedTooltipVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**Area:** core-extra

## Overview

`PropertyBasedTooltipVM` lives in `TaleWorlds.Core.ViewModelCollection.Information`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TooltipPropertyList` | `public MBBindingList<TooltipProperty> TooltipPropertyList { get; set; }` |
| `Mode` | `public int Mode { get; set; }` |

## Key Methods

### AddKeyType
`public static void AddKeyType(string keyID, Func<string> getKeyText)`

**Purpose:** Adds `key type` to the current collection or state.

### GetKeyText
`public string GetKeyText(string keyID)`

**Purpose:** Gets the current value of `key text`.

### RefreshGenericPropertyBasedTooltip
`public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object args)`

**Purpose:** Refreshes the display or cache of `generic property based tooltip`.

### AddProperty
`public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `property` to the current collection or state.

### AddModifierProperty
`public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `modifier property` to the current collection or state.

### AddProperty
`public void AddProperty(string definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `property` to the current collection or state.

### AddProperty
`public void AddProperty(Func<string> definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `property` to the current collection or state.

### AddColoredProperty
`public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `colored property` to the current collection or state.

### AddColoredProperty
`public void AddColoredProperty(string definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `colored property` to the current collection or state.

### AddColoredProperty
`public void AddColoredProperty(Func<string> definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `colored property` to the current collection or state.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
