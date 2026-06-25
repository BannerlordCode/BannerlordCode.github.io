---
title: "WidgetComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetComponent`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetComponent

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetComponent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/WidgetComponent.cs`

## 概述

`WidgetComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `WidgetComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; }` |

## 使用示例

```csharp
var implementation = new CustomWidgetComponent();
```

## 参见

- [完整类目录](../catalog)