---
title: "ManagedScriptComponent"
description: "ManagedScriptComponent 的自动生成类参考。"
---
# ManagedScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedScriptComponent.cs`

## 概述

`ManagedScriptComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ManagedScriptComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetVariableEditorWidgetStatus
`public void SetVariableEditorWidgetStatus(string field, bool enabled)`

**用途 / Purpose:** 为 variable editor widget status 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedScriptComponent 实例
ManagedScriptComponent managedScriptComponent = ...;
managedScriptComponent.SetVariableEditorWidgetStatus("example", false);
```

### SetVariableEditorWidgetValue
`public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)`

**用途 / Purpose:** 为 variable editor widget value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedScriptComponent 实例
ManagedScriptComponent managedScriptComponent = ...;
managedScriptComponent.SetVariableEditorWidgetValue("example", fieldType, 0);
```

## 使用示例

```csharp
var component = agent.GetComponent<ManagedScriptComponent>();
```

## 参见

- [本区域目录](../)