---
title: "CampaignOptionData"
description: "CampaignOptionData：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ICampaignOptionData；公开成员 14 个（方法 13、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs。"
---
# CampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`

## 概述

CampaignOptionData 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs。它是一个 public 类（abstract），实现/继承 ICampaignOptionData，继承链为 CampaignOptionData → ICampaignOptionData。public/protected 成员共 14 个：13 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignOptionData 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 CampaignOptionData → ICampaignOptionData。成员构成以方法为主（方法 13/14，属性 0/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignOptionData` | `public CampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float>getValue, Action<float>setValue, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets>onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float>onGetValueFromDifficultyPreset = null)` | 构造函数 |
| `GetNameOfOption` | `public static TextObject GetNameOfOption(string optionIdentifier)` | 方法 |
| `GetDescriptionOfOption` | `public static TextObject GetDescriptionOfOption(string optionIdentifier)` | 方法 |
| `GetPriorityIndex` | `public int GetPriorityIndex()` | 方法 |
| `GetDataType` | `public abstract CampaignOptionDataType GetDataType();` | 方法 |
| `IsRelatedToDifficultyPreset` | `public bool IsRelatedToDifficultyPreset()` | 方法 |
| `GetValueFromDifficultyPreset` | `public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)` | 方法 |
| `GetIsDisabledWithReason` | `public CampaignOptionDisableStatus GetIsDisabledWithReason()` | 方法 |
| `GetIdentifier` | `public string GetIdentifier()` | 方法 |
| `GetEnableState` | `public CampaignOptionEnableState GetEnableState()` | 方法 |
| `GetName` | `public string GetName()` | 方法 |
| `GetDescription` | `public string GetDescription()` | 方法 |
| `GetValue` | `public float GetValue()` | 方法 |
| `SetValue` | `public void SetValue(float value)` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ICampaignOptionData](../ICampaignOptionData)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionDataType](../CampaignOptionDataType)
