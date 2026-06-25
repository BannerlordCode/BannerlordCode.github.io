---
title: "ClanPartyRoleSelectionPopupWidget"
description: "ClanPartyRoleSelectionPopupWidget 的自动生成类参考。"
---
# ClanPartyRoleSelectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionPopupWidget : AutoClosePopupWidget`
**Base:** `AutoClosePopupWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanPartyRoleSelectionPopupWidget.cs`

## 概述

`ClanPartyRoleSelectionPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ClanPartyRoleSelectionPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveToggleWidget` | `public Widget ActiveToggleWidget { get; set; }` |

## 主要方法

### AddToggleWidget
`public void AddToggleWidget(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 将 toggle widget 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ClanPartyRoleSelectionPopupWidget 实例
ClanPartyRoleSelectionPopupWidget clanPartyRoleSelectionPopupWidget = ...;
clanPartyRoleSelectionPopupWidget.AddToggleWidget(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ClanPartyRoleSelectionPopupWidget widget = ...;
```

## 参见

- [本区域目录](../)