---
title: "HeroVM"
description: "HeroVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 15 个（方法 5、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs。"
---
# HeroVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeroVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs`

## 概述

HeroVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 HeroVM → ViewModel。public/protected 成员共 15 个：5 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeroVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 HeroVM → ViewModel。成员构成以属性为主（属性 9/15，方法 5/15），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | 属性 |
| `HeroVM` | `public HeroVM(Hero hero, bool useCivilian = false)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | 方法 |
| `IsDead` | `public bool IsDead` | 属性 |
| `IsChild` | `public bool IsChild` | 属性 |
| `IsKingdomLeader` | `public bool IsKingdomLeader` | 属性 |
| `Relation` | `public int Relation` | 属性 |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `ClanBanner_9` | `public BannerImageIdentifierVM ClanBanner_9` | 属性 |
| `GetRelation` | `public static int GetRelation(Hero hero)` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
