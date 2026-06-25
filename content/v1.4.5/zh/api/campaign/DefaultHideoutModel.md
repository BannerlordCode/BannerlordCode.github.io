---
title: "DefaultHideoutModel"
description: "DefaultHideoutModel 的自动生成类参考。"
---
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHideoutModel.cs`

## 概述

`DefaultHideoutModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHideoutModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRogueryXpGainAsGhost
`public override float GetRogueryXpGainAsGhost()`

**用途 / Purpose:** 读取并返回当前对象中 roguery xp gain as ghost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHideoutModel 实例
DefaultHideoutModel defaultHideoutModel = ...;
var result = defaultHideoutModel.GetRogueryXpGainAsGhost();
```

### GetRogueryXpGainOnHideoutMissionEnd
`public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**用途 / Purpose:** 读取并返回当前对象中 roguery xp gain on hideout mission end 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHideoutModel 实例
DefaultHideoutModel defaultHideoutModel = ...;
var result = defaultHideoutModel.GetRogueryXpGainOnHideoutMissionEnd(false);
```

### GetSendTroopsSuccessChance
`public override float GetSendTroopsSuccessChance(Hideout hideout)`

**用途 / Purpose:** 读取并返回当前对象中 send troops success chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHideoutModel 实例
DefaultHideoutModel defaultHideoutModel = ...;
var result = defaultHideoutModel.GetSendTroopsSuccessChance(hideout);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## 参见

- [本区域目录](../)