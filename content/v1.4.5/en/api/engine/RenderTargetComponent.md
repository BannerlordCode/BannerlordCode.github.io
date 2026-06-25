---
title: "RenderTargetComponent"
description: "Auto-generated class reference for RenderTargetComponent."
---
# RenderTargetComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/RenderTargetComponent.cs`

## Overview

`RenderTargetComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RenderTargetComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserData` | `public object UserData { get; set; }` |

## Key Methods

### TextureUpdateEventHandler
`public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)`

**Purpose:** **Purpose:** Executes the TextureUpdateEventHandler logic.

```csharp
// Obtain an instance of RenderTargetComponent from the subsystem API first
RenderTargetComponent renderTargetComponent = ...;
renderTargetComponent.TextureUpdateEventHandler(sender, e);
```

## Usage Example

```csharp
var component = agent.GetComponent<RenderTargetComponent>();
```

## See Also

- [Area Index](../)