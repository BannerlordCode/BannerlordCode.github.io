---
title: "CharacterCreationStageSelectionBarListPanel"
description: "CharacterCreationStageSelectionBarListPanel 的自动生成类参考。"
---
# CharacterCreationStageSelectionBarListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationStageSelectionBarListPanel`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 调用 CharacterCreationStageSelectionBarListPanel 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageSelectionBarListPanel 实例
CharacterCreationStageSelectionBarListPanel characterCreationStageSelectionBarListPanel = ...;
var result = characterCreationStageSelectionBarListPanel.CharacterCreationStageSelectionBarListPanel(context);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationStageSelectionBarListPanel characterCreationStageSelectionBarListPanel = ...;
characterCreationStageSelectionBarListPanel.CharacterCreationStageSelectionBarListPanel(context);
```

## 参见

- [本区域目录](../)