---
title: "TypeDefinition"
description: "Auto-generated class reference for TypeDefinition."
---
# TypeDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`

## Overview

`TypeDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MemberDefinitions` | `public List<MemberDefinition> MemberDefinitions { get; }` |
| `InitializationCallbacks` | `public IEnumerable<MethodInfo> InitializationCallbacks { get; }` |
| `LateInitializationCallbacks` | `public IEnumerable<MethodInfo> LateInitializationCallbacks { get; }` |
| `Errors` | `public IEnumerable<string> Errors { get; }` |
| `IsClassDefinition` | `public bool IsClassDefinition { get; }` |
| `CustomFields` | `public List<CustomField> CustomFields { get; }` |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; }` |
| `PropertyDefinitions` | `public Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions { get; }` |
| `FieldDefinitions` | `public Dictionary<MemberTypeId, FieldDefinition>.ValueCollection FieldDefinitions { get; }` |

## Key Methods

### CheckIfRequiresAdvancedResolving
`public bool CheckIfRequiresAdvancedResolving(object originalObject)`

**Purpose:** Verifies whether if requires advanced resolving holds true for the this instance.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
var result = typeDefinition.CheckIfRequiresAdvancedResolving(originalObject);
```

### ResolveObject
`public object ResolveObject(object originalObject)`

**Purpose:** Executes the ResolveObject logic.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
var result = typeDefinition.ResolveObject(originalObject);
```

### AdvancedResolveObject
`public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)`

**Purpose:** Executes the AdvancedResolveObject logic.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
var result = typeDefinition.AdvancedResolveObject(originalObject, metaData, objectLoadData);
```

### CollectInitializationCallbacks
`public void CollectInitializationCallbacks()`

**Purpose:** Executes the CollectInitializationCallbacks logic.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
typeDefinition.CollectInitializationCallbacks();
```

### CollectProperties
`public void CollectProperties()`

**Purpose:** Executes the CollectProperties logic.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
typeDefinition.CollectProperties();
```

### CollectFields
`public void CollectFields()`

**Purpose:** Executes the CollectFields logic.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
typeDefinition.CollectFields();
```

### AddCustomField
`public void AddCustomField(string fieldName, short saveId)`

**Purpose:** Adds custom field to the current collection or state.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
typeDefinition.AddCustomField("example", 0);
```

### GetPropertyDefinitionWithId
`public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)`

**Purpose:** Reads and returns the property definition with id value held by the this instance.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
var result = typeDefinition.GetPropertyDefinitionWithId(id);
```

### GetFieldDefinitionWithId
`public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)`

**Purpose:** Reads and returns the field definition with id value held by the this instance.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
var result = typeDefinition.GetFieldDefinitionWithId(id);
```

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)`

**Purpose:** Prepares the resources, state, or bindings required by for auto generation.

```csharp
// Obtain an instance of TypeDefinition from the subsystem API first
TypeDefinition typeDefinition = ...;
typeDefinition.InitializeForAutoGeneration(collectObjectsDelegate);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TypeDefinition typeDefinition = ...;
typeDefinition.CheckIfRequiresAdvancedResolving(originalObject);
```

## See Also

- [Area Index](../)