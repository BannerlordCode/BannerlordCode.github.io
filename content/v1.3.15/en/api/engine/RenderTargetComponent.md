---
title: "RenderTargetComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RenderTargetComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RenderTargetComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`

## Overview

`RenderTargetComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RenderTargetComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RenderTarget` | `public Texture RenderTarget { get; set; }` |
| `UserData` | `public object UserData { get; set; }` |

## Key Methods

### TextureUpdateEventHandler
`public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)`

**Purpose:** Handles logic related to `texture update event handler`.

## Usage Example

```csharp
var component = agent.GetComponent<RenderTargetComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)