---
title: "HeroViewModel"
description: "HeroViewModel：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 CharacterViewModel；公开成员 5 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs。"
---
# HeroViewModel

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeroViewModel : CharacterViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs`

## 概述

HeroViewModel 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs。它是一个 public 类，实现/继承 CharacterViewModel，继承链为 HeroViewModel → CharacterViewModel。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeroViewModel 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 HeroViewModel → CharacterViewModel。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。继承链上的 CharacterViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroViewModel` | `public HeroViewModel(CharacterViewModel.StanceTypes stance = CharacterViewModel.StanceTypes.None) : base(stance)` | 构造函数 |
| `SetEquipment` | `public override void SetEquipment(Equipment equipment)` | 方法 |
| `FillFrom` | `public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsDead` | `public bool IsDead` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
