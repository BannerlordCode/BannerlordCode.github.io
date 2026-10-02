---
title: "CharacterCreationReviewStageVM"
description: "CharacterCreationReviewStageVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 CharacterCreationStageBaseVM；公开成员 21 个（方法 10、属性 10、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs。"
---
# CharacterCreationReviewStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs`

## 概述

CharacterCreationReviewStageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs。它是一个 public 类，实现/继承 CharacterCreationStageBaseVM，继承链为 CharacterCreationReviewStageVM → CharacterCreationStageBaseVM → ViewModel。public/protected 成员共 21 个：10 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationReviewStageVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation），继承链 CharacterCreationReviewStageVM → CharacterCreationStageBaseVM → ViewModel。成员构成以方法为主（方法 10/21，属性 10/21），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationReviewStageVM` | `public CharacterCreationReviewStageVM(CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText, bool isBannerAndClanNameSet) : base(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText)` | 构造函数 |
| `ExecuteRandomizeName` | `public void ExecuteRandomizeName()` | 方法 |
| `OnNextStage` | `public override void OnNextStage()` | 方法 |
| `OnPreviousStage` | `public override void OnPreviousStage()` | 方法 |
| `CanAdvanceToNextStage` | `public override bool CanAdvanceToNextStage()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | 属性 |
| `Name` | `public string Name` | 属性 |
| `NameTextQuestion` | `public string NameTextQuestion` | 属性 |
| `MBBindingList` | `public MBBindingList<CharacterCreationReviewStageItemVM>ReviewList` | 属性 |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `CannotAdvanceReasonHint` | `public HintViewModel CannotAdvanceReasonHint` | 属性 |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM)
- [同命名空间 CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [同命名空间 CharacterCreationCultureVM](../CharacterCreationCultureVM)
