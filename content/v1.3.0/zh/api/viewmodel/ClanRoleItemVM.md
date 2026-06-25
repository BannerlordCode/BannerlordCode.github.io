---
title: "ClanRoleItemVM"
description: "ClanRoleItemVM 的自动生成类参考。"
---
# ClanRoleItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs`

## 概述

`ClanRoleItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Members` | `public MBBindingList<ClanRoleMemberItemVM> Members { get; set; }` |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner { get; set; }` |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `IsNotAssigned` | `public bool IsNotAssigned { get; set; }` |
| `HasEffects` | `public bool HasEffects { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AssignedMemberEffects` | `public string AssignedMemberEffects { get; set; }` |
| `NoEffectText` | `public string NoEffectText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanRoleItemVM 实例
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanRoleItemVM 实例
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.OnFinalize();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanRoleItemVM 实例
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.Refresh();
```

### ExecuteToggleRoleSelection
`public void ExecuteToggleRoleSelection()`

**用途 / Purpose:** 执行 toggle role selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanRoleItemVM 实例
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.ExecuteToggleRoleSelection();
```

### SetEnabled
`public void SetEnabled(bool enabled, TextObject disabledHint)`

**用途 / Purpose:** 为 enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClanRoleItemVM 实例
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.SetEnabled(false, disabledHint);
```

### Compare
`public int Compare(ClanRoleMemberItemVM x, ClanRoleMemberItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ClanRoleItemVM 实例
ClanRoleItemVM clanRoleItemVM = ...;
var result = clanRoleItemVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)