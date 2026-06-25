---
title: "LauncherOnlineImageTextureProvider"
description: "Auto-generated class reference for LauncherOnlineImageTextureProvider."
---
# LauncherOnlineImageTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherOnlineImageTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherOnlineImageTextureProvider.cs`

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

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of LauncherOnlineImageTextureProvider from the subsystem API first
LauncherOnlineImageTextureProvider launcherOnlineImageTextureProvider = ...;
launcherOnlineImageTextureProvider.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LauncherOnlineImageTextureProvider launcherOnlineImageTextureProvider = ...;
launcherOnlineImageTextureProvider.Tick(0);
```

## See Also

- [Area Index](../)