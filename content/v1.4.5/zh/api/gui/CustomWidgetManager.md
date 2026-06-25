---
title: "CustomWidgetManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomWidgetManager`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomWidgetManager

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class CustomWidgetManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/CustomWidgetManager.cs`

## 概述

`CustomWidgetManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CustomWidgetManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TouchAssembly
`public static void TouchAssembly()`

**用途 / Purpose:** 处理 `touch assembly` 相关逻辑。

## 使用示例

```csharp
var manager = CustomWidgetManager.Current;
```

## 参见

- [完整类目录](../catalog)