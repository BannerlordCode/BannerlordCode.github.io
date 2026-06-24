<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyBasedTooltipVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`

## Overview

`PropertyBasedTooltipVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

## See Also

- [Complete Class Catalog](../catalog)