---
title: "GatherArmyTupleButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GatherArmyTupleButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GatherArmyTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GatherArmyTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy/GatherArmyTupleButtonWidget.cs`

## 概述

`GatherArmyTupleButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GatherArmyTupleButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |

## 使用示例

```csharp
var widget = new GatherArmyTupleButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)