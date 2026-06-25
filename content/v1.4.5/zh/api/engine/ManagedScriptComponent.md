---
title: "ManagedScriptComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedScriptComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedScriptComponent.cs`

## 概述

`ManagedScriptComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ManagedScriptComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetVariableEditorWidgetStatus
`public void SetVariableEditorWidgetStatus(string field, bool enabled)`

**用途 / Purpose:** 设置 `variable editor widget status` 的值或状态。

### SetVariableEditorWidgetValue
`public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)`

**用途 / Purpose:** 设置 `variable editor widget value` 的值或状态。

## 使用示例

```csharp
var component = agent.GetComponent<ManagedScriptComponent>();
```

## 参见

- [完整类目录](../catalog)