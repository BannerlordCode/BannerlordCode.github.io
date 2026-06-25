---
title: "WeakMaterial"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeakMaterial`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeakMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WeakMaterial`
**Base:** none
**File:** `TaleWorlds.Engine/WeakMaterial.cs`

## Overview

`WeakMaterial` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### GetShader
`public Shader GetShader()`

**Purpose:** Gets the current value of `shader`.

### GetShaderFlags
`public ulong GetShaderFlags()`

**Purpose:** Gets the current value of `shader flags`.

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**Purpose:** Sets the value or state of `shader flags`.

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**Purpose:** Sets the value or state of `mesh vector argument`.

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**Purpose:** Sets the value or state of `texture`.

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**Purpose:** Sets the value or state of `texture at slot`.

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**Purpose:** Sets the value or state of `area map scale`.

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**Purpose:** Sets the value or state of `enable skinning`.

### UsingSkinning
`public bool UsingSkinning()`

**Purpose:** Handles logic related to `using skinning`.

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**Purpose:** Gets the current value of `texture`.

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**Purpose:** Gets the current value of `texture with slot`.

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**Purpose:** Adds `material shader flag` to the current collection or state.

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**Purpose:** Removes `material shader flag` from the current collection or state.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new WeakMaterial();
value.GetShader();
```

## See Also

- [Complete Class Catalog](../catalog)