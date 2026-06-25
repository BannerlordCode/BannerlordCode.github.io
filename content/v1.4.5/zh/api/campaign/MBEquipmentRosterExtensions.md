---
title: "MBEquipmentRosterExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBEquipmentRosterExtensions`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBEquipmentRosterExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MBEquipmentRosterExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/MBEquipmentRosterExtensions.cs`

## 概述

`MBEquipmentRosterExtensions` 位于 `TaleWorlds.CampaignSystem.Extensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Extensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetCivilianEquipments
`public static IEnumerable<Equipment> GetCivilianEquipments(this MBEquipmentRoster instance)`

**用途 / Purpose:** 获取 `civilian equipments` 的当前值。

### GetStealthEquipments
`public static IEnumerable<Equipment> GetStealthEquipments(this MBEquipmentRoster instance)`

**用途 / Purpose:** 获取 `stealth equipments` 的当前值。

### GetBattleEquipments
`public static IEnumerable<Equipment> GetBattleEquipments(this MBEquipmentRoster instance)`

**用途 / Purpose:** 获取 `battle equipments` 的当前值。

### GetRandomCivilianEquipment
`public static Equipment GetRandomCivilianEquipment(this MBEquipmentRoster instance)`

**用途 / Purpose:** 获取 `random civilian equipment` 的当前值。

### GetRandomStealthEquipment
`public static Equipment GetRandomStealthEquipment(this MBEquipmentRoster instance)`

**用途 / Purpose:** 获取 `random stealth equipment` 的当前值。

## 使用示例

```csharp
MBEquipmentRosterExtensions.GetCivilianEquipments(instance);
```

## 参见

- [完整类目录](../catalog)