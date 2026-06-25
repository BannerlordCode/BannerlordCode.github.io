---
title: "CharacterCreationStageSelectionBarListPanel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationStageSelectionBarListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationStageSelectionBarListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationStageSelectionBarListPanel`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs`

## 概述

`CharacterCreationStageSelectionBarListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StageButtonTemplate` | `public ButtonWidget StageButtonTemplate { get; set; }` |
| `BarFillWidget` | `public Widget BarFillWidget { get; set; }` |
| `BarCanvasWidget` | `public Widget BarCanvasWidget { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `TotalStagesCount` | `public int TotalStagesCount { get; set; }` |
| `OpenedStageIndex` | `public int OpenedStageIndex { get; set; }` |
| `FullButtonBrush` | `public string FullButtonBrush { get; set; }` |
| `EmptyButtonBrush` | `public string EmptyButtonBrush { get; set; }` |
| `FullBrightButtonBrush` | `public string FullBrightButtonBrush { get; set; }` |

## 主要方法

### CharacterCreationStageSelectionBarListPanel
`public class CharacterCreationStageSelectionBarListPanel(UIContext context)`

**用途 / Purpose:** 处理 `character creation stage selection bar list panel` 相关逻辑。

## 使用示例

```csharp
var value = new CharacterCreationStageSelectionBarListPanel();
value.CharacterCreationStageSelectionBarListPanel(context);
```

## 参见

- [完整类目录](../catalog)