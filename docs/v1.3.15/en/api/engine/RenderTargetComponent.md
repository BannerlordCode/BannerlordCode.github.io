<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RenderTargetComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RenderTargetComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`

## Overview

`RenderTargetComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<RenderTargetComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `RenderTarget` | `public Texture RenderTarget { get { return (Texture)this._renderTargetWeakReference.GetNativeObject(); }` |
| `UserData` | `public object UserData { get; internal set; }` |

## Key Methods

### TextureUpdateEventHandler
```csharp
public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)
```

## Usage Example

```csharp
// Typical usage of RenderTargetComponent (Component)
agent.GetComponent<RenderTargetComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)