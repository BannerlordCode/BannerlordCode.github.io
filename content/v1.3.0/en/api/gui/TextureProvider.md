---
title: "TextureProvider"
description: "Auto-generated class reference for TextureProvider."
---
# TextureProvider

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class TextureProvider`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs`

## Overview

`TextureProvider` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetTargetSize
`public virtual void SetTargetSize(int width, int height)`

**Purpose:** **Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of TextureProvider from the subsystem API first
TextureProvider textureProvider = ...;
textureProvider.SetTargetSize(0, 0);
```

### GetTextureForRender
`public Texture GetTextureForRender(TwoDimensionContext context, string name = null, bool useHashcodeAsName = false)`

**Purpose:** **Purpose:** Reads and returns the texture for render value held by the this instance.

```csharp
// Obtain an instance of TextureProvider from the subsystem API first
TextureProvider textureProvider = ...;
var result = textureProvider.GetTextureForRender(context, "example", false);
```

### Tick
`public virtual void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of TextureProvider from the subsystem API first
TextureProvider textureProvider = ...;
textureProvider.Tick(0);
```

### Clear
`public virtual void Clear(bool clearNextFrame)`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of TextureProvider from the subsystem API first
TextureProvider textureProvider = ...;
textureProvider.Clear(false);
```

### SetProperty
`public void SetProperty(string name, object value)`

**Purpose:** **Purpose:** Assigns a new value to property and updates the object's internal state.

```csharp
// Obtain an instance of TextureProvider from the subsystem API first
TextureProvider textureProvider = ...;
textureProvider.SetProperty("example", value);
```

### GetProperty
`public object GetProperty(string name)`

**Purpose:** **Purpose:** Reads and returns the property value held by the this instance.

```csharp
// Obtain an instance of TextureProvider from the subsystem API first
TextureProvider textureProvider = ...;
var result = textureProvider.GetProperty("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TextureProvider instance = ...;
```

## See Also

- [Area Index](../)