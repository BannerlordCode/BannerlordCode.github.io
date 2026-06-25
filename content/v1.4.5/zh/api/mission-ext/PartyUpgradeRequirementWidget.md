---
title: "PartyUpgradeRequirementWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyUpgradeRequirementWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyUpgradeRequirementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeRequirementWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyUpgradeRequirementWidget.cs`

## 概述

`PartyUpgradeRequirementWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyUpgradeRequirementWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RequirementId` | `public string RequirementId { get; set; }` |
| `IsSufficient` | `public bool IsSufficient { get; set; }` |
| `IsPerkRequirement` | `public bool IsPerkRequirement { get; set; }` |
| `NormalColor` | `public Color NormalColor { get; set; }` |
| `InsufficientColor` | `public Color InsufficientColor { get; set; }` |

## 使用示例

```csharp
var widget = new PartyUpgradeRequirementWidget(context);
```

## 参见

- [完整类目录](../catalog)