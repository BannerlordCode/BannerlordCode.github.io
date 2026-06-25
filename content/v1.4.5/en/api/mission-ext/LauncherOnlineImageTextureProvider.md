---
title: "LauncherOnlineImageTextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherOnlineImageTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherOnlineImageTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherOnlineImageTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherOnlineImageTextureProvider.cs`

## Overview

`LauncherOnlineImageTextureProvider` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnlineSourceUrl` | `public string OnlineSourceUrl { get; set; }` |

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new LauncherOnlineImageTextureProvider();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)