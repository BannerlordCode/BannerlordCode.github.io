---
title: "TextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceInfo` | `public string SourceInfo { get; set; }` |

## Key Methods

### SetTargetSize
`public virtual void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### GetTextureForRender
`public Texture GetTextureForRender(TwoDimensionContext context, string name = null)`

**Purpose:** Gets the current value of `texture for render`.

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### Clear
`public virtual void Clear(bool clearNextFrame)`

**Purpose:** Handles logic related to `clear`.

### SetProperty
`public void SetProperty(string name, object value)`

**Purpose:** Sets the value or state of `property`.

### GetProperty
`public object GetProperty(string name)`

**Purpose:** Gets the current value of `property`.

## Usage Example

```csharp
var implementation = new CustomTextureProvider();
```

## See Also

- [Complete Class Catalog](../catalog)