---
title: "PartyTroopManagementItemButtonWidget"
description: "PartyTroopManagementItemButtonWidget 的自动生成类参考。"
---
# PartyTroopManagementItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopManagementItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopManagementItemButtonWidget.cs`

## 概述

`PartyTroopManagementItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyTroopManagementItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActionButtonsContainer` | `public Widget ActionButtonsContainer { get; set; }` |

## 主要方法

### GetActionButtonAtIndex
`public Widget GetActionButtonAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「action button at index」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagementItemButtonWidget 实例
PartyTroopManagementItemButtonWidget partyTroopManagementItemButtonWidget = ...;
var result = partyTroopManagementItemButtonWidget.GetActionButtonAtIndex(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
PartyTroopManagementItemButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)