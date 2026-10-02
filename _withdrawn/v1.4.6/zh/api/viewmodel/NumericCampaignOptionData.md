---
title: "NumericCampaignOptionData"
description: "NumericCampaignOptionData：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 CampaignOptionData；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NumericCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class NumericCampaignOptionData : CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

NumericCampaignOptionData 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs。它是一个 public 类，实现/继承 CampaignOptionData，继承链为 NumericCampaignOptionData → CampaignOptionData → ICampaignOptionData。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NumericCampaignOptionData 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection`，继承链 NumericCampaignOptionData → CampaignOptionData → ICampaignOptionData。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinValue` | `public float MinValue` | 属性 |
| `MaxValue` | `public float MaxValue` | 属性 |
| `IsDiscrete` | `public bool IsDiscrete` | 属性 |
| `NumericCampaignOptionData` | `public NumericCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float>getValue, Action<float>setValue, float minValue, float maxValue, bool isDiscrete, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets>onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float>onGetValueFromDifficultyPreset = null) : base(identifier, priorityIndex, enableState, getValue, setValue, getIsDisabledWithReason, isRelatedToDifficultyPreset, onGetDifficultyPresetFromValue, onGetValueFromDifficultyPreset)` | 构造函数 |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignOptionData](../CampaignOptionData/)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData/)
- [同命名空间 BannerEditorVM](../BannerEditorVM/)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [同命名空间 CampaignOptionData](../CampaignOptionData/)
