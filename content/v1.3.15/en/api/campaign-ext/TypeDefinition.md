---
title: "TypeDefinition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TypeDefinition`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `check if requires advanced resolving`.

### ResolveObject
`public object ResolveObject(object originalObject)`

**Purpose:** Handles logic related to `resolve object`.

### AdvancedResolveObject
`public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)`

**Purpose:** Handles logic related to `advanced resolve object`.

### CollectInitializationCallbacks
`public void CollectInitializationCallbacks()`

**Purpose:** Handles logic related to `collect initialization callbacks`.

### CollectProperties
`public void CollectProperties()`

**Purpose:** Handles logic related to `collect properties`.

### CollectFields
`public void CollectFields()`

**Purpose:** Handles logic related to `collect fields`.

### AddCustomField
`public void AddCustomField(string fieldName, short saveId)`

**Purpose:** Adds `custom field` to the current collection or state.

### GetPropertyDefinitionWithId
`public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)`

**Purpose:** Gets the current value of `property definition with id`.

### GetFieldDefinitionWithId
`public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)`

**Purpose:** Gets the current value of `field definition with id`.

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)`

**Purpose:** Initializes the state, resources, or bindings for `for auto generation`.

## Usage Example

```csharp
var value = new TypeDefinition();
value.CheckIfRequiresAdvancedResolving(originalObject);
```

## See Also

- [Complete Class Catalog](../catalog)