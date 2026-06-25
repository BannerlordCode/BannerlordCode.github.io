---
title: "ArmyManagementItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyManagementItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyManagementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementItemVM.cs`

## 概述

`ArmyManagementItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DistInTime` | `public float DistInTime { get; set; }` |
| `_distance` | `public float _distance { get; set; }` |
| `Clan` | `public Clan Clan { get; set; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `Strength` | `public int Strength { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `HasShip` | `public bool HasShip { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `InArmyText` | `public string InArmyText { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsCostRelevant` | `public bool IsCostRelevant { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `LordFace` | `public CharacterImageIdentifierVM LordFace { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsAlreadyWithPlayer` | `public bool IsAlreadyWithPlayer { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |
| `LeaderNameText` | `public string LeaderNameText { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 `set focused` 操作或流程。

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 `set unfocused` 操作或流程。

### UpdateEligibility
`public void UpdateEligibility()`

**用途 / Purpose:** 更新 `eligibility` 的状态或数据。

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** 执行 `begin hint` 操作或流程。

### ExecuteBeginClanHint
`public void ExecuteBeginClanHint()`

**用途 / Purpose:** 执行 `begin clan hint` 操作或流程。

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 执行 `end hint` 操作或流程。

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** 执行 `open encyclopedia` 操作或流程。

### ExecuteOpenClanEncyclopedia
`public void ExecuteOpenClanEncyclopedia()`

**用途 / Purpose:** 执行 `open clan encyclopedia` 操作或流程。

## 使用示例

```csharp
var value = new ArmyManagementItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)