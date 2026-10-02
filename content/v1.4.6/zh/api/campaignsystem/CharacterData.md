---
title: "CharacterData"
description: "CharacterData：TaleWorlds.CampaignSystem 的 public 类；公开成员 7 个（方法 2、属性 2、字段 1）。源文件 TaleWorlds.CampaignSystem/CharacterData.cs。"
---
# CharacterData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterData`
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## 概述

CharacterData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterData.cs。它是一个 public 类，继承链为 CharacterData。public/protected 成员共 7 个：2 方法、2 属性、1 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 CharacterData。成员构成以方法为主（方法 2/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExportCharacter` | `public static void ExportCharacter(Hero hero, string path)` | 方法 |
| `ImportCharacter` | `public static void ImportCharacter(Hero hero, string path)` | 方法 |
| `CharacterDataExtension` | `public const string CharacterDataExtension` | 字段 |
| `PropertyObjectData` | `public class PropertyObjectData` | 属性 |
| `CharacterData.PropertyObjectData` | `public class SkillObjectData : CharacterData.PropertyObjectData` | 属性 |
| `PropertyObjectData` | `public class PropertyObjectData` | 嵌套类型 |
| `CharacterData.PropertyObjectData` | `public class SkillObjectData : CharacterData.PropertyObjectData` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
