---
title: "MBEquipmentRosterExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBEquipmentRosterExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEquipmentRosterExtensions

**命名空间:** TaleWorlds.CampaignSystem.Extensions
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class MBEquipmentRosterExtensions`
**领域:** campaign-ext

## 概述

`MBEquipmentRosterExtensions` 位于 `TaleWorlds.CampaignSystem.Extensions`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Extensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<MBEquipmentRoster> All { get; }` |

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
// 先准备该类型需要的上下文，然后直接调用静态入口
MBEquipmentRosterExtensions.GetCivilianEquipments(instance);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
