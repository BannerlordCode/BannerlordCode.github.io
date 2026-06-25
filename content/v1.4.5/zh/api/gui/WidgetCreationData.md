---
title: "WidgetCreationData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetCreationData`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCreationData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCreationData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## 概述

`WidgetCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `WidgetCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Parent` | `public Widget Parent { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |

## 主要方法

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension data`。

### AddExtensionData
`public void AddExtensionData(object data)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension data`。

## 使用示例

```csharp
var value = new WidgetCreationData();
```

## 参见

- [完整类目录](../catalog)