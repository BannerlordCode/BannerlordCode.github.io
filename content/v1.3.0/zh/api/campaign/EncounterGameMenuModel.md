---
title: "EncounterGameMenuModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterGameMenuModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**Base:** `MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`

## 概述

`EncounterGameMenuModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EncounterGameMenuModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEncounterMenu
`public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**用途 / Purpose:** 获取 `encounter menu` 的当前值。

### GetRaidCompleteMenu
`public abstract string GetRaidCompleteMenu()`

**用途 / Purpose:** 获取 `raid complete menu` 的当前值。

### GetNewPartyJoinMenu
`public abstract string GetNewPartyJoinMenu(MobileParty newParty)`

**用途 / Purpose:** 获取 `new party join menu` 的当前值。

### GetGenericStateMenu
`public abstract string GetGenericStateMenu()`

**用途 / Purpose:** 获取 `generic state menu` 的当前值。

### IsPlunderMenu
`public abstract bool IsPlunderMenu(string menuId)`

**用途 / Purpose:** 处理 `is plunder menu` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomEncounterGameMenuModel();
```

## 参见

- [完整类目录](../catalog)