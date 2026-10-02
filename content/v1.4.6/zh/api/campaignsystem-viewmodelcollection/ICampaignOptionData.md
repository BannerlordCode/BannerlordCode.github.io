---
title: "ICampaignOptionData"
description: "ICampaignOptionData：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 接口；公开成员 11 个（方法 11、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs。"
---
# ICampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public interface ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs`

## 概述

ICampaignOptionData 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs。它是一个 public 接口，继承链为 ICampaignOptionData。public/protected 成员共 11 个：11 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICampaignOptionData 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 ICampaignOptionData。成员构成以方法为主（方法 11/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDataType` | `CampaignOptionDataType GetDataType();` | 方法 |
| `GetPriorityIndex` | `int GetPriorityIndex();` | 方法 |
| `IsRelatedToDifficultyPreset` | `bool IsRelatedToDifficultyPreset();` | 方法 |
| `GetValueFromDifficultyPreset` | `float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset);` | 方法 |
| `GetIdentifier` | `string GetIdentifier();` | 方法 |
| `GetEnableState` | `CampaignOptionEnableState GetEnableState();` | 方法 |
| `GetName` | `string GetName();` | 方法 |
| `GetDescription` | `string GetDescription();` | 方法 |
| `GetValue` | `float GetValue();` | 方法 |
| `SetValue` | `void SetValue(float value);` | 方法 |
| `GetIsDisabledWithReason` | `CampaignOptionDisableStatus GetIsDisabledWithReason();` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
