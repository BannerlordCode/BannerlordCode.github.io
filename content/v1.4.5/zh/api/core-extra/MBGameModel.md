---
title: "MBGameModel"
description: "MBGameModel 的自动生成类参考。"
---
# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel where T : GameModel`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBGameModel.cs`

## 概述

`MBGameModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MBGameModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize(T baseModel)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBGameModel 实例
MBGameModel mBGameModel = ...;
mBGameModel.Initialize(baseModel);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MBGameModel instance = ...;
```

## 参见

- [本区域目录](../)