---
title: "NavigationData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigationData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct NavigationData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/NavigationData.cs`

## 概述

`NavigationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `NavigationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** 处理 `tick debug` 相关逻辑。

## 使用示例

```csharp
var value = new NavigationData();
```

## 参见

- [完整类目录](../catalog)