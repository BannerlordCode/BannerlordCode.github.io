---
title: "SpectatorData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpectatorData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SpectatorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpectatorData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`SpectatorData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SpectatorData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentToFollow` | `public Agent AgentToFollow { get; }` |
| `AgentVisualToFollow` | `public IAgentVisual AgentVisualToFollow { get; }` |
| `CameraType` | `public SpectatorCameraTypes CameraType { get; }` |

## 使用示例

```csharp
var value = new SpectatorData();
```

## 参见

- [完整类目录](../catalog)