---
title: "DefaultEncounterGameMenuModel"
description: "DefaultEncounterGameMenuModel 的自动生成类参考。"
---
# DefaultEncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEncounterGameMenuModel.cs`

## 概述

`DefaultEncounterGameMenuModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEncounterGameMenuModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**用途 / Purpose:** 读取并返回当前对象中 「encounter menu」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterGameMenuModel 实例
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**用途 / Purpose:** 读取并返回当前对象中 「raid complete menu」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterGameMenuModel 实例
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetRaidCompleteMenu();
```

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**用途 / Purpose:** 读取并返回当前对象中 「new party join menu」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterGameMenuModel 实例
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**用途 / Purpose:** 读取并返回当前对象中 「generic state menu」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterGameMenuModel 实例
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetGenericStateMenu();
```

### IsPlunderMenu
`public override bool IsPlunderMenu(string gameMenuId)`

**用途 / Purpose:** 判断当前对象是否处于 「plunder menu」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterGameMenuModel 实例
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.IsPlunderMenu("example");
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEncounterGameMenuModel>(new MyDefaultEncounterGameMenuModel());
```

## 参见

- [本区域目录](../)