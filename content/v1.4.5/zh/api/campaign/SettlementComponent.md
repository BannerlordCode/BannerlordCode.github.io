---
title: "SettlementComponent"
description: "SettlementComponent 的自动生成类参考。"
---
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/SettlementComponent.cs`

## 概述

`SettlementComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `SettlementComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Gold` | `public int Gold { get; }` |
| `BackgroundCropPosition` | `public float BackgroundCropPosition { get; set; }` |
| `BackgroundMeshName` | `public string BackgroundMeshName { get; set; }` |
| `WaitMeshName` | `public string WaitMeshName { get; set; }` |
| `CastleBackgroundMeshName` | `public string CastleBackgroundMeshName { get; set; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `MapFaction` | `public abstract IFaction MapFaction { get; set; }` |
| `IsOwnerUnassigned` | `public bool IsOwnerUnassigned { get; set; }` |

## 主要方法

### GetProsperityLevel
`public virtual ProsperityLevel GetProsperityLevel()`

**用途 / Purpose:** 读取并返回当前对象中 「prosperity level」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetProsperityLevel();
```

### GetDefaultComponentBanner
`public virtual Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 读取并返回当前对象中 「default component banner」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetDefaultComponentBanner();
```

### OnPartyEntered
`public virtual void OnPartyEntered(MobileParty mobileParty)`

**用途 / Purpose:** 在 「party entered」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.OnPartyEntered(mobileParty);
```

### OnPartyLeft
`public virtual void OnPartyLeft(MobileParty mobileParty)`

**用途 / Purpose:** 在 「party left」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.OnPartyLeft(mobileParty);
```

### OnInit
`public virtual void OnInit()`

**用途 / Purpose:** 在 「init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.OnInit();
```

### OnSessionStart
`public virtual void OnSessionStart()`

**用途 / Purpose:** 在 「session start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.OnSessionStart();
```

### ChangeGold
`public void ChangeGold(int changeAmount)`

**用途 / Purpose:** 处理与 「change gold」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.ChangeGold(0);
```

### GetNumberOfTroops
`public int GetNumberOfTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetNumberOfTroops();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.Deserialize(objectManager, node);
```

### GetItemPrice
`public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetItemPrice(item, null, false);
```

### GetItemPrice
`public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetItemPrice(itemRosterElement, null, false);
```

### OnRelatedPartyRemoved
`public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)`

**用途 / Purpose:** 在 「related party removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
settlementComponent.OnRelatedPartyRemoved(mobileParty);
```

### GetPrisonerHeroes
`public List<CharacterObject> GetPrisonerHeroes()`

**用途 / Purpose:** 读取并返回当前对象中 「prisoner heroes」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementComponent 实例
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetPrisonerHeroes();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementComponent instance = ...;
```

## 参见

- [本区域目录](../)