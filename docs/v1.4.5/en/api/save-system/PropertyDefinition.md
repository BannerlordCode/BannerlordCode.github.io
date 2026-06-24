<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class PropertyDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/PropertyDefinition.cs`

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

**Purpose:** Gets the current value of `member type`.

### GetValue
`public override object GetValue(object target)`

**Purpose:** Gets the current value of `value`.

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(GetPropertyValueDelegate getPropertyValueMethod)`

**Purpose:** Initializes the state, resources, or bindings for `for auto generation`.

## Usage Example

```csharp
var value = new PropertyDefinition();
value.GetMemberType();
```

## See Also

- [Complete Class Catalog](../catalog)