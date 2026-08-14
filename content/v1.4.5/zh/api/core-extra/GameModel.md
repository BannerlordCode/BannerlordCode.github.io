---
title: "GameModel"
description: "GameModel 的自动生成类参考。"
---
# GameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModel`
**Base:** 无
**File:** `TaleWorlds.Core/GameModel.cs`

## 概述

`GameModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `GameModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameModel instance = ...;
```

## 参见

- [本区域目录](../)