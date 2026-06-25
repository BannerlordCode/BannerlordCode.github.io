---
title: "ToolDebugManager"
description: "ToolDebugManager 的自动生成类参考。"
---
# ToolDebugManager

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class ToolDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/ToolDebugManager.cs`

## 概述

`ToolDebugManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ToolDebugManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var manager = ToolDebugManager.Current;
```

## 参见

- [本区域目录](../)