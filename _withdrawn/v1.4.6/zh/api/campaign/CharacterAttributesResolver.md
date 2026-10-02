---
title: "CharacterAttributesResolver"
description: "CharacterAttributesResolver：TaleWorlds.CampaignSystem.SaveCompability 的 public 类，继承 IConflictResolver；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterAttributesResolver

**Namespace:** `TaleWorlds.CampaignSystem.SaveCompability`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterAttributesResolver : IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

CharacterAttributesResolver 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs。它是一个 public 类，实现/继承 IConflictResolver，继承链为 CharacterAttributesResolver → IConflictResolver。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterAttributesResolver 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.SaveCompability`，继承链 CharacterAttributesResolver → IConflictResolver。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsApplicable` | `public bool IsApplicable(ApplicationVersion version)` | 方法 |
| `GetFieldMemberWithId` | `public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)` | 方法 |
| `GetNewType` | `public Type GetNewType()` | 方法 |
| `GetPropertyMemberWithId` | `public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IConflictResolver](../../save-system/IConflictResolver/)
- [同命名空间 ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver/)
- [同命名空间 BattleTypeEnumResolver](../BattleTypeEnumResolver/)
- [同命名空间 CharacterPerksResolver](../CharacterPerksResolver/)
- [同命名空间 CharacterTraitsResolver](../CharacterTraitsResolver/)
