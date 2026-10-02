---
title: "AnyNotableTypeTag"
description: "AnyNotableTypeTag：TaleWorlds.CampaignSystem 的 public 类，继承 ConversationTag；公开成员 3 个（方法 1、属性 1、字段 1）。源文件 TaleWorlds.CampaignSystem/Conversation/Tags/AnyNotableTypeTag.cs。"
---
# AnyNotableTypeTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AnyNotableTypeTag : ConversationTag`
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/AnyNotableTypeTag.cs`

## 概述

AnyNotableTypeTag 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Conversation/Tags/AnyNotableTypeTag.cs。它是一个 public 类，实现/继承 ConversationTag，继承链为 AnyNotableTypeTag → ConversationTag。public/protected 成员共 3 个：1 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AnyNotableTypeTag 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Conversation.Tags），继承链 AnyNotableTypeTag → ConversationTag。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Conversation/Tags/AnyNotableTypeTag.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public override string StringId` | 属性 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 方法 |
| `Id` | `public const string Id` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ConversationTag](../ConversationTag)
- [同命名空间 AlliedLordTag](../AlliedLordTag)
- [同命名空间 AmoralTag](../AmoralTag)
- [同命名空间 ArtisanNotableTypeTag](../ArtisanNotableTypeTag)
- [同命名空间 AseraiTag](../AseraiTag)
