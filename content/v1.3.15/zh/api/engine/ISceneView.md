---
title: "ISceneView"
description: "ISceneView 的自动生成类参考。"
---
# ISceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ISceneView`
**Base:** 无
**File:** `TaleWorlds.Engine/ISceneView.cs`

## 概述

`ISceneView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ISceneView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IISceneView service = ...;
```

## 参见

- [本区域目录](../)