---
title: "TextureCreationInfo"
description: "Auto-generated class reference for TextureCreationInfo."
---
# TextureCreationInfo

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TextureCreationInfo`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/TextureCreationInfo.cs`

## Overview

`TextureCreationInfo` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSuccess` | `public bool IsSuccess { get; }` |
| `IsFail` | `public bool IsFail { get; }` |

## Key Methods

### WithNewTexture
`public static TextureCreationInfo WithNewTexture(Texture texture = null)`

**Purpose:** Executes the WithNewTexture logic.

```csharp
// Static call; no instance required
TextureCreationInfo.WithNewTexture(null);
```

### WithExistingTexture
`public static TextureCreationInfo WithExistingTexture(Texture texture)`

**Purpose:** Executes the WithExistingTexture logic.

```csharp
// Static call; no instance required
TextureCreationInfo.WithExistingTexture(texture);
```

### Fail
`public static TextureCreationInfo Fail()`

**Purpose:** Executes the Fail logic.

```csharp
// Static call; no instance required
TextureCreationInfo.Fail();
```

## Usage Example

```csharp
TextureCreationInfo.WithNewTexture(null);
```

## See Also

- [Area Index](../)