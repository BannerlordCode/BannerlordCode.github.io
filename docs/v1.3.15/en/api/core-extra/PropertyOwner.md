<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyOwner`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyOwner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyOwner<T> : IReadOnlyPropertyOwner<T> where T : MBObjectBase`
**Base:** `IReadOnlyPropertyOwner<T> where T : MBObjectBase`
**File:** `TaleWorlds.Core/PropertyOwner.cs`

## Overview

`PropertyOwner` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetPropertyValue
`public void SetPropertyValue(T attribute, int value)`

**Purpose:** Sets the value or state of `property value`.

### GetPropertyValue
`public int GetPropertyValue(T attribute)`

**Purpose:** Gets the current value of `property value`.

### HasProperty
`public bool HasProperty(T attribute)`

**Purpose:** Checks whether the current object has/contains `property`.

### ClearAllProperty
`public void ClearAllProperty()`

**Purpose:** Handles logic related to `clear all property`.

### GetProperties
`public MBList<T> GetProperties()`

**Purpose:** Gets the current value of `properties`.

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new PropertyOwner();
value.SetPropertyValue(attribute, 0);
```

## See Also

- [Complete Class Catalog](../catalog)