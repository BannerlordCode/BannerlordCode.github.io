---
title: "ICameraModeLogic"
description: "ICameraModeLogic 的自动生成类参考。"
---
# ICameraModeLogic

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface ICameraModeLogic`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ICameraModeLogic.cs`

## 概述

`ICameraModeLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `ICameraModeLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IICameraModeLogic service = ...;
```

## 参见

- [本区域目录](../)