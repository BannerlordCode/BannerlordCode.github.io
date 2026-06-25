---
title: "UsableMissionObjectComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMissionObjectComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMissionObjectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObjectComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## 概述

`UsableMissionObjectComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `UsableMissionObjectComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsOnTickRequired
`public virtual bool IsOnTickRequired()`

**用途 / Purpose:** 处理 `is on tick required` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomUsableMissionObjectComponent();
```

## 参见

- [完整类目录](../catalog)