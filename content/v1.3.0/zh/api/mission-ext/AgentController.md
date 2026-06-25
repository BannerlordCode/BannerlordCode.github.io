---
title: "AgentController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentController`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentController.cs`

## 概述

`AgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `AgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Owner` | `public Agent Owner { get; set; }` |
| `Mission` | `public Mission Mission { get; set; }` |

## 主要方法

### OnInitialize
`public virtual void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<AgentController>();
```

## 参见

- [完整类目录](../catalog)