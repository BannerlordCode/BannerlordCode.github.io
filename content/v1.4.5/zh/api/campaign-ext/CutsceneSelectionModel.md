---
title: "CutsceneSelectionModel"
description: "CutsceneSelectionModel 的自动生成类参考。"
---
# CutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CutsceneSelectionModel : MBGameModel<CutsceneSelectionModel>`
**Base:** `MBGameModel<CutsceneSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CutsceneSelectionModel.cs`

## 概述

`CutsceneSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CutsceneSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetKingdomDestroyedSceneNotification
`public abstract SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 kingdom destroyed scene notification 的结果。

```csharp
// 先通过子系统 API 拿到 CutsceneSelectionModel 实例
CutsceneSelectionModel cutsceneSelectionModel = ...;
var result = cutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CutsceneSelectionModel instance = ...;
```

## 参见

- [本区域目录](../)