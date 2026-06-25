---
title: "IThumbnailCreatorView"
description: "Auto-generated class reference for IThumbnailCreatorView."
---
# IThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IThumbnailCreatorView`
**Base:** none
**File:** `TaleWorlds.Engine/IThumbnailCreatorView.cs`

## Overview

`IThumbnailCreatorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `IThumbnailCreatorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIThumbnailCreatorView service = ...;
```

## See Also

- [Area Index](../)