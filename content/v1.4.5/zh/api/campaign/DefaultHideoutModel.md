---
title: "DefaultHideoutModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHideoutModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHideoutModel.cs`

## 概述

`DefaultHideoutModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHideoutModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRogueryXpGainAsGhost
`public override float GetRogueryXpGainAsGhost()`

**用途 / Purpose:** 获取 `roguery xp gain as ghost` 的当前值。

### GetRogueryXpGainOnHideoutMissionEnd
`public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**用途 / Purpose:** 获取 `roguery xp gain on hideout mission end` 的当前值。

### GetSendTroopsSuccessChance
`public override float GetSendTroopsSuccessChance(Hideout hideout)`

**用途 / Purpose:** 获取 `send troops success chance` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## 参见

- [完整类目录](../catalog)