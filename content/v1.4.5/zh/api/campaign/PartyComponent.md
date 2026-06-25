---
title: "PartyComponent"
description: "PartyComponent 的自动生成类参考。"
---
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PartyComponent.cs`

## 概述

`PartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `PartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `PartyOwner` | `public abstract Hero PartyOwner { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `HomeSettlement` | `public abstract Settlement HomeSettlement { get; }` |

## 主要方法

### OnPartyComponentCreatedDelegate
`public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty)`

**用途 / Purpose:** 在 party component created delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyComponent 实例
PartyComponent partyComponent = ...;
partyComponent.OnPartyComponentCreatedDelegate(mobileParty);
```

### SetWagePaymentLimit
`public virtual void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 为 wage payment limit 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyComponent 实例
PartyComponent partyComponent = ...;
partyComponent.SetWagePaymentLimit(0);
```

### GetDefaultComponentBanner
`public abstract Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 读取并返回当前对象中 default component banner 的结果。

```csharp
// 先通过子系统 API 拿到 PartyComponent 实例
PartyComponent partyComponent = ...;
var result = partyComponent.GetDefaultComponentBanner();
```

### ClearCachedName
`public virtual void ClearCachedName()`

**用途 / Purpose:** 清空当前对象中的cached name。

```csharp
// 先通过子系统 API 拿到 PartyComponent 实例
PartyComponent partyComponent = ...;
partyComponent.ClearCachedName();
```

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**用途 / Purpose:** 调用 ChangePartyLeader 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyComponent 实例
PartyComponent partyComponent = ...;
partyComponent.ChangePartyLeader(newLeader);
```

### GetMountAndHarnessVisualIdsForPartyIcon
`public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** 读取并返回当前对象中 mount and harness visual ids for party icon 的结果。

```csharp
// 先通过子系统 API 拿到 PartyComponent 实例
PartyComponent partyComponent = ...;
partyComponent.GetMountAndHarnessVisualIdsForPartyIcon(party, mountStringId, harnessStringId);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyComponent instance = ...;
```

## 参见

- [本区域目录](../)