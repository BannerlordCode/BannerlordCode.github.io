<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionRadialButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionRadialButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Radial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRadialButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Radial/MissionRadialButtonWidget.cs`

## 概述

`MissionRadialButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MissionRadialButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ExecuteFocused
`public void ExecuteFocused()`

**用途 / Purpose:** 执行 `focused` 操作或流程。

### ExecuteUnfocused
`public void ExecuteUnfocused()`

**用途 / Purpose:** 执行 `unfocused` 操作或流程。

## 使用示例

```csharp
var widget = new MissionRadialButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)