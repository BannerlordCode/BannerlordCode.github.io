---
title: "CaptainScoreboardData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaptainScoreboardData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CaptainScoreboardData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaptainScoreboardData : IScoreboardData`
**Base:** `IScoreboardData`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/CaptainScoreboardData.cs`

## 概述

`CaptainScoreboardData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CaptainScoreboardData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetScoreboardHeaders
`public ScoreboardHeader GetScoreboardHeaders()`

**用途 / Purpose:** 获取 `scoreboard headers` 的当前值。

## 使用示例

```csharp
var value = new CaptainScoreboardData();
```

## 参见

- [完整类目录](../catalog)