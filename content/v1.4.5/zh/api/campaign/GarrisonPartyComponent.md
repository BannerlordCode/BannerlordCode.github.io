---
title: "GarrisonPartyComponent"
description: "GarrisonPartyComponent 的自动生成类参考。"
---
# GarrisonPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/GarrisonPartyComponent.cs`

## 概述

`GarrisonPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `GarrisonPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## 主要方法

### InitializeGarrisonPartyProperties
`public void InitializeGarrisonPartyProperties(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 为 「garrison party properties」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GarrisonPartyComponent 实例
GarrisonPartyComponent garrisonPartyComponent = ...;
garrisonPartyComponent.InitializeGarrisonPartyProperties(mobileParty, settlement);
```

### CreateGarrisonParty
`public static MobileParty CreateGarrisonParty(string stringId, Settlement settlement)`

**用途 / Purpose:** 构建一个新的 「garrison party」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GarrisonPartyComponent.CreateGarrisonParty("example", settlement);
```

### ConvertPartyToGarrisonParty
`public static void ConvertPartyToGarrisonParty(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 把「party to garrison party」转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
GarrisonPartyComponent.ConvertPartyToGarrisonParty(mobileParty, settlement);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 读取并返回当前对象中 「default component banner」 的结果。

```csharp
// 先通过子系统 API 拿到 GarrisonPartyComponent 实例
GarrisonPartyComponent garrisonPartyComponent = ...;
var result = garrisonPartyComponent.GetDefaultComponentBanner();
```

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 为 「wage payment limit」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GarrisonPartyComponent 实例
GarrisonPartyComponent garrisonPartyComponent = ...;
garrisonPartyComponent.SetWagePaymentLimit(0);
```

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 清空当前对象中的「cached name」。

```csharp
// 先通过子系统 API 拿到 GarrisonPartyComponent 实例
GarrisonPartyComponent garrisonPartyComponent = ...;
garrisonPartyComponent.ClearCachedName();
```

## 使用示例

```csharp
var component = agent.GetComponent<GarrisonPartyComponent>();
```

## 参见

- [本区域目录](../)