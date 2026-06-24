<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `View`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# View

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class View : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/View.cs`

## Overview

`View` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetScale
`public void SetScale(Vec2 scale)`

**Purpose:** Sets the value or state of `scale`.

### SetOffset
`public void SetOffset(Vec2 offset)`

**Purpose:** Sets the value or state of `offset`.

### SetRenderOrder
`public void SetRenderOrder(int value)`

**Purpose:** Sets the value or state of `render order`.

### SetRenderOption
`public void SetRenderOption(ViewRenderOptions optionEnum, bool value)`

**Purpose:** Sets the value or state of `render option`.

### SetRenderTarget
`public void SetRenderTarget(Texture texture)`

**Purpose:** Sets the value or state of `render target`.

### SetDepthTarget
`public void SetDepthTarget(Texture texture)`

**Purpose:** Sets the value or state of `depth target`.

### DontClearBackground
`public void DontClearBackground()`

**Purpose:** Handles logic related to `dont clear background`.

### SetClearColor
`public void SetClearColor(uint rgba)`

**Purpose:** Sets the value or state of `clear color`.

### SetEnable
`public void SetEnable(bool value)`

**Purpose:** Sets the value or state of `enable`.

### SetRenderOnDemand
`public void SetRenderOnDemand(bool value)`

**Purpose:** Sets the value or state of `render on demand`.

### SetAutoDepthTargetCreation
`public void SetAutoDepthTargetCreation(bool value)`

**Purpose:** Sets the value or state of `auto depth target creation`.

### SetSaveFinalResultToDisk
`public void SetSaveFinalResultToDisk(bool value)`

**Purpose:** Sets the value or state of `save final result to disk`.

### SetFileNameToSaveResult
`public void SetFileNameToSaveResult(string name)`

**Purpose:** Sets the value or state of `file name to save result`.

### SetFileTypeToSave
`public void SetFileTypeToSave(TextureSaveFormat format)`

**Purpose:** Sets the value or state of `file type to save`.

### SetFilePathToSaveResult
`public void SetFilePathToSaveResult(string name)`

**Purpose:** Sets the value or state of `file path to save result`.

## Usage Example

```csharp
var implementation = new CustomView();
```

## See Also

- [Complete Class Catalog](../catalog)