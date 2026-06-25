---
title: "TooltipProperty"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipProperty`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `value`.

### RefreshDefinition
`public void RefreshDefinition()`

**Purpose:** Refreshes the display or cache of `definition`.

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**Purpose:** Handles logic related to `deserialize from`.

### SerializeTo
`public void SerializeTo(IWriter writer)`

**Purpose:** Handles logic related to `serialize to`.

## Usage Example

```csharp
var value = new TooltipProperty();
value.RefreshValue();
```

## See Also

- [Complete Class Catalog](../catalog)