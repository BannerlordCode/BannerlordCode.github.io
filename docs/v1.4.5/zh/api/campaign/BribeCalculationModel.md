<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BribeCalculationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**Base:** `MBGameModel<BribeCalculationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BribeCalculationModel.cs`

## 概述

`BribeCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BribeCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBribeToEnterLordsHall
`public abstract int GetBribeToEnterLordsHall(Settlement settlement)`

**用途 / Purpose:** 获取 `bribe to enter lords hall` 的当前值。

### GetBribeToEnterDungeon
`public abstract int GetBribeToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** 获取 `bribe to enter dungeon` 的当前值。

### IsBribeNotNeededToEnterKeep
`public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**用途 / Purpose:** 处理 `is bribe not needed to enter keep` 相关逻辑。

### IsBribeNotNeededToEnterDungeon
`public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** 处理 `is bribe not needed to enter dungeon` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomBribeCalculationModel();
```

## 参见

- [完整类目录](../catalog)