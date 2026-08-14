---
title: "IMBMessageManager"
description: "IMBMessageManager 的自动生成类参考。"
---
# IMBMessageManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBMessageManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/IMBMessageManager.cs`

## 概述

`IMBMessageManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `IMBMessageManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIMBMessageManager service = ...;
```

## 参见

- [本区域目录](../)