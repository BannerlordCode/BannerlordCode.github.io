---
title: "VertexArrayObject"
description: "Auto-generated class reference for VertexArrayObject."
---
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

**Purpose:** Reads `vertex data` from persistent storage or a stream.

```csharp
// Obtain an instance of VertexArrayObject from the subsystem API first
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadVertexData(0);
```

### LoadUVData
`public void LoadUVData(float uvs)`

**Purpose:** Reads `u v data` from persistent storage or a stream.

```csharp
// Obtain an instance of VertexArrayObject from the subsystem API first
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadUVData(0);
```

### LoadIndexData
`public void LoadIndexData(uint indices)`

**Purpose:** Reads `index data` from persistent storage or a stream.

```csharp
// Obtain an instance of VertexArrayObject from the subsystem API first
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadIndexData(0);
```

### Bind
`public void Bind()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of VertexArrayObject from the subsystem API first
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.Bind();
```

### UnBind
`public static void UnBind()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
VertexArrayObject.UnBind();
```

### Create
`public static VertexArrayObject Create()`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
VertexArrayObject.Create();
```

### CreateWithUVBuffer
`public static VertexArrayObject CreateWithUVBuffer()`

**Purpose:** Constructs a new `with u v buffer` entity and returns it to the caller.

```csharp
// Static call; no instance required
VertexArrayObject.CreateWithUVBuffer();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadVertexData(0);
```

## See Also

- [Area Index](../)