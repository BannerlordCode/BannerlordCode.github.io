---
title: "MissionMatchHistoryComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMatchHistoryComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMatchHistoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMatchHistoryComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionMatchHistoryComponent.cs`

## 概述

`MissionMatchHistoryComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionMatchHistoryComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateIfConditionsAreMet
`public static MissionMatchHistoryComponent CreateIfConditionsAreMet()`

**用途 / Purpose:** 创建一个 `if conditions are met` 实例或对象。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<MissionMatchHistoryComponent>();
```

## 参见

- [完整类目录](../catalog)