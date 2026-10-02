---
title: "ActionCampaignOptionData"
description: "ActionCampaignOptionData：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 CampaignOptionData；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs。"
---
# ActionCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs`

## 概述

ActionCampaignOptionData 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs。它是一个 public 类，实现/继承 CampaignOptionData，继承链为 ActionCampaignOptionData → CampaignOptionData → ICampaignOptionData。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ActionCampaignOptionData 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 ActionCampaignOptionData → CampaignOptionData → ICampaignOptionData。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionCampaignOptionData` | `public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Action action, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null) : base(identifier, priorityIndex, enableState, null, null, getIsDisabledWithReason, false, null, null)` | 构造函数 |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 CampaignOptionData](../CampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
- [同命名空间 CampaignOptionDataType](../CampaignOptionDataType)
