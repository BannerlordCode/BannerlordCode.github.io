---
title: "IBattlePowerCalculationLogic"
description: "IBattlePowerCalculationLogic 的自动生成类参考。"
---
# IBattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBattlePowerCalculationLogic : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IBattlePowerCalculationLogic.cs`

## 概述

`IBattlePowerCalculationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `IBattlePowerCalculationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIBattlePowerCalculationLogic service = ...;
```

## 参见

- [本区域目录](../)