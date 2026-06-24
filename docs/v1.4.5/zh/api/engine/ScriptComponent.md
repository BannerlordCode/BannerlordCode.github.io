<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScriptComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponent : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ScriptComponent.cs`

## 概述

`ScriptComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ScriptComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
var implementation = new CustomScriptComponent();
```

## 参见

- [完整类目录](../catalog)