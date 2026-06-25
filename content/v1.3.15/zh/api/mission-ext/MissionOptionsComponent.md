---
title: "MissionOptionsComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOptionsComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOptionsComponent

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOptionsComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs`

## 概述

`MissionOptionsComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionOptionsComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAddOptionsUIHandler
`public void OnAddOptionsUIHandler()`

**用途 / Purpose:** 当 `add options u i handler` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<MissionOptionsComponent>();
```

## 参见

- [完整类目录](../catalog)