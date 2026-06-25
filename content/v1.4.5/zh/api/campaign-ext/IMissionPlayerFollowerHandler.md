---
title: "IMissionPlayerFollowerHandler"
description: "IMissionPlayerFollowerHandler 的自动生成类参考。"
---
# IMissionPlayerFollowerHandler

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public interface IMissionPlayerFollowerHandler`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/IMissionPlayerFollowerHandler.cs`

## 概述

`IMissionPlayerFollowerHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `IMissionPlayerFollowerHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIMissionPlayerFollowerHandler service = ...;
```

## 参见

- [本区域目录](../)