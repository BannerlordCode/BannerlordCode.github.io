---
title: "DefaultSceneModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSceneModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSceneModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSceneModel : SceneModel`
**Base:** `SceneModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs`

## 概述

`DefaultSceneModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSceneModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBattleSceneForMapPatch
`public override string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)`

**用途 / Purpose:** 获取 `battle scene for map patch` 的当前值。

### GetConversationSceneForMapPosition
`public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**用途 / Purpose:** 获取 `conversation scene for map position` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel());
```

## 参见

- [完整类目录](../catalog)