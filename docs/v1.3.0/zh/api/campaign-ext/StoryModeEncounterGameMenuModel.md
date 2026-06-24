<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeEncounterGameMenuModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeEncounterGameMenuModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs`

## 概述

`StoryModeEncounterGameMenuModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeEncounterGameMenuModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**用途 / Purpose:** 获取 `encounter menu` 的当前值。

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**用途 / Purpose:** 获取 `generic state menu` 的当前值。

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**用途 / Purpose:** 获取 `new party join menu` 的当前值。

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**用途 / Purpose:** 获取 `raid complete menu` 的当前值。

### IsPlunderMenu
`public override bool IsPlunderMenu(string menuId)`

**用途 / Purpose:** 处理 `is plunder menu` 相关逻辑。

## 使用示例

```csharp
StoryModeEncounterGameMenuModel example = StoryModeEncounterGameMenuModel.Value;
```

## 参见

- [完整类目录](../catalog)