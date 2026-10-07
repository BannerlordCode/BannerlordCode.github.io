---
title: "DefaultView"
description: "Auto-generated class reference for DefaultView."
---
# DefaultView

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultView : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/DefaultView.cs`

## Overview

`DefaultView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `DefaultView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DefaultView view = ...;
```

## See Also

- [Area Index](../)