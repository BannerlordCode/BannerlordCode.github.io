---
title: "ParallaxContainerWidget"
description: "ParallaxContainerWidget 的自动生成类参考。"
---
# ParallaxContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ParallaxContainerWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs`

## 概述

`ParallaxContainerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ParallaxContainerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ParallaxContainerWidget
`public class ParallaxContainerWidget(UIContext context)`

**用途 / Purpose:** 处理与 「parallax container widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ParallaxContainerWidget 实例
ParallaxContainerWidget parallaxContainerWidget = ...;
var result = parallaxContainerWidget.ParallaxContainerWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ParallaxContainerWidget widget = ...;
```

## 参见

- [本区域目录](../)