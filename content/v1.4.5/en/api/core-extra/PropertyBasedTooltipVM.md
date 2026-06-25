---
title: "PropertyBasedTooltipVM"
description: "Auto-generated class reference for PropertyBasedTooltipVM."
---
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/PropertyBasedTooltipVM.cs`

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

```csharp
// Static call; no instance required
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

### GetKeyText
`public string GetKeyText(string keyID)`

**Purpose:** Reads and returns the `key text` value held by the current object.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
var result = propertyBasedTooltipVM.GetKeyText("example");
```

### RefreshGenericPropertyBasedTooltip
`public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object args)`

**Purpose:** Keeps the display or cache of `generic property based tooltip` in sync with the underlying state.

```csharp
// Static call; no instance required
PropertyBasedTooltipVM.RefreshGenericPropertyBasedTooltip(propertyBasedTooltip, args);
```

### AddProperty
`public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddProperty("example", "example", 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddModifierProperty
`public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `modifier property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddModifierProperty("example", 0, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddProperty
`public void AddProperty(string definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddProperty("example", value, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddProperty
`public void AddProperty(Func<string> definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddProperty(definition, value, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddColoredProperty
`public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `colored property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddColoredProperty("example", "example", color, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddColoredProperty
`public void AddColoredProperty(string definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `colored property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddColoredProperty("example", value, color, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddColoredProperty
`public void AddColoredProperty(Func<string> definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**Purpose:** Adds `colored property` to the current collection or state.

```csharp
// Obtain an instance of PropertyBasedTooltipVM from the subsystem API first
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddColoredProperty(definition, value, color, 0, tooltipProperty.TooltipPropertyFlags.None);
```

## Usage Example

```csharp
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

## See Also

- [Area Index](../)