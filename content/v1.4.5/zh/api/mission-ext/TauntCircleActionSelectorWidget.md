---
title: "TauntCircleActionSelectorWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntCircleActionSelectorWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TauntCircleActionSelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntCircleActionSelectorWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/TauntCircleActionSelectorWidget.cs`

## 概述

`TauntCircleActionSelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TauntCircleActionSelectorWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FallbackNavigationWidget` | `public Widget FallbackNavigationWidget { get; set; }` |

## 主要方法

### TauntCircleActionSelectorWidget
`public class TauntCircleActionSelectorWidget(UIContext context)`

**用途 / Purpose:** 处理 `taunt circle action selector widget` 相关逻辑。

## 使用示例

```csharp
var widget = new TauntCircleActionSelectorWidget(context);
```

## 参见

- [完整类目录](../catalog)