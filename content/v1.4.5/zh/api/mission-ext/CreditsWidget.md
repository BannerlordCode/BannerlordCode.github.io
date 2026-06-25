---
title: "CreditsWidget"
description: "CreditsWidget 的自动生成类参考。"
---
# CreditsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits/CreditsWidget.cs`

## 概述

`CreditsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CreditsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootItemWidget` | `public Widget RootItemWidget { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer { get; set; }` |

## 主要方法

### CreditsWidget
`public class CreditsWidget(UIContext context)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CreditsWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 CreditsWidget 实例
CreditsWidget creditsWidget = ...;
var result = creditsWidget.CreditsWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CreditsWidget widget = ...;
```

## 参见

- [本区域目录](../)