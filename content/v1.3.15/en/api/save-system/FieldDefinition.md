---
title: "FieldDefinition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FieldDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FieldDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FieldDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**Area:** save-system

## Overview

`FieldDefinition` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a FieldDefinition instance from game state, then call one of its public methods
var value = new FieldDefinition();
value.GetMemberType();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
