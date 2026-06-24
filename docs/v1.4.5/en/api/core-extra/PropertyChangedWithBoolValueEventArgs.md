<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyChangedWithBoolValueEventArgs`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyChangedWithBoolValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithBoolValueEventArgs`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithBoolValueEventArgs.cs`

## Overview

`PropertyChangedWithBoolValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public bool Value { get; }` |

## Key Methods

### PropertyChangedWithBoolValueEventArgs
`public struct PropertyChangedWithBoolValueEventArgs(string propertyName, bool value)`

**Purpose:** Handles logic related to `property changed with bool value event args`.

## Usage Example

```csharp
var value = new PropertyChangedWithBoolValueEventArgs();
value.PropertyChangedWithBoolValueEventArgs("example", false);
```

## See Also

- [Complete Class Catalog](../catalog)