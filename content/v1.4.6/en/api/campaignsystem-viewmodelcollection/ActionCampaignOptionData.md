---
title: "ActionCampaignOptionData"
description: "ActionCampaignOptionData: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CampaignOptionData; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs."
---
# ActionCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs`

## Overview

ActionCampaignOptionData lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs. It is a public class, implementing/inheriting CampaignOptionData; the inheritance chain is ActionCampaignOptionData → CampaignOptionData → ICampaignOptionData. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionCampaignOptionData is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain ActionCampaignOptionData → CampaignOptionData → ICampaignOptionData. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionCampaignOptionData` | `public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Action action, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null) : base(identifier, priorityIndex, enableState, null, null, getIsDisabledWithReason, false, null, null)` | constructor |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignOptionData](../CampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
- [same namespace CampaignOptionDataType](../CampaignOptionDataType)
