---
title: "IInputManager"
description: "IInputManager 的自动生成类参考。"
---
# IInputManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public interface IInputManager`
**Base:** 无
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/IInputManager.cs`

## 概述

`IInputManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `IInputManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIInputManager service = ...;
```

## 参见

- [本区域目录](../)