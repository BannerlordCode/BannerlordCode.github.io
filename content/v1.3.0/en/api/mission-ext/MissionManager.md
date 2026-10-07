---
title: "MissionManager"
description: "Auto-generated class reference for MissionManager."
---
# MissionManager

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionManager : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/MissionManager.cs`

## Overview

`MissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var manager = MissionManager.Current;
```

## See Also

- [Area Index](../)