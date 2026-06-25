---
title: "PropertyOwnerF"
description: "Auto-generated class reference for PropertyOwnerF."
---
# PropertyOwnerF

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyOwnerF<T> : IReadOnlyPropertyOwnerF<T> where T : MBObjectBase`
**Base:** `IReadOnlyPropertyOwnerF<T> where T : MBObjectBase`
**File:** `TaleWorlds.Core/PropertyOwnerF.cs`

## Overview

`PropertyOwnerF` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetPropertyValue
`public void SetPropertyValue(T attribute, float value)`

**Purpose:** Assigns a new value to property value and updates the object's internal state.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.SetPropertyValue(attribute, 0);
```

### GetPropertyValue
`public float GetPropertyValue(T attribute)`

**Purpose:** Reads and returns the property value value held by the this instance.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
var result = propertyOwnerF.GetPropertyValue(attribute);
```

### HasProperty
`public bool HasProperty(T attribute)`

**Purpose:** Determines whether the this instance already holds property.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
var result = propertyOwnerF.HasProperty(attribute);
```

### ClearAllProperty
`public void ClearAllProperty()`

**Purpose:** Removes all all property from the this instance.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.ClearAllProperty();
```

### GetProperties
`public MBList<T> GetProperties()`

**Purpose:** Reads and returns the properties value held by the this instance.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
var result = propertyOwnerF.GetProperties();
```

### Serialize
`public void Serialize(XmlWriter writer)`

**Purpose:** Serializes the this instance into a storable or transmittable format.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.Serialize(writer);
```

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of PropertyOwnerF from the subsystem API first
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.SetPropertyValue(attribute, 0);
```

## See Also

- [Area Index](../)