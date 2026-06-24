<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/PropertyObject.cs`

## Overview

`PropertyObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### Initialize
`public void Initialize(TextObject name, TextObject description)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new PropertyObject();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)