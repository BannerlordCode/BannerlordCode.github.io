---
title: "MapConversationTextureProvider"
description: "Auto-generated class reference for MapConversationTextureProvider."
---
# MapConversationTextureProvider

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class MapConversationTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/MapConversationTextureProvider.cs`

## Overview

`MapConversationTextureProvider` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public object Data { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MapConversationTextureProvider from the subsystem API first
MapConversationTextureProvider mapConversationTextureProvider = ...;
mapConversationTextureProvider.Clear(false);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationTextureProvider from the subsystem API first
MapConversationTextureProvider mapConversationTextureProvider = ...;
mapConversationTextureProvider.SetTargetSize(0, 0);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapConversationTextureProvider from the subsystem API first
MapConversationTextureProvider mapConversationTextureProvider = ...;
mapConversationTextureProvider.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapConversationTextureProvider mapConversationTextureProvider = ...;
mapConversationTextureProvider.Clear(false);
```

## See Also

- [Area Index](../)