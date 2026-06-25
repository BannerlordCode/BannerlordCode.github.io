---
title: "PropertyDefinition"
description: "Auto-generated class reference for PropertyDefinition."
---
# PropertyDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class PropertyDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs`

## Overview

`PropertyDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyInfo` | `public PropertyInfo PropertyInfo { get; }` |
| `SaveablePropertyAttribute` | `public SaveablePropertyAttribute SaveablePropertyAttribute { get; }` |
| `GetMethod` | `public MethodInfo GetMethod { get; }` |
| `SetMethod` | `public MethodInfo SetMethod { get; }` |
| `GetPropertyValueMethod` | `public GetPropertyValueDelegate GetPropertyValueMethod { get; }` |

## Key Methods

### GetMemberType
`public override Type GetMemberType()`

**Purpose:** **Purpose:** Reads and returns the member type value held by the this instance.

```csharp
// Obtain an instance of PropertyDefinition from the subsystem API first
PropertyDefinition propertyDefinition = ...;
var result = propertyDefinition.GetMemberType();
```

### GetValue
`public override object GetValue(object target)`

**Purpose:** **Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of PropertyDefinition from the subsystem API first
PropertyDefinition propertyDefinition = ...;
var result = propertyDefinition.GetValue(target);
```

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(GetPropertyValueDelegate getPropertyValueMethod)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by for auto generation.

```csharp
// Obtain an instance of PropertyDefinition from the subsystem API first
PropertyDefinition propertyDefinition = ...;
propertyDefinition.InitializeForAutoGeneration(getPropertyValueMethod);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyDefinition propertyDefinition = ...;
propertyDefinition.GetMemberType();
```

## See Also

- [Area Index](../)