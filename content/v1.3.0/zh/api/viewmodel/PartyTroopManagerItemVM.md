---
title: "PartyTroopManagerItemVM"
description: "PartyTroopManagerItemVM 的自动生成类参考。"
---
# PartyTroopManagerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`

## 概述

`PartyTroopManagerItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SetFocused` | `public Action<PartyTroopManagerItemVM> SetFocused { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `PartyCharacter` | `public PartyCharacterVM PartyCharacter { get; set; }` |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable { get; set; }` |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable { get; set; }` |

## 主要方法

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 「set focused」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerItemVM 实例
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 「set unfocused」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerItemVM 实例
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteSetUnfocused();
```

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**用途 / Purpose:** 执行 「open troop encyclopedia」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerItemVM 实例
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteOpenTroopEncyclopedia();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteSetFocused();
```

## 参见

- [本区域目录](../)