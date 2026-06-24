<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OpenGLTexture`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OpenGLTexture

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class OpenGLTexture : ITexture`
**Base:** `ITexture`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs`

## Overview

`OpenGLTexture` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `ClampToEdge` | `public bool ClampToEdge { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(string name, int width, int height)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### CopyFrom
`public void CopyFrom(OpenGLTexture texture)`

**Purpose:** Handles logic related to `copy from`.

### Delete
`public void Delete()`

**Purpose:** Handles logic related to `delete`.

### FromFile
`public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)`

**Purpose:** Handles logic related to `from file`.

### FromFile
`public static OpenGLTexture FromFile(string fullFilePath)`

**Purpose:** Handles logic related to `from file`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### LoadFromFile
`public void LoadFromFile(ResourceDepot resourceDepot, string name)`

**Purpose:** Loads `from file` data.

### LoadFromFile
`public void LoadFromFile(string fullPathName)`

**Purpose:** Loads `from file` data.

### IsLoaded
`public bool IsLoaded()`

**Purpose:** Handles logic related to `is loaded`.

## Usage Example

```csharp
var value = new OpenGLTexture();
value.Initialize("example", 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)