---
title: "MemberDefinition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MemberDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MemberDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class MemberDefinition`
**Area:** save-system

## Overview

`MemberDefinition` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public MemberTypeId Id { get; }` |
| `MemberInfo` | `public MemberInfo MemberInfo { get; }` |

## Key Methods

### GetMemberType
`public abstract Type GetMemberType()`

**Purpose:** Gets the current value of `member type`.

### GetValue
`public abstract object GetValue(object target)`

**Purpose:** Gets the current value of `value`.

## Usage Example

```csharp
var implementation = new CustomMemberDefinition();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
