---
title: "PartyHealthFillBarWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyHealthFillBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyHealthFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHealthFillBarWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyHealthFillBarWidget.cs`

## 概述

`PartyHealthFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyHealthFillBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `IsWounded` | `public bool IsWounded { get; set; }` |
| `HealthText` | `public TextWidget HealthText { get; set; }` |

## 主要方法

### PartyHealthFillBarWidget
`public class PartyHealthFillBarWidget(UIContext context)`

**用途 / Purpose:** 处理 `party health fill bar widget` 相关逻辑。

## 使用示例

```csharp
var widget = new PartyHealthFillBarWidget(context);
```

## 参见

- [完整类目录](../catalog)