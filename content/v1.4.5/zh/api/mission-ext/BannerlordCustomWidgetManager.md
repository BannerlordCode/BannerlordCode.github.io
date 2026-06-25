---
title: "BannerlordCustomWidgetManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordCustomWidgetManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordCustomWidgetManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordCustomWidgetManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerlordCustomWidgetManager.cs`

## 概述

`BannerlordCustomWidgetManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BannerlordCustomWidgetManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TouchAssembly
`public static void TouchAssembly()`

**用途 / Purpose:** 处理 `touch assembly` 相关逻辑。

## 使用示例

```csharp
var manager = BannerlordCustomWidgetManager.Current;
```

## 参见

- [完整类目录](../catalog)