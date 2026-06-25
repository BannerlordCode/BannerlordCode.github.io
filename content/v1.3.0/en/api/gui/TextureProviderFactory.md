---
title: "TextureProviderFactory"
description: "Auto-generated class reference for TextureProviderFactory."
---
# TextureProviderFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class TextureProviderFactory`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProviderFactory.cs`

## Overview

`TextureProviderFactory` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateInstance
`public static TextureProvider CreateInstance(string textureProviderName)`

**Purpose:** Constructs a new instance entity and returns it to the caller.

```csharp
// Static call; no instance required
TextureProviderFactory.CreateInstance("example");
```

### RefreshProviderTypes
`public static void RefreshProviderTypes()`

**Purpose:** Keeps the display or cache of provider types in sync with the underlying state.

```csharp
// Static call; no instance required
TextureProviderFactory.RefreshProviderTypes();
```

## Usage Example

```csharp
TextureProviderFactory.CreateInstance("example");
```

## See Also

- [Area Index](../)