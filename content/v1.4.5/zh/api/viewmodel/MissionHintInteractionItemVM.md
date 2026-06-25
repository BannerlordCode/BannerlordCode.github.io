---
title: "MissionHintInteractionItemVM"
description: "MissionHintInteractionItemVM 的自动生成类参考。"
---
# MissionHintInteractionItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class MissionHintInteractionItemVM : MissionInteractionItemBaseVM`
**Base:** `MissionInteractionItemBaseVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems/MissionHintInteractionItemVM.cs`

## 概述

`MissionHintInteractionItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionHintInteractionItemVM 实例
MissionHintInteractionItemVM missionHintInteractionItemVM = ...;
missionHintInteractionItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionHintInteractionItemVM missionHintInteractionItemVM = ...;
missionHintInteractionItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)