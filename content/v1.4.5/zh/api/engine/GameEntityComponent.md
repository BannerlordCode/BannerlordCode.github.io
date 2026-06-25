---
title: "GameEntityComponent"
description: "GameEntityComponent 的自动生成类参考。"
---
# GameEntityComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class GameEntityComponent : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntityComponent.cs`

## 概述

`GameEntityComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `GameEntityComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEntity
`public WeakGameEntity GetEntity()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 entity 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntityComponent 实例
GameEntityComponent gameEntityComponent = ...;
var result = gameEntityComponent.GetEntity();
```

### GetFirstMetaMesh
`public virtual MetaMesh GetFirstMetaMesh()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 first meta mesh 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntityComponent 实例
GameEntityComponent gameEntityComponent = ...;
var result = gameEntityComponent.GetFirstMetaMesh();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameEntityComponent instance = ...;
```

## 参见

- [本区域目录](../)