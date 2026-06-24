<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VertexArrayObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VertexArrayObject

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class VertexArrayObject`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/VertexArrayObject.cs`

## Overview

`VertexArrayObject` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadVertexData
`public void LoadVertexData(float vertices)`

**Purpose:** Loads `vertex data` data.

### LoadUVData
`public void LoadUVData(float uvs)`

**Purpose:** Loads `u v data` data.

### LoadIndexData
`public void LoadIndexData(uint indices)`

**Purpose:** Loads `index data` data.

### Bind
`public void Bind()`

**Purpose:** Handles logic related to `bind`.

### UnBind
`public static void UnBind()`

**Purpose:** Handles logic related to `un bind`.

### Create
`public static VertexArrayObject Create()`

**Purpose:** Creates a new `create` instance or object.

### CreateWithUVBuffer
`public static VertexArrayObject CreateWithUVBuffer()`

**Purpose:** Creates a new `with u v buffer` instance or object.

## Usage Example

```csharp
var value = new VertexArrayObject();
value.LoadVertexData(0);
```

## See Also

- [Complete Class Catalog](../catalog)