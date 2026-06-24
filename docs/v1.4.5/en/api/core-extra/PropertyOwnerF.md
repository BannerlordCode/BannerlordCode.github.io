<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyOwnerF`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyOwnerF

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyOwnerF<T> : IReadOnlyPropertyOwnerF<T> where T : MBObjectBase`
**Base:** `IReadOnlyPropertyOwnerF<T> where T : MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/PropertyOwnerF.cs`

## Overview

`PropertyOwnerF` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetPropertyValue
`public void SetPropertyValue(T attribute, float value)`

**Purpose:** Sets the value or state of `property value`.

### GetPropertyValue
`public float GetPropertyValue(T attribute)`

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

### Serialize
`public void Serialize(XmlWriter writer)`

**Purpose:** Handles logic related to `serialize`.

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new PropertyOwnerF();
value.SetPropertyValue(attribute, 0);
```

## See Also

- [Complete Class Catalog](../catalog)