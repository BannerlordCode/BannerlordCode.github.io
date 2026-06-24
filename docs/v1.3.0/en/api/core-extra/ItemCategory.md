<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemCategory`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemCategory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemCategory : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemCategory.cs`

## Overview

`ItemCategory` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTradeGood` | `public bool IsTradeGood { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `CanSubstitute` | `public ItemCategory CanSubstitute { get; }` |
| `SubstitutionFactor` | `public float SubstitutionFactor { get; }` |
| `Properties` | `public ItemCategory.Property Properties { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `BaseDemand` | `public float BaseDemand { get; }` |
| `LuxuryDemand` | `public float LuxuryDemand { get; }` |

## Key Methods

### InitializeObject
`public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, ItemCategory.Property properties = ItemCategory.Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)`

**Purpose:** Initializes the state, resources, or bindings for `object`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new ItemCategory();
value.InitializeObject(false, 0, 0, itemCategory.Property.None, null, 0, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)