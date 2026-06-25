---
title: "ITelemetryManager"
description: "ITelemetryManager 的自动生成类参考。"
---
# ITelemetryManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface ITelemetryManager`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ITelemetryManager.cs`

## 概述

`ITelemetryManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ITelemetryManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IITelemetryManager service = ...;
```

## 参见

- [本区域目录](../)