---
title: "TooltipProperty"
description: "Auto-generated class reference for TooltipProperty."
---
# TooltipProperty

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class TooltipProperty : ViewModel, ISerializableObject`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs`

## Overview

`TooltipProperty` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnlyShowWhenExtended` | `public bool OnlyShowWhenExtended { get; set; }` |
| `OnlyShowWhenNotExtended` | `public bool OnlyShowWhenNotExtended { get; set; }` |
| `TextHeight` | `public int TextHeight { get; set; }` |
| `TextColor` | `public Color TextColor { get; set; }` |
| `DefinitionLabel` | `public string DefinitionLabel { get; set; }` |
| `ValueLabel` | `public string ValueLabel { get; set; }` |
| `PropertyModifier` | `public int PropertyModifier { get; set; }` |

## Key Methods

### RefreshValue
`public void RefreshValue()`

**Purpose:** Keeps the display or cache of value in sync with the underlying state.

```csharp
// Obtain an instance of TooltipProperty from the subsystem API first
TooltipProperty tooltipProperty = ...;
tooltipProperty.RefreshValue();
```

### RefreshDefinition
`public void RefreshDefinition()`

**Purpose:** Keeps the display or cache of definition in sync with the underlying state.

```csharp
// Obtain an instance of TooltipProperty from the subsystem API first
TooltipProperty tooltipProperty = ...;
tooltipProperty.RefreshDefinition();
```

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**Purpose:** Restores from from serialized data.

```csharp
// Obtain an instance of TooltipProperty from the subsystem API first
TooltipProperty tooltipProperty = ...;
tooltipProperty.DeserializeFrom(reader);
```

### SerializeTo
`public void SerializeTo(IWriter writer)`

**Purpose:** Serializes to into a storable or transmittable format.

```csharp
// Obtain an instance of TooltipProperty from the subsystem API first
TooltipProperty tooltipProperty = ...;
tooltipProperty.SerializeTo(writer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TooltipProperty tooltipProperty = ...;
tooltipProperty.RefreshValue();
```

## See Also

- [Area Index](../)