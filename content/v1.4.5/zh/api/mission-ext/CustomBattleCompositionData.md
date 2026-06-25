---
title: "CustomBattleCompositionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleCompositionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleCompositionData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleCompositionData`
**Base:** 无
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleCompositionData.cs`

## 概述

`CustomBattleCompositionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CustomBattleCompositionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CustomBattleCompositionData
`public struct CustomBattleCompositionData(float rangedPercentage, float cavalryPercentage, float rangedCavalryPercentage)`

**用途 / Purpose:** 处理 `custom battle composition data` 相关逻辑。

## 使用示例

```csharp
var value = new CustomBattleCompositionData();
```

## 参见

- [完整类目录](../catalog)