---
title: "BannerEditorVM"
description: "BannerEditorVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 46 个（方法 13、属性 31、字段 1）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs。"
---
# BannerEditorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class BannerEditorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs`

## 概述

BannerEditorVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BannerEditorVM → ViewModel。public/protected 成员共 46 个：13 方法、31 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerEditorVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 BannerEditorVM → ViewModel。成员构成以属性为主（属性 31/46，方法 13/46），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | 属性 |
| `BannerEditorVM` | `public BannerEditorVM(BasicCharacterObject character, Banner banner, Action<bool>onExit, Action refresh, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int>goToIndex)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshSelectedColorsAndSigils` | `public void RefreshSelectedColorsAndSigils()` | 方法 |
| `SetClanRelatedRules` | `public void SetClanRelatedRules(bool canChangeBackgroundColor)` | 方法 |
| `ExecuteSwitchColors` | `public void ExecuteSwitchColors()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | 属性 |
| `ExecuteGoToIndex` | `public void ExecuteGoToIndex(int index)` | 方法 |
| `MBBindingList` | `public MBBindingList<HintViewModel>CategoryNames` | 属性 |
| `MBBindingList` | `public MBBindingList<BannerIconVM>IconsList` | 属性 |
| `MBBindingList` | `public MBBindingList<BannerColorVM>PrimaryColorList` | 属性 |
| `MBBindingList` | `public MBBindingList<BannerColorVM>SigilColorList` | 属性 |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | 属性 |
| `UndoHint` | `public HintViewModel UndoHint` | 属性 |
| `RedoHint` | `public HintViewModel RedoHint` | 属性 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `CurrentShieldName` | `public string CurrentShieldName` | 属性 |
| `MinIconSize` | `public int MinIconSize` | 属性 |
| `MaxIconSize` | `public int MaxIconSize` | 属性 |
| `CurrentIconSize` | `public int CurrentIconSize` | 属性 |
| `PrimaryColorText` | `public string PrimaryColorText` | 属性 |
| `SizeText` | `public string SizeText` | 属性 |
| `SigilColorText` | `public string SigilColorText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `BannerVM` | `public BannerViewModel BannerVM` | 属性 |
| `IconCodes` | `public string IconCodes` | 属性 |
| `ColorCodes` | `public string ColorCodes` | 属性 |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor` | 属性 |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | 属性 |
| `Title` | `public string Title` | 属性 |
| `Description` | `public string Description` | 属性 |
| `TotalStageCount` | `public int TotalStageCount` | 属性 |
| `CurrentStageIndex` | `public int CurrentStageIndex` | 属性 |
| `FurthestIndex` | `public int FurthestIndex` | 属性 |
| `ShieldSlotIndex` | `public int ShieldSlotIndex` | 字段 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
- [同命名空间 CampaignOptionDataType](../CampaignOptionDataType)
