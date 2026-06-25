---
title: "ScreenBackgroundBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScreenBackgroundBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScreenBackgroundBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScreenBackgroundBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs`

## 概述

`ScreenBackgroundBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScreenBackgroundBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsParticleVisible` | `public bool IsParticleVisible { get; set; }` |
| `IsSmokeVisible` | `public bool IsSmokeVisible { get; set; }` |
| `IsFullscreenImageEnabled` | `public bool IsFullscreenImageEnabled { get; set; }` |
| `AnimEnabled` | `public bool AnimEnabled { get; set; }` |
| `ParticleWidget1` | `public Widget ParticleWidget1 { get; set; }` |
| `ParticleWidget2` | `public Widget ParticleWidget2 { get; set; }` |
| `SmokeWidget1` | `public Widget SmokeWidget1 { get; set; }` |
| `SmokeWidget2` | `public Widget SmokeWidget2 { get; set; }` |
| `SmokeSpeedModifier` | `public float SmokeSpeedModifier { get; set; }` |
| `ParticleSpeedModifier` | `public float ParticleSpeedModifier { get; set; }` |

## 使用示例

```csharp
var widget = new ScreenBackgroundBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)