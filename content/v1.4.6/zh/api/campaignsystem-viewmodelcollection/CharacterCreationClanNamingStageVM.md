---
title: "CharacterCreationClanNamingStageVM"
description: "CharacterCreationClanNamingStageVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 CharacterCreationStageBaseVM；公开成员 22 个（方法 10、属性 11、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationClanNamingStageVM.cs。"
---
# CharacterCreationClanNamingStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationClanNamingStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationClanNamingStageVM.cs`

## 概述

CharacterCreationClanNamingStageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationClanNamingStageVM.cs。它是一个 public 类，实现/继承 CharacterCreationStageBaseVM，继承链为 CharacterCreationClanNamingStageVM → CharacterCreationStageBaseVM → ViewModel。public/protected 成员共 22 个：10 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationClanNamingStageVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation），继承链 CharacterCreationClanNamingStageVM → CharacterCreationStageBaseVM → ViewModel。成员构成以属性为主（属性 11/22，方法 10/22），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationClanNamingStageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | 属性 |
| `ShieldSlotIndex` | `public int ShieldSlotIndex` | 属性 |
| `ShieldRosterElement` | `public ItemRosterElement ShieldRosterElement` | 属性 |
| `CharacterCreationClanNamingStageVM` | `public CharacterCreationClanNamingStageVM(BasicCharacterObject character, CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText) : base(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CanAdvanceToNextStage` | `public override bool CanAdvanceToNextStage()` | 方法 |
| `OnNextStage` | `public override void OnNextStage()` | 方法 |
| `OnPreviousStage` | `public override void OnPreviousStage()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | 属性 |
| `ClanName` | `public string ClanName` | 属性 |
| `ClanNameNotApplicableReason` | `public string ClanNameNotApplicableReason` | 属性 |
| `BottomHintText` | `public string BottomHintText` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [同命名空间 CharacterCreationCultureVM](../CharacterCreationCultureVM)
- [同命名空间 CharacterCreationGainedAttributeItemVM](../CharacterCreationGainedAttributeItemVM)
