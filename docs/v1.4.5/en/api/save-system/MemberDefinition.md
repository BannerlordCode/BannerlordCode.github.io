<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MemberDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MemberDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class MemberDefinition`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/MemberDefinition.cs`

## Overview

`MemberDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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