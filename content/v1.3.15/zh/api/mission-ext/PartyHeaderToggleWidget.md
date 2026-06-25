---
title: "PartyHeaderToggleWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyHeaderToggleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyHeaderToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs`

## 概述

`PartyHeaderToggleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyHeaderToggleWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget { get; set; }` |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator { get; set; }` |
| `IsRelevant` | `public bool IsRelevant { get; set; }` |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled { get; set; }` |

## 主要方法

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** 设置 `state` 的值或状态。

## 使用示例

```csharp
var widget = new PartyHeaderToggleWidget(context);
```

## 参见

- [完整类目录](../catalog)