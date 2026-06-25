---
title: "MapConversationTextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationTextureProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationTextureProvider

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class MapConversationTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/MapConversationTextureProvider.cs`

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

**Purpose:** Handles logic related to `clear`.

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new MapConversationTextureProvider();
value.Clear(false);
```

## See Also

- [Complete Class Catalog](../catalog)