<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyChangedWithColorValueEventArgs`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyChangedWithColorValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithColorValueEventArgs`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithColorValueEventArgs.cs`

## Overview

`PropertyChangedWithColorValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public Color Value { get; }` |

## Key Methods

### PropertyChangedWithColorValueEventArgs
`public struct PropertyChangedWithColorValueEventArgs(string propertyName, Color value)`

**Purpose:** Handles logic related to `property changed with color value event args`.

## Usage Example

```csharp
var value = new PropertyChangedWithColorValueEventArgs();
value.PropertyChangedWithColorValueEventArgs("example", value);
```

## See Also

- [Complete Class Catalog](../catalog)