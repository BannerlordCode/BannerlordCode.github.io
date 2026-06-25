---
title: "ScriptComponent"
description: "ScriptComponent 的自动生成类参考。"
---
# ScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponent : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/ScriptComponent.cs`

## 概述

`ScriptComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ScriptComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 ScriptComponent 实例
ScriptComponent scriptComponent = ...;
var result = scriptComponent.GetName();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ScriptComponent instance = ...;
```

## 参见

- [本区域目录](../)