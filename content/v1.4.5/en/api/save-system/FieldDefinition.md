---
title: "FieldDefinition"
description: "Auto-generated class reference for FieldDefinition."
---
# FieldDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FieldDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/FieldDefinition.cs`

## Overview

`FieldDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FieldInfo` | `public FieldInfo FieldInfo { get; }` |
| `SaveableFieldAttribute` | `public SaveableFieldAttribute SaveableFieldAttribute { get; }` |
| `GetFieldValueMethod` | `public GetFieldValueDelegate GetFieldValueMethod { get; }` |

## Key Methods

### GetMemberType
`public override Type GetMemberType()`

**Purpose:** Reads and returns the member type value held by the this instance.

```csharp
// Obtain an instance of FieldDefinition from the subsystem API first
FieldDefinition fieldDefinition = ...;
var result = fieldDefinition.GetMemberType();
```

### GetValue
`public override object GetValue(object target)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of FieldDefinition from the subsystem API first
FieldDefinition fieldDefinition = ...;
var result = fieldDefinition.GetValue(target);
```

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(GetFieldValueDelegate getFieldValueMethod)`

**Purpose:** Prepares the resources, state, or bindings required by for auto generation.

```csharp
// Obtain an instance of FieldDefinition from the subsystem API first
FieldDefinition fieldDefinition = ...;
fieldDefinition.InitializeForAutoGeneration(getFieldValueMethod);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FieldDefinition fieldDefinition = ...;
fieldDefinition.GetMemberType();
```

## See Also

- [Area Index](../)