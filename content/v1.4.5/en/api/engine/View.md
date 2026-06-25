---
title: "View"
description: "Auto-generated class reference for View."
---
# View

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class View : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/View.cs`

## Overview

`View` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetScale
`public void SetScale(Vec2 scale)`

**Purpose:** Assigns a new value to `scale` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetScale(scale);
```

### SetOffset
`public void SetOffset(Vec2 offset)`

**Purpose:** Assigns a new value to `offset` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetOffset(offset);
```

### SetRenderOrder
`public void SetRenderOrder(int value)`

**Purpose:** Assigns a new value to `render order` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetRenderOrder(0);
```

### SetRenderOption
`public void SetRenderOption(ViewRenderOptions optionEnum, bool value)`

**Purpose:** Assigns a new value to `render option` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetRenderOption(optionEnum, false);
```

### SetRenderTarget
`public void SetRenderTarget(Texture texture)`

**Purpose:** Assigns a new value to `render target` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetRenderTarget(texture);
```

### SetDepthTarget
`public void SetDepthTarget(Texture texture)`

**Purpose:** Assigns a new value to `depth target` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetDepthTarget(texture);
```

### DontClearBackground
`public void DontClearBackground()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.DontClearBackground();
```

### SetClearColor
`public void SetClearColor(uint rgba)`

**Purpose:** Assigns a new value to `clear color` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetClearColor(0);
```

### SetEnable
`public void SetEnable(bool value)`

**Purpose:** Assigns a new value to `enable` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetEnable(false);
```

### SetRenderOnDemand
`public void SetRenderOnDemand(bool value)`

**Purpose:** Assigns a new value to `render on demand` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetRenderOnDemand(false);
```

### SetAutoDepthTargetCreation
`public void SetAutoDepthTargetCreation(bool value)`

**Purpose:** Assigns a new value to `auto depth target creation` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetAutoDepthTargetCreation(false);
```

### SetSaveFinalResultToDisk
`public void SetSaveFinalResultToDisk(bool value)`

**Purpose:** Assigns a new value to `save final result to disk` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetSaveFinalResultToDisk(false);
```

### SetFileNameToSaveResult
`public void SetFileNameToSaveResult(string name)`

**Purpose:** Assigns a new value to `file name to save result` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetFileNameToSaveResult("example");
```

### SetFileTypeToSave
`public void SetFileTypeToSave(TextureSaveFormat format)`

**Purpose:** Assigns a new value to `file type to save` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetFileTypeToSave(format);
```

### SetFilePathToSaveResult
`public void SetFilePathToSaveResult(string name)`

**Purpose:** Assigns a new value to `file path to save result` and updates the object's internal state.

```csharp
// Obtain an instance of View from the subsystem API first
View view = ...;
view.SetFilePathToSaveResult("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
View instance = ...;
```

## See Also

- [Area Index](../)