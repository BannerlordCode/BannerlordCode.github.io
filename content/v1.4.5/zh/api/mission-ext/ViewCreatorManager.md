---
title: "ViewCreatorManager"
description: "ViewCreatorManager 的自动生成类参考。"
---
# ViewCreatorManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ViewCreatorManager`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ViewCreatorManager.cs`

## 概述

`ViewCreatorManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ViewCreatorManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var manager = ViewCreatorManager.Current;
```

## 参见

- [本区域目录](../)