---
title: "MBDebugManager"
description: "MBDebugManager 的自动生成类参考。"
---
# MBDebugManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBDebugManager.cs`

## 概述

`MBDebugManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBDebugManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var manager = MBDebugManager.Current;
```

## 参见

- [本区域目录](../)