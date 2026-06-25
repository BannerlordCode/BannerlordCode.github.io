---
title: "ClanLordStatusWidget"
description: "ClanLordStatusWidget 的自动生成类参考。"
---
# ClanLordStatusWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanLordStatusWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanLordStatusWidget.cs`

## 概述

`ClanLordStatusWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ClanLordStatusWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `StatusType` | `public int StatusType { get; set; }` |

## 主要方法

### ClanLordStatusWidget
`public class ClanLordStatusWidget(UIContext context)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClanLordStatusWidget 实例
ClanLordStatusWidget clanLordStatusWidget = ...;
var result = clanLordStatusWidget.ClanLordStatusWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ClanLordStatusWidget widget = ...;
```

## 参见

- [本区域目录](../)