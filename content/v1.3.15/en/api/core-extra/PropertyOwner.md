---
title: "PropertyOwner"
description: "Auto-generated class reference for PropertyOwner."
---
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

**Purpose:** Assigns a new value to `property value` and updates the object's internal state.

```csharp
// Obtain an instance of PropertyOwner from the subsystem API first
PropertyOwner propertyOwner = ...;
propertyOwner.SetPropertyValue(attribute, 0);
```

### GetPropertyValue
`public int GetPropertyValue(T attribute)`

**Purpose:** Reads and returns the `property value` value held by the current object.

```csharp
// Obtain an instance of PropertyOwner from the subsystem API first
PropertyOwner propertyOwner = ...;
var result = propertyOwner.GetPropertyValue(attribute);
```

### HasProperty
`public bool HasProperty(T attribute)`

**Purpose:** Determines whether the current object already holds `property`.

```csharp
// Obtain an instance of PropertyOwner from the subsystem API first
PropertyOwner propertyOwner = ...;
var result = propertyOwner.HasProperty(attribute);
```

### ClearAllProperty
`public void ClearAllProperty()`

**Purpose:** Removes all `all property` from the current object.

```csharp
// Obtain an instance of PropertyOwner from the subsystem API first
PropertyOwner propertyOwner = ...;
propertyOwner.ClearAllProperty();
```

### GetProperties
`public MBList<T> GetProperties()`

**Purpose:** Reads and returns the `properties` value held by the current object.

```csharp
// Obtain an instance of PropertyOwner from the subsystem API first
PropertyOwner propertyOwner = ...;
var result = propertyOwner.GetProperties();
```

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of PropertyOwner from the subsystem API first
PropertyOwner propertyOwner = ...;
propertyOwner.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyOwner propertyOwner = ...;
propertyOwner.SetPropertyValue(attribute, 0);
```

## See Also

- [Area Index](../)