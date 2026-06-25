---
title: "MilitiaPartyComponent"
description: "MilitiaPartyComponent 的自动生成类参考。"
---
# MilitiaPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MilitiaPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/MilitiaPartyComponent.cs`

## 概述

`MilitiaPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MilitiaPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |

## 主要方法

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 读取并返回当前对象中 default component banner 的结果。

```csharp
// 先通过子系统 API 拿到 MilitiaPartyComponent 实例
MilitiaPartyComponent militiaPartyComponent = ...;
var result = militiaPartyComponent.GetDefaultComponentBanner();
```

### CreateMilitiaParty
`public static MobileParty CreateMilitiaParty(string stringId, Settlement settlement)`

**用途 / Purpose:** 构建一个新的 militia party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MilitiaPartyComponent.CreateMilitiaParty("example", settlement);
```

### ConvertPartyToMilitiaParty
`public static void ConvertPartyToMilitiaParty(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 把party to militia party转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
MilitiaPartyComponent.ConvertPartyToMilitiaParty(mobileParty, settlement);
```

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 清空当前对象中的cached name。

```csharp
// 先通过子系统 API 拿到 MilitiaPartyComponent 实例
MilitiaPartyComponent militiaPartyComponent = ...;
militiaPartyComponent.ClearCachedName();
```

### InitializeMilitiaPartyProperties
`public void InitializeMilitiaPartyProperties(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 为 militia party properties 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MilitiaPartyComponent 实例
MilitiaPartyComponent militiaPartyComponent = ...;
militiaPartyComponent.InitializeMilitiaPartyProperties(mobileParty, settlement);
```

## 使用示例

```csharp
var component = agent.GetComponent<MilitiaPartyComponent>();
```

## 参见

- [本区域目录](../)