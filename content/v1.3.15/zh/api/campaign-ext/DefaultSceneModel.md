---
title: "DefaultSceneModel"
description: "DefaultSceneModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 battle scene for map patch 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSceneModel 实例
DefaultSceneModel defaultSceneModel = ...;
var result = defaultSceneModel.GetBattleSceneForMapPatch(mapPatch, false);
```

### GetConversationSceneForMapPosition
`public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**用途 / Purpose:** 读取并返回当前对象中 conversation scene for map position 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSceneModel 实例
DefaultSceneModel defaultSceneModel = ...;
var result = defaultSceneModel.GetConversationSceneForMapPosition(campaignPosition);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel());
```

## 参见

- [本区域目录](../)