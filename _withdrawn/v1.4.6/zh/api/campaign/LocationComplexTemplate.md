---
title: "LocationComplexTemplate"
description: "LocationComplexTemplate：TaleWorlds.CampaignSystem.Settlements.Locations 的 public 类，继承 MBObjectBase；公开成员 3 个（方法 1、属性 0、字段 2）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LocationComplexTemplate

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class LocationComplexTemplate : MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

LocationComplexTemplate 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs。它是一个 public 类（sealed），实现/继承 MBObjectBase，继承链为 LocationComplexTemplate → MBObjectBase。public/protected 成员共 3 个：1 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LocationComplexTemplate 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations`，继承链 LocationComplexTemplate → MBObjectBase。成员构成以方法为主（方法 1/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `List` | `public List<Location>Locations` | 字段 |
| `string>>Passages` | `public List<KeyValuePair<string, string>>Passages` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 AccompanyingCharacter](../AccompanyingCharacter/)
- [同命名空间 CanUseDoor](../CanUseDoor/)
- [同命名空间 CreateLocationCharacterDelegate](../CreateLocationCharacterDelegate/)
- [同命名空间 Location](../Location/)
