---
title: "FieldDefinition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FieldDefinition`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FieldDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FieldDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/FieldDefinition.cs`

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

**Purpose:** Gets the current value of `member type`.

### GetValue
`public override object GetValue(object target)`

**Purpose:** Gets the current value of `value`.

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(GetFieldValueDelegate getFieldValueMethod)`

**Purpose:** Initializes the state, resources, or bindings for `for auto generation`.

## Usage Example

```csharp
var value = new FieldDefinition();
value.GetMemberType();
```

## See Also

- [Complete Class Catalog](../catalog)