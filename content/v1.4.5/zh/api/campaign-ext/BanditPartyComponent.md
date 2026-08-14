---
title: "BanditPartyComponent"
description: "BanditPartyComponent 的自动生成类参考。"
---
# BanditPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## 概述

`BanditPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `BanditPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### CreateBanditParty
`public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**用途 / Purpose:** 构建一个新的 bandit party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BanditPartyComponent.CreateBanditParty("example", clan, hideout, false, pt, initialPosition);
```

### ConvertPartyToBanditParty
`public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)`

**用途 / Purpose:** 把party to bandit party转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
BanditPartyComponent.ConvertPartyToBanditParty(mobileParty, clan, hideout, false);
```

### CreateLooterParty
`public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**用途 / Purpose:** 构建一个新的 looter party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BanditPartyComponent.CreateLooterParty("example", clan, relatedSettlement, false, pt, initialPosition);
```

### ConvertPartyToLooterParty
`public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)`

**用途 / Purpose:** 把party to looter party转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
BanditPartyComponent.ConvertPartyToLooterParty(mobileParty, clan, relatedSettlement);
```

### SetHomeHideout
`public void SetHomeHideout(Hideout hideout)`

**用途 / Purpose:** 为 home hideout 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BanditPartyComponent 实例
BanditPartyComponent banditPartyComponent = ...;
banditPartyComponent.SetHomeHideout(hideout);
```

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 清空当前对象中的cached name。

```csharp
// 先通过子系统 API 拿到 BanditPartyComponent 实例
BanditPartyComponent banditPartyComponent = ...;
banditPartyComponent.ClearCachedName();
```

### InitializeBanditOnCreation
`public void InitializeBanditOnCreation(MobileParty mobileParty)`

**用途 / Purpose:** 为 bandit on creation 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BanditPartyComponent 实例
BanditPartyComponent banditPartyComponent = ...;
banditPartyComponent.InitializeBanditOnCreation(mobileParty);
```

## 使用示例

```csharp
var component = agent.GetComponent<BanditPartyComponent>();
```

## 参见

- [本区域目录](../)