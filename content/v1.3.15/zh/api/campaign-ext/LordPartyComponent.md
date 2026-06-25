---
title: "LordPartyComponent"
description: "LordPartyComponent 的自动生成类参考。"
---
# LordPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## 概述

`LordPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `LordPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Leader` | `public override Hero Leader { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |

## 主要方法

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 为 「wage payment limit」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LordPartyComponent 实例
LordPartyComponent lordPartyComponent = ...;
lordPartyComponent.SetWagePaymentLimit(0);
```

### CreateLordParty
`public static MobileParty CreateLordParty(string stringId, Hero hero, CampaignVec2 position, float spawnRadius, Settlement spawnSettlement, Hero partyLeader)`

**用途 / Purpose:** 构建一个新的 「lord party」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
LordPartyComponent.CreateLordParty("example", hero, position, 0, spawnSettlement, partyLeader);
```

### ConvertPartyToLordParty
`public static void ConvertPartyToLordParty(MobileParty mobileParty, Hero owner, Hero partyLeader)`

**用途 / Purpose:** 把「party to lord party」转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
LordPartyComponent.ConvertPartyToLordParty(mobileParty, owner, partyLeader);
```

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 清空当前对象中的「cached name」。

```csharp
// 先通过子系统 API 拿到 LordPartyComponent 实例
LordPartyComponent lordPartyComponent = ...;
lordPartyComponent.ClearCachedName();
```

### InitializeLordPartyProperties
`public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)`

**用途 / Purpose:** 为 「lord party properties」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LordPartyComponent 实例
LordPartyComponent lordPartyComponent = ...;
lordPartyComponent.InitializeLordPartyProperties(mobileParty, owner);
```

## 使用示例

```csharp
var component = agent.GetComponent<LordPartyComponent>();
```

## 参见

- [本区域目录](../)