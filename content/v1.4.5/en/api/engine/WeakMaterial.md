---
title: "WeakMaterial"
description: "Auto-generated class reference for WeakMaterial."
---
# WeakMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WeakMaterial`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/WeakMaterial.cs`

## Overview

`WeakMaterial` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### GetShader
`public Shader GetShader()`

**Purpose:** Reads and returns the `shader` value held by the current object.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetShader();
```

### GetShaderFlags
`public ulong GetShaderFlags()`

**Purpose:** Reads and returns the `shader flags` value held by the current object.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetShaderFlags();
```

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**Purpose:** Assigns a new value to `shader flags` and updates the object's internal state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.SetShaderFlags(0);
```

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**Purpose:** Assigns a new value to `mesh vector argument` and updates the object's internal state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.SetMeshVectorArgument(0, 0, 0, 0);
```

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**Purpose:** Assigns a new value to `texture` and updates the object's internal state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.SetTexture(textureType, texture);
```

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**Purpose:** Assigns a new value to `texture at slot` and updates the object's internal state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.SetTextureAtSlot(0, texture);
```

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**Purpose:** Assigns a new value to `area map scale` and updates the object's internal state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.SetAreaMapScale(0);
```

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**Purpose:** Assigns a new value to `enable skinning` and updates the object's internal state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.SetEnableSkinning(false);
```

### UsingSkinning
`public bool UsingSkinning()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.UsingSkinning();
```

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**Purpose:** Reads and returns the `texture` value held by the current object.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetTexture(textureType);
```

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**Purpose:** Reads and returns the `texture with slot` value held by the current object.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetTextureWithSlot(0);
```

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**Purpose:** Adds `material shader flag` to the current collection or state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.AddMaterialShaderFlag("example", false);
```

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**Purpose:** Removes `material shader flag` from the current collection or state.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
weakMaterial.RemoveMaterialShaderFlag("example");
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of WeakMaterial from the subsystem API first
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeakMaterial weakMaterial = ...;
weakMaterial.GetShader();
```

## See Also

- [Area Index](../)