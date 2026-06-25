---
title: "SceneModel"
description: "SceneModel 的自动生成类参考。"
---
# SceneModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SceneModel : MBGameModel<SceneModel>`
**Base:** `MBGameModel<SceneModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs`

## 概述

`SceneModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SceneModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetConversationSceneForMapPosition
`public abstract string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「conversation scene for map position」 的结果。

```csharp
// 先通过子系统 API 拿到 SceneModel 实例
SceneModel sceneModel = ...;
var result = sceneModel.GetConversationSceneForMapPosition(campaignPosition);
```

### GetBattleSceneForMapPatch
`public abstract string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)`

**用途 / Purpose:** 读取并返回当前对象中 「battle scene for map patch」 的结果。

```csharp
// 先通过子系统 API 拿到 SceneModel 实例
SceneModel sceneModel = ...;
var result = sceneModel.GetBattleSceneForMapPatch(mapPatch, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SceneModel instance = ...;
```

## 参见

- [本区域目录](../)