---
title: "ClickableCharacterTableauWidget"
description: "ClickableCharacterTableauWidget 的自动生成类参考。"
---
# ClickableCharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClickableCharacterTableauWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs`

## 概述

`ClickableCharacterTableauWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ClickableCharacterTableauWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ClickableCharacterTableauWidget
`public class ClickableCharacterTableauWidget(UIContext context)`

**用途 / Purpose:** 调用 ClickableCharacterTableauWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 ClickableCharacterTableauWidget 实例
ClickableCharacterTableauWidget clickableCharacterTableauWidget = ...;
var result = clickableCharacterTableauWidget.ClickableCharacterTableauWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ClickableCharacterTableauWidget widget = ...;
```

## 参见

- [本区域目录](../)