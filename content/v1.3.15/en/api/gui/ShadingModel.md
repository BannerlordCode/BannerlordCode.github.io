---
title: "ShadingModel"
description: "Auto-generated class reference for ShadingModel."
---
# ShadingModel

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `internal enum ShadingModel : uint`
**Base:** `uint`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/OpenGL/ShadingModel.cs`

## Overview

`ShadingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ShadingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Game.Current.ReplaceModel<ShadingModel>(new MyShadingModel());
```

## See Also

- [Area Index](../)