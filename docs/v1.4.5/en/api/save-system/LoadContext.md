<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoadContext

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadContext.cs`

## Overview

`LoadContext` lives in `TaleWorlds.SaveSystem.Load` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Load` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `Driver` | `public ISaveDriver Driver { get; }` |

## Key Methods

### Load
`public bool Load(LoadData loadData, bool loadAsLateInitialize)`

**Purpose:** Loads `load` data.

### TryConvertType
`public static bool TryConvertType(Type sourceType, Type targetType, ref object data)`

**Purpose:** Attempts to get `convert type`, usually returning the result in an out parameter.

### GetObjectWithId
`public ObjectHeaderLoadData GetObjectWithId(int id)`

**Purpose:** Gets the current value of `object with id`.

### GetContainerWithId
`public ContainerHeaderLoadData GetContainerWithId(int id)`

**Purpose:** Gets the current value of `container with id`.

### GetStringWithId
`public string GetStringWithId(int id)`

**Purpose:** Gets the current value of `string with id`.

## Usage Example

```csharp
var value = new LoadContext();
value.Load(loadData, false);
```

## See Also

- [Complete Class Catalog](../catalog)