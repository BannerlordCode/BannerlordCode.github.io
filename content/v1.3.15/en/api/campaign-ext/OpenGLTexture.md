---
title: "OpenGLTexture"
description: "Auto-generated class reference for OpenGLTexture."
---
# OpenGLTexture

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class OpenGLTexture : ITexture`
**Base:** `ITexture`
**File:** `TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs`

## Overview

`OpenGLTexture` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; set; }` |
| `Width` | `public int Width { get; set; }` |
| `Height` | `public int Height { get; }` |
| `Name` | `public string Name { get; }` |
| `ClampToEdge` | `public bool ClampToEdge { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(string name, int width, int height)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
openGLTexture.Initialize("example", 0, 0);
```

### CopyFrom
`public void CopyFrom(OpenGLTexture texture)`

**Purpose:** Copies the `from` state of the current object to a target.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
openGLTexture.CopyFrom(texture);
```

### Delete
`public void Delete()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
openGLTexture.Delete();
```

### FromFile
`public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
OpenGLTexture.FromFile(resourceDepot, "example");
```

### FromFile
`public static OpenGLTexture FromFile(string fullFilePath)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
OpenGLTexture.FromFile("example");
```

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
openGLTexture.Release();
```

### LoadFromFile
`public void LoadFromFile(ResourceDepot resourceDepot, string name)`

**Purpose:** Reads `from file` from persistent storage or a stream.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
openGLTexture.LoadFromFile(resourceDepot, "example");
```

### LoadFromFile
`public void LoadFromFile(string fullPathName)`

**Purpose:** Reads `from file` from persistent storage or a stream.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
openGLTexture.LoadFromFile("example");
```

### IsLoaded
`public bool IsLoaded()`

**Purpose:** Determines whether the current object is in the `loaded` state or condition.

```csharp
// Obtain an instance of OpenGLTexture from the subsystem API first
OpenGLTexture openGLTexture = ...;
var result = openGLTexture.IsLoaded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OpenGLTexture openGLTexture = ...;
openGLTexture.Initialize("example", 0, 0);
```

## See Also

- [Area Index](../)