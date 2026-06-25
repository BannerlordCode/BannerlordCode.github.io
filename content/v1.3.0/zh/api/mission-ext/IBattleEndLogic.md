---
title: "IBattleEndLogic"
description: "IBattleEndLogic 的自动生成类参考。"
---
# IBattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBattleEndLogic`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/IBattleEndLogic.cs`

## 概述

`IBattleEndLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `IBattleEndLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIBattleEndLogic service = ...;
```

## 参见

- [本区域目录](../)