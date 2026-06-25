---
title: "CreditsItemWidget"
description: "CreditsItemWidget 的自动生成类参考。"
---
# CreditsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits/CreditsItemWidget.cs`

## 概述

`CreditsItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CreditsItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `CategoryWidget` | `public Widget CategoryWidget { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |
| `SectionWidget` | `public Widget SectionWidget { get; set; }` |
| `EntryWidget` | `public Widget EntryWidget { get; set; }` |
| `EmptyLineWidget` | `public Widget EmptyLineWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CreditsItemWidget widget = ...;
```

## 参见

- [本区域目录](../)